const express = require ("express");

const { getAll, getOnebyId } = require("./controller");

const router = express.Router()

router.get("/", getAll)

router.get("/:id", getOnebyId)

module.exports = router;

//steven said if ok true problem with router  !!
