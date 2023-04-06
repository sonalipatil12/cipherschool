const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
require("./models/db")
require("dotenv").config()
const port = process.env.PORT || 8888

const app = express();
app.use(cors())
app.use((req, res, next) => {
    res.header("Access-Control-Expose-Headers", "x-access-token,x-refresh-token");
    next();
});
app.use(bodyparser.json())
app.use(express.static("uploads"))

//routes here
app.use("api/users", require("./routes/user.route"))
app.use("api/auth", require("./routes/auth.route"))

app.listen(port, () => {
    console.log(`server is listning on port number ${port}`)
})