const express = require ("express");

const {
    getAll,
    getOnebyId,
    createOne,
    updateOneById
    } = require("./controller");

const router = express.Router()

router.get("/", getAll);

router.get("/:id", getOnebyId);

router.post("/", createOne);

router.patch("/:id", updateOneById);

module.exports = router;

//steven said if ok true problem with router  !!