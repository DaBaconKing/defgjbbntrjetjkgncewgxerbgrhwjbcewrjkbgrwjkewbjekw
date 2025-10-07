const express = require('express');
const axios = require('axios');
const app = express();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

app.get('/api/user/:id', async (req, res) => {
  try {
    const response = await axios.get(`https://discord.com/api/v10/users/${req.params.id}`, {
      headers: { Authorization: `Bot ${DISCORD_TOKEN}` }
    });
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('Server running'));
