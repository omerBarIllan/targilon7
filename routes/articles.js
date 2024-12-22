const express = require('express');
const router = express.Router();

const articles = require ('../controllers/articles')
// Handle the /articles route
router.get('/', articles.getArticle);
module.exports = router;