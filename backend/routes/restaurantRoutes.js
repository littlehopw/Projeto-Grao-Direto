const express = require("express");
const Restaurant = require("../models/Restaurant");

const router = express.Router();

router.get("/", async (req, res) => {
    const search = req.query.q || "";
    const restaurants = await Restaurant.find({
        $or: [
            { name: { $regex: search, $options: "i" } },
            { "menu.name": { $regex: search, $options: "i" } },
            { "menu.description": { $regex: search, $options: "i" } }
        ]
    });
    res.json(restaurants);
});

module.exports = router;