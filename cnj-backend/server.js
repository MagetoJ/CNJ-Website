const express = require('express');
const cors = require('cors');
const db = require('./db');
const puppeteer = require('puppeteer');

const app = express();
app.use(cors({
  origin: '*', // In production, replace with your frontend URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// 1. Generate Itinerary Endpoint
app.post('/api/itinerary/generate', (req, res) => {
  console.log("Quiz data received:", req.body);
  const { destination } = req.body;

  // Fetch matching template from SQLite
  const row = db.prepare('SELECT * FROM itineraries WHERE destination_id = ?').get(destination);
  
  if (!row) {
    // If no itinerary is found in the database, return a success message with fallback data.
    // This stops the 404 error and allows you to test the frontend display.
    return res.json({
      title: "Custom Safari Adventure",
      days: [
        { day: 1, title: "Arrival", description: "Welcome to your safari", activities: ["Airport pickup"] }
      ],
      estimatedPrice: 1500,
      priceBreakdown: { accommodation: 800, activities: 400, transport: 300 }
    });
  }

  res.json({
    title: row.title,
    days: JSON.parse(row.content),
    estimatedPrice: row.base_price, // Apply multipliers for luxury/mid-range here
    priceBreakdown: { accommodation: 500, activities: 300, transport: 200, parkFees: 150 }
  });
});

// 2. PDF Generation Endpoint
app.post('/api/itinerary/pdf', async (req, res) => {
  let browser;
  try {
    const { itinerary, quizData } = req.body;
    if (!itinerary || !itinerary.days) {
      return res.status(400).send("Itinerary data is missing");
    }

    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    const html = `
      <div style="font-family: sans-serif; padding: 40px;">
        <h1 style="color: #064E3B;">${itinerary.title}</h1>
        <p><strong>Destination:</strong> ${quizData.destination}</p>
        <p><strong>Estimated Price:</strong> $${itinerary.estimatedPrice} per person</p>
        <hr />
        ${itinerary.days.map(day => `
          <div style="margin-bottom: 20px;">
            <h3>Day ${day.day}: ${day.title}</h3>
            <p>${day.description}</p>
            <ul>
              ${day.activities ? day.activities.map(act => `<li>${act}</li>`).join('') : ''}
            </ul>
          </div>
        `).join('')}
        <footer style="margin-top: 50px; font-size: 12px; color: #666; border-top: 1px solid #eee; padding-top: 10px;">
          Safari by CNJ Safaris - www.cnjsafaris.com
        </footer>
      </div>
    `;

    await page.setContent(html, { waitUntil: 'networkidle0' });
    const pdf = await page.pdf({ format: 'A4', printBackground: true });
    
    res.contentType("application/pdf");
    res.send(pdf);
  } catch (error) {
    console.error("PDF Error:", error);
    res.status(500).send("Failed to generate PDF");
  } finally {
    if (browser) await browser.close();
  }
});

// 3. Get All Open Jobs Endpoint
app.get('/api/jobs', (req, res) => {
  if (!db) {
    console.error("Database connection is not initialized.");
    return res.status(500).json({ error: "Database not connected" });
  }

  try {
    const stmt = db.prepare('SELECT * FROM jobs WHERE status = ?');
    const jobs = stmt.all('open');
    
    // Parse requirements back into arrays if stored as JSON strings
    const formattedJobs = jobs.map(job => ({
      ...job,
      requirements: (() => {
        try {
          return typeof job.requirements === 'string' ? JSON.parse(job.requirements) : (job.requirements || []);
        } catch (e) {
          console.warn(`Malformed JSON in requirements for job ID ${job.id}:`, job.requirements);
          return [];
        }
      })()
    }));
    
    res.json(formattedJobs);
  } catch (error) {
    console.error("Backend Error (/api/jobs):", error.message);
    res.status(500).json({ error: error.message || "Unknown database error" });
  }
});

// 4. Get All Products (Marketplace)
app.get('/api/products', (req, res) => {
  try {
    const products = db.prepare('SELECT * FROM products ORDER BY created_at DESC').all();
    res.json(products);
  } catch (error) {
    console.error("Backend Error (/api/products):", error.message);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.listen(3001, () => console.log('Backend running on port 3001'));