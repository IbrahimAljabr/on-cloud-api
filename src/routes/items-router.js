const Router = require("express-promise-router");

const {
 createItem,
 getItem,
 getAllItems,
 editItem,
 deleteItem
} = require("../controllers/item");

const router = Router({ mergeParams: true });

/**
 * Handle POST to /api/create route.
 */
router.post("/create", createItem);

/**
 * Handle patch to /api/edit route.
 */
router.patch("/edit", editItem);

/**
 * Handle delete to /api/delete/item route.
 */
router.delete("/delete/item/:id", deleteItem);

/**
 * Handle get to /api/details route.
 */
router.get("/details/:id", getItem);

/**
 * Handle get to /api/all/items route.
 */
router.get("/all/items", getAllItems);

module.exports = router;
