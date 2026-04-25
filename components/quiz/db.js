const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./cnj-safaris.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the cnj-safaris SQLite database.');
});

db.serialize(() => {
  // Create itineraries table if it doesn't exist (from existing backend context)
  db.exec(`
    CREATE TABLE IF NOT EXISTS itineraries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      destination_id TEXT NOT NULL,
      title TEXT NOT NULL,
      content TEXT, -- JSON string of days
      base_price INTEGER
    );
  `);

  // Create jobs table
  db.exec(`
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
  `);

  // Insert some sample job data if the table is empty
  db.get("SELECT COUNT(*) as count FROM jobs", (err, row) => {
    if (err) {
      console.error("Error checking jobs table:", err.message);
      return;
    }
    if (row.count === 0) {
      const insert = db.prepare(`INSERT INTO jobs (title, department, location, type, description, requirements, status) VALUES (?, ?, ?, ?, ?, ?, ?)`);
      insert.run('Safari Travel Designer', 'Sales', 'Nairobi', 'Full-time', 'Design bespoke safari itineraries for clients.', JSON.stringify(['Excellent communication skills', 'Passion for travel', 'Experience with CRM software']), 'open');
      insert.run('Senior Wildlife Guide', 'Operations', 'Maasai Mara', 'Contract', 'Lead immersive wildlife safaris in the Maasai Mara.', JSON.stringify(['KPSGA certified', 'Extensive wildlife knowledge', 'First aid certified']), 'open');
      insert.run('Conservation Coordinator', 'Conservation', 'Remote/Field', 'Full-time', 'Coordinate and manage conservation projects.', JSON.stringify(['Degree in conservation biology', 'Project management experience', 'Fieldwork experience']), 'open');
      insert.finalize();
      console.log('Sample job data inserted.');
    }
  });
});

module.exports = db;