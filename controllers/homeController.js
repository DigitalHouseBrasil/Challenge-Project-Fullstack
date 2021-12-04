const path = require('path');

const homeController = {
    viewHome: (req, res) => {
        res.render('home', {pageTitle: "Trafico"});
    },
}

module.exports = homeController;