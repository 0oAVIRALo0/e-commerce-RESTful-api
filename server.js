const http = require("http")
const app = require("./app")

const PORT = process.env.PORT || 8008;

const server = http.createServer(app)

server.listen(PORT, (req, res) => {
    console.log(`Server is listening on port ${PORT}`)
})