class NewController {
    // GET / news
    index(req, res) {
        res.render('news')
    }

    //Get / news/:slug
    show(req, res) {

    }
}

module.exports = new NewController;