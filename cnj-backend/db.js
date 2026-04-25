// db.js
const Database = require('better-sqlite3');
const db = new Database('cnj_safaris.db');

// Initialize tables
db.exec(`
  CREATE TABLE IF NOT EXISTS destinations (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT
  );

  CREATE TABLE IF NOT EXISTS itineraries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    destination_id TEXT,
    title TEXT,
    content TEXT, -- JSON string of days
    base_price INTEGER,
    FOREIGN KEY(destination_id) REFERENCES destinations(id)
  );

  CREATE TABLE IF NOT EXISTS jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    department TEXT,
    location TEXT DEFAULT 'Remote',
    type TEXT, -- Full-time, Part-time, Internship
    description TEXT,
    requirements TEXT, -- JSON string of points
    status TEXT DEFAULT 'open' -- open, closed
  );

  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT, -- 'Hoodies', 'Jackets', 'Caps', 'Gear'
    price REAL NOT NULL,
    description TEXT,
    image_url TEXT, -- Path to the image file
    stock_status TEXT DEFAULT 'In Stock', -- 'In Stock' or 'Out of Stock'
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Seed initial jobs if the table is empty
const jobsCount = db.prepare("SELECT COUNT(*) as count FROM jobs").get();
if (jobsCount.count === 0) {
  const insert = db.prepare(`
    INSERT INTO jobs (title, department, location, type, description, requirements, status) 
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  
  insert.run('Safari Travel Designer', 'Sales', 'Nairobi', 'Full-time', 
    'Design bespoke safari itineraries for clients.', 
    JSON.stringify(['Excellent communication skills', 'Passion for travel', 'Experience with CRM software']), 'open');
    
  insert.run('Senior Wildlife Guide', 'Operations', 'Maasai Mara', 'Contract', 
    'Lead immersive wildlife safaris in the Maasai Mara.', 
    JSON.stringify(['KPSGA certified', 'Extensive wildlife knowledge', 'First aid certified']), 'open');
    
  console.log('Sample job data inserted into jobs table.');
}

// Seed initial products if empty
const productsCount = db.prepare("SELECT COUNT(*) as count FROM products").get();
if (productsCount.count === 0) {
  const insert = db.prepare(`
    INSERT INTO products (name, category, price, description, image_url, stock_status) 
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  insert.run('CNJ Signature Hoodie', 'Hoodies', 45.00, 
    'Premium heavy-weight jungle green hoodie with embroidered logo.', 
    '/careers.jpeg', 'In Stock'); // Using existing image as placeholder

  insert.run('Explorer Cap', 'Caps', 25.00, 
    'Breathable cotton cap, perfect for game drives.', 
    '/kenya-welcome-safari.jpg', 'In Stock');
    
  insert.run('Safari Field Jacket', 'Jackets', 85.00, 
    'Multi-pocket rugged jacket for early morning expeditions.', 
    '/gorilla.jpeg', 'In Stock');
}

module.exports = db;