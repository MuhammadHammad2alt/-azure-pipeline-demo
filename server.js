const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('<h1>Amazing! My automated CI/CD Pipeline updated this website with zero downtime! 🚀</h1>');

});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
