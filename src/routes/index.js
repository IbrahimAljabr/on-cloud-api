const Router = require("express-promise-router");

const loginRouter = require("./login");
const itemsRouter = require("./items-router");

const router = Router();

router.use("/api", loginRouter);
router.use("/api", itemsRouter);

module.exports = router;
