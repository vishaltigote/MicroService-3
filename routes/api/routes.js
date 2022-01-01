var express = require("express");
var router = express.Router();
var api = require("../api/controller");

/**List all details with pagiantion */
router.post("/listWithPagination", api.listWithPagination);

/** List API with filter by Company name */
router.post("/filterWithEmail", api.filterWithEmail);

/** List API with filter by Company name  */
router.post("/filterWithComapny", api.filterWithComapny);

module.exports = router;
