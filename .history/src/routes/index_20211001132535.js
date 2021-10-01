const newsRouter = require('./news')
const newsRouter = require('./news')


function route(app) {
    // app.get("/news", (req, res) => {
    //     res.render("news");
    // });

    app.use('/news', newsRouter)

    app.post("/search", (req, res) => {
        console.log(req.body);
        res.send("");
    });
}

module.exports = route;