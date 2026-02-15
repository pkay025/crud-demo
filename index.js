const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Emmanuel's personal API",
        data: {
            profession: "Software Engineer",
            description: "I specialize in building of APIs and web applications"
        }
    })
});

app.get('/about', (req, res) => {
    res.status(200).json({
        success: true,
        message: "About Me",
        data: {
            name: "Emmanuel Nunoo Mensah",
            age: 23,
            gender: "Male",
            profession: "Software Engineer",
            passion: "Building of APIs and web applications"
        }
    })
});
// Contact route
const email = `nunoomensahemmanuel224@gmail.com`;
const phone = "0257676119";

app.get('/contact', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Contact information",
        data: {
            email: email,
            phone: phone
        }
    })
});

app.get('/skills', (req, res) => {
    res.status(200).json({
        success: true,
        message: "My techical knowhow",
        data: [
            "express.js",
            "git",
            "javaScript",
            "node.js",
        ]
    })
});

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    })
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({
        success: false,
        message: "Something went wrong"
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 