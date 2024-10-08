const express = require(`express`);
const cors = require(`cors`);

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, ()=> console.log(`Server running ${PORT}`));