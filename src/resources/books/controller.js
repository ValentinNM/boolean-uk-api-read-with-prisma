const { prisma } = require("../../utils/database");
const { param } = require("./router");

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

// below is for /books/author/name-of-author?order=recent
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

async function getTopicOrderdByDate(req, res) { 

    try { 

        const booksToGet = await prisma.book.findMany({
            where : { 
                topic: 'historical'
            },
            orderBy : { 
                publicationDate: 'asc'
            }
        })
        res.json({ test: booksToGet})
    } catch(error) { 
        console.error();
    }
}

async function getMostRecent(req, res) {
    
    try{ 
        mostRecentBooks = await prisma.book.findMany({
            where: { 
                type: 'fiction'
            },
            orderBy : { 
                publicationDate: 'desc'
            },
            take: 10
        })

        res.json({ result : mostRecentBooks})
    } catch(error) { 
        console.error();
    }
} 

const getNonFictionfrom2004 = async function (req, res) {

    try { 
        const nonFictionBooksFrom2004 = await prisma.book.findMany({
            where: {
                type: 'non-fiction'
                },
                AND : { 
                    publicationDate : { 
                        include : '2004'
                },
        }})
        res.json({nonFictionBooksFrom2004})
    } catch(error) {
        console.error();
    }
}

const createOne = async function(req, res) { 

    // const { title, type, author, topic, publicationDate} = req.body;

    console.log("inside createOne: ", req.body);

    try { 
        const bookToCreate = await prisma.book.create({
            // data : { title, type, author, topic, publicationDate}
            data : { ...req.body}   // same as above // using the spread operator to make
                                    //  a copy of the object so we avoid the destructuring
        })
        res.json({ newBook : bookToCreate})
    } catch(error) { 
        console.error()

        res.error(500).json({ error : console.error})
    }
}

const updateOneById = async function(req, res) {

    const id = req.params.id;
    console.log("id: ", id)

    console.log("inside createOneById body: ", {...req.body})

    try {
        const updateById = await prisma.book.update({
            where : { 
                id : parseInt(id) ,
            },
            data: {...req.body}
        })
        res.json({ updated_book: updateById })
    } catch(error) { 
        console.error()

        res.status(500).json({ error : error.message})
    }
}

// const deleteOneById = async (req, res) => {  // same as belwo 
const deleteOneById = async function (req, res) { 

    const id = req.params.id;

    console.log(" id inside deleteOneById: ", id)

    try { 
        const bookToDelete = await prisma.book.delete({
            where : { 
                id : parseInt(id)
            }
        })
        res.json({ delete : true })
    } catch(error) { 
        console.error()

        res.status(500).json({ error: error.message})
    }
}

module.exports = {
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
    }