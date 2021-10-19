// const { create } = require("domain");
const express = require("express");
const {
    getAll,
    getOneById,
    getFictionBooks,
    getFictionBooksByTopic,
    getNonFictionBooks,
    getNonFictionBooksByTopic,
    getBooksByAuthor,
    getTopicOrderdByDate,
    getMostRecent,
    getNonFictionfrom2004,
    createOne,
    updateOneById,
    deleteOneById
} = require("./controller");

const router = express.Router();

router.get("/", getAll);

router.get("/fiction/most-recent", getMostRecent)

// to refactor as per req.query 
router.get("/fiction/:topic", getFictionBooksByTopic)

router.get("/non-fiction/2004", getNonFictionfrom2004 )

router.get("/fiction", getFictionBooks);

router.get("/non-fiction/:topic", getNonFictionBooksByTopic)

router.get("/ascOrder", getTopicOrderdByDate)  // check the route it interfers with

router.get("/non-fiction", getNonFictionBooks)

// route has to be fixed
router.get("/author/:author", getBooksByAuthor)

router.get("/:id", getOneById);

router.post("/", createOne);

router.patch("/:id", updateOneById);

router.delete("/:id", deleteOneById);

module.exports = router;