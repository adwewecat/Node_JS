class SiteController {
    // GET / news
    index(req, res) {
        res.render("home");
    }

    //Get / search
    show(req, res) {
        res.send("new detail");
    }
}

module.exports = new SiteController();