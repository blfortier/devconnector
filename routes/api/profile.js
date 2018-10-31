const express = require("express");
const router = express.Router();

// @route     GET api/profile/test
// @dsc       Tests profile route
// @access    Public
router.get("/test", (req, res) =>
  res.json({
    message: "Profile Route Works"
  })
);

module.exports = router;
