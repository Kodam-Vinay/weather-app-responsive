const express = require("express")
const path = require("path")
const hbs = require("hbs")
//here we are using port with environment variables here this port run on this  process.env.PORT(if it not) or 8000
const PORT = process.env.PORT || 8000

const app = express()

//now lets display the pages dynamically using template engines handle bars
//first we need to set the views path and partials path
const css_path = path.join(__dirname, "../public")
app.use(express.static(css_path))
const partials_path = path.join(__dirname, "../templates/partials")
const views_path = path.join(__dirname, "../templates/views")

//now we need to set the views engine
app.set("view engine", "hbs")
app.set("views", views_path)

//register partials path
hbs.registerPartials(partials_path)

//routing
app.get("/", (req, res) => {
    res.render('index')
})

app.get("/about", (req, res) => {
    res.render('about')
})

app.get("/weather", (req, res) => {
    res.render("weather")
})

app.get("*", (req, res) => {
    res.render("404error", {
        errorMsg: 'Oops! Page Not Found' //sending a message like prop
    })
})

//listening to port 
app.listen(8000, () => {
    console.log(`server running on a port ${PORT}`)
})