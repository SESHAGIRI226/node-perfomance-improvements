const express = require('express');

const app = express();

function delay(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {

    }
}
app.get("/", (req, res) => {
    res.send("performance example")
})

app.get('/timer', (req, res) => {
    delay(9000);
    res.send('ding ding')
})

app.listen(8000);