const express = require("express")
const { createServer } = require("http")
const { Server } = require("socket.io")
const path = require("path")

const app = express();
const httpServer = createServer(app)

const io = new Server(httpServer)
const {LogManager ,FileWatcher, FileReader} = require("./controller_log")

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

io.on("connection", async (socket) => {
    console.log("Connected to ", socket.id)
    
    const logManager = new LogManager(new FileReader("log.txt"), new FileWatcher("log.txt"))
    
    logManager.boot((data) => {
        socket.emit("boot", {data})
    })
    
    logManager.update((data) => {
        socket.emit("update", {data})
    })
})

httpServer.listen(3000, () => {
    console.log("App is listening to port 3000")
})
