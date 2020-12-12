const router = require("express").Router();
const choreRoutes = require("./chores");
const billRoutes = require("./bills");
const groceryRoutes = require("./groceries");
const eventRoutes = require("./events");
// const userRoutes = require("./user");

// routes for each tracked item
router.use("/chores", choreRoutes);
router.use("/bills", billRoutes);
router.use("/groceries", groceryRoutes);
router.use("/events", eventRoutes);
// router.use("/user", userRoutes);

module.exports = router;
