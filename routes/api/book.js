const router = require("express").Router();
const booksControllers = require("../../controllers/booksControllers");

// Matches with "/api/books"
router.route("/")
  .get(booksControllers.findAll)
  .post(booksControllers.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksControllers.findById)
  .put(booksControllers.update)
  .delete(booksControllers.remove);

module.exports = router;
