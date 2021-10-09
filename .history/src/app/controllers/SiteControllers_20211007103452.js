const Course = require('../models/Course');


class SiteController {
    // GET / news
    index(req, res) {
        Course.find({})
    }

    //Get / search
    show(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();