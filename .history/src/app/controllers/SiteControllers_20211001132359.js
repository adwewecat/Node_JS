class SiteController {
    // GET / news
    index(req, res) {
        res.render("news");
    }

    //Get / search
    show(req, res) {
        res.send("new detail");
    }
}

module.exports = new SiteController();