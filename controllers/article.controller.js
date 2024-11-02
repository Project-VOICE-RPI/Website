const Article = require('../research-database/article.model');

// querying all items
const getRefs = async (req, res) => {
    try{
        const refs = await Article.find({});
        res.status(200).json(refs);
    } catch (error) {
        res.status(500).json("ERROR! CANNOT GET!");
    }
}

// querying item
const getRef = async (req, res) => {
    try {
        const { id } = req.params;
        const ref = await Article.findById(id);
        res.status(200).json(ref);
    } catch (error) {
        res.status(500).json("ERROR! CANNOT GET!");
    }
}

// creating item
const createRef = async (req, res) => {
    try {
        const ref = await Article.create(req.body);
        res.status(200).json(ref);
    } catch (error) {
        res.status(500).json("ERROR! CANNOT GET!");
    }
}

// update item
const updateRef = async (req, res) => {
    try {
        const { id } = req.params;
        const ref = await Article.findByIdAndUpdate(id, req,body);
        if (!ref) {
            return res.status(404).json({message: "Article not found"});
        }
        const updatedRef = await Article.findById(id);
        res.status(200).json(updatedRef);
    } catch (error) {
        res.status(500).json("ERROR! CANNOT GET!");
    }
}

// delete item
const deleteRef = async (req, res) => {
    try {
        const { id } = req.params;
        const ref = findByIdAndDelete(id);
        if (!ref) {
            return res.status(404).json({message: "Article not found"});
        }
        res.status(200).json({message: "Article deleted successfully"});
    } catch (error) {
        res.status(500).json("ERROR! CANNOT GET!");
    }
}

module.exports = {
    getRefs,
    getRef,
    createRef,
    updateRef,
    deleteRef,
};