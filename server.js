const express = require('express');

const app = express();
const cluster = require('cluster');

function delay(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {

    }
}
app.get("/", (req, res) => {
    res.send(`performance example: ${process.pid}`)
})

if (cluster.isMaster) {
    console.log("seshu is running master");
    cluster.fork();
    cluster.fork();
} else {
    console.log("seshu is ogging workers");
    app.listen(8000);
}

app.get('/timer', (req, res) => {
    delay(9000);
    res.send(`ding ding: ${process.pid}`)
})


