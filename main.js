import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Single-page HTML landing page for POE
const landingPageHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Party On Everything (POE) | Party Essentials</title>
<style>
* { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
body { background-color: #0f172a; color: #f8fafc; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
.card { background-color: #1e293b; border-radius: 16px; padding: 40px; max-width: 600px; width: 100%; box-shadow: 0 10px 25px rgba(0,0,0,0.5); border: 1px solid #334155; text-align: center; }
.badge { background: linear-gradient(135deg, #a855f7, #ec4899); color: #ffffff; font-size: 0.85rem; font-weight: bold; padding: 6px 16px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px; display: inline-block; margin-bottom: 20px; }
h1 { font-size: 2.5rem; margin-bottom: 12px; font-weight: 800; background: linear-gradient(to right, #f43f5e, #fb923c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
p { font-size: 1.1rem; color: #94a3b8; line-height: 1.6; margin-bottom: 28px; }
.cta-btn { background: linear-gradient(135deg, #6366f1, #a855f7); color: #ffffff; text-decoration: none; font-size: 1.1rem; font-weight: 600; padding: 14px 32px; border-radius: 10px; display: inline-block; transition: transform 0.2s, box-shadow 0.2s; border: none; cursor: pointer; }
.cta-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(168, 85, 247, 0.4); }
.footer { margin-top: 32px; font-size: 0.85rem; color: #64748b; }
</style>
</head>
<body>
<div class="card">
<span class="badge">Coming Soon</span>
<h1>Party On Everything</h1>
<p>The ultimate hub for party essentials, vendor booking, and event coordination. We are bringing venues, supply rentals, and hosts together into one seamless experience.</p>
<a href="mailto:contact@partyoneverything.com" class="cta-btn">Partner With Us</a>
<div class="footer">&copy; ${new Date().getFullYear()} Party On Everything (POE). All rights reserved.</div>
</div>
</body>
</html>
`;

// Root route: Serves the landing page
app.get('/', (req, res) => {
res.send(landingPageHTML);
});

// Health check endpoint for deployment monitoring
app.get('/api/health', (req, res) => {
res.status(200).json({ status: 'ok', message: 'POE Server operational' });
});

// Start the server
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
