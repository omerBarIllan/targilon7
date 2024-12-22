const getArticle = (req, res) => { // Fix: Ensure proper arrow function syntax
    res.render('artice.ejs',{foo:42})
};

module.exports = { getArticle };