const { Bot } = require('./bot');

const express= require ('express');

const bot = new Bot();

// Create Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Set up the  endpoint
app.post('/api/messages', (req, res) => {
    bot.adapter.processActivity(req, res, async (context) => {
        await bot.run(context);
    });
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`\nServer listening on port ${PORT}`);
});