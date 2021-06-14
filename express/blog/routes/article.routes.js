const express = require('express')

const router = express.Router()



const articles = [
	{ id: 1, name: 'article one' },
	{ id: 2, name: 'article two' },
];

// /article
router.get('/', (req, res) => {
	res.json({
		articles,
	});
});

router.post('/', (req, res) => {
	articles.push({
		id: articles.length + 1,
		name: 'Generated article',
	});

	res.json({
		articles,
	});
});


module.exports = router