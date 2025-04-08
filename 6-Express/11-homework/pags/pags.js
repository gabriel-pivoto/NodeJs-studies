const express = require("express");
const path = require("path");
const router = express.Router();


const basePath = path.join(__dirname, "../templates");


router.post("/pag2", (req, res) => {
  res.sendFile(`${basePath}/pag2.html`);
});
router.post("/pag1", (req, res) => {
    res.sendFile(`${basePath}/pag1.html`);
  });



module.exports = router;
