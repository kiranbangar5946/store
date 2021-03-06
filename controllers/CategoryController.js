var CategoryModel = require("../models/CategoryModel.js");
module.exports = function(router) {
    router.post("/createCategory", async (req, res) => {
        try {
            res.status(200).json(await CategoryModel.create(req.body))
        } catch (err) {
            res.status(500).json(err)
        }
    })
    router.post("/updateCategory", async (req, res) => {
        try {
            res.status(200).json(await CategoryModel.updateCategory(req.body))
        } catch (err) {
            res.status(500).json(err)
        }
    })
    router.post("/getAll", async (req, res) => {
        try {
            res.status(200).json(await CategoryModel.getAll(req.body))
        } catch (err) {
            res.status(500).json(err)
        }
    })

    router.delete("/deleteCategory/:id", async (req, res) => {
        try {
            res.status(200).json(await CategoryModel.deleteCategory(req.params))
        } catch (err) {
            res.status(500).json(err)
        }
    })
    router.post("/getCategory", async (req, res) => {
        try {
            res.status(200).json(await CategoryModel.getCategory(req.body))
        } catch (err) {
            res.status(500).json(err)
        }
    }),
    router.get("/getCategoryList", async (req, res) => {
        try {
            res.status(200).json(await CategoryModel.getList())
        } catch (err) {
            res.status(500).json(err)
        }
    })
}

