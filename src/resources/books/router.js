const express = require("express");
const {
    getAll,
    getOneById,
    getFictionBooks,
    getFictionBooksByTopic,
    getNonFictionBooks,
    getNonFictionBooksByTopic,
    getBooksByAuthor
    } = require("./controller");

const router = express.Router();

router.get("/", getAll);

router.get("/fiction/:topic", getFictionBooksByTopic)

router.get("/fiction", getFictionBooks);

router.get("/non-fiction/:topic", getNonFictionBooksByTopic)

router.get("/non-fiction", getNonFictionBooks)

// route has to be fixed
router.get("/author/:author", getBooksByAuthor)

router.get("/:id", getOneById);

module.exports = router;