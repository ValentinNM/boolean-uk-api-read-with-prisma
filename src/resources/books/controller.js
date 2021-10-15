const { prisma } = require("../../utils/database")

async function getAll(req, res) { 

    try { 
        const getAllBooks = await prisma.book.findMany()
        res.json({all_books : getAllBooks});
    } catch(error) {
        console.error()
    }
}

async function getOneById(req, res) { 

    console.log("book getOneById: ", req.params.id)

    try{ 
        const getOneBook = await prisma.book.findUnique({
            where : { 
                id : parseInt(req.params.id)
            }
        })
        res.json({one_book : getOneBook})
    } catch(error) { 
        console.error()
    }
}

async function getFictionBooks(req, res) { 

    // console.log("topic: ", req.params.fiction);
    try{ 
        const newLocal = "fiction";
        
        const fictionBooks = await prisma.book.findMany({
            where: { 
                type : newLocal
            }
        })
        res.json({ fiction : fictionBooks})
    } catch(error) { 
        console.error()
        
        res.error(500).json({ error : console.error})
    }
}

async function getNonFictionBooks(req, res){

    try { 
        const nf = "non-fiction";
        const nonFiction = await prisma.book.findMany({
            where : { 
                type : nf
            }
        })
        res.json({ nonFiction })
    } catch(error) { 
        console.error()
    }
}

async function getNonFictionBooksByTopic(req, res) { 

    try { 
        const nonFictionBooksBytopic = await prisma.book.findMany({
            where : { 
                type : "non-fiction",
                topic : req.params.topic
            }
        })
        res.json({ nonFictionBooksBytopic : nonFictionBooksBytopic })
    } catch(error) { 
        console.error()
    }
} 

async function getFictionBooksByTopic(req, res) { 
    
    console.log("fictionBooksByTopic: ", req.params.type)
    console.log("fictionBooksByTopic: ", req.params.topic)
    
    // const type = req.params.type;
    // const topic = req.params.topic;


    try{ 
        const fictionBooksByTopic = await prisma.book.findMany({
            where : { 
                type : 'fiction',
                topic: req.params.topic,
            },
        })
        res.json({ fiction_by_topic: fictionBooksByTopic})
    } catch(error) { 
        console.error();
    }
}


async function getBooksByAuthor(req, res) { 
    
    /* author params has to be split and joined
        caitalised + united
    */
    
    const author = req.params.author;
    console.log("author: ", author);

    try {
        const booksByAuthor = await prisma.book.findMany({
         where : { 
             author : author,
         },
         orderBy : { 
            publicationDate : "desc",
         },   
    })
    res.json({ authorByDesc  : booksByAuthor });
    } catch(error) { 
    console.error();
    }
}

module.exports = {
    getAll,
    getOneById,
    getFictionBooks,
    getFictionBooksByTopic,
    getNonFictionBooks,
    getNonFictionBooksByTopic,
    getBooksByAuthor
    }