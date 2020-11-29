const router = require("express").Router();
const bookRoutes = require("./books");
const choreRoutes = require("./chores");
const billRoutes = require("./bills");
const groceryRoutes = require("./groceries");
const eventRoutes = require("./events");

// Book routes
router.use("/books", bookRoutes);
router.use("/chores", choreRoutes);
router.use("/bills", billRoutes);
router.use("/groceries", groceryRoutes);
router.use("/events", eventRoutes);

module.exports = router;
