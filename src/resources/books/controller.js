const { prisma } = require("../../utils/database")

async function getAll(req, res) { 

    try { 
        const getAllBooks = await prisma.book.findMany()
        res.json({all_books : getAllBooks});
    } catch(error) {
        console.error()
    }
}

module.exports = {getAll}