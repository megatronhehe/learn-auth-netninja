const express = require("express");
const {
	getTodos,
	getTodo,
	createTodo,
	deleteTodo,
	updateTodo,
} = require("../controllers/todoController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

// get all todos
router.get("/", getTodos);

// get a todo
router.get("/:id", getTodo);

// post a todo
router.post("/", createTodo);

// delete a todo
router.delete("/:id", deleteTodo);

// update/patch a todo
router.patch("/:id", updateTodo);

module.exports = router;
