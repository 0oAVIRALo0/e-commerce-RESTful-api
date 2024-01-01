const express = require("express")
const router = express.Router()

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "All orders were fetched"
    })
})

router.post("/", (req, res, next) => {
    res.status(200).json({
        message: "New order added"
    })
})

router.get("/:orderId", (req, res, next) => {
    const id = req.params.orderId
    res.status(200).json({
        message: `Order with order Id: ${id} fetched`,
        orderId: id
    })
})


router.delete("/:orderId", (req, res, next) => {
    const id = req.params.orderId
    res.status(200).json({
        message: `Order with order Id: ${id} deleted`,
        productId: id
    })
})

module.exports = router