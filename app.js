const express = require("express");
const app = express();
const router = require("./routes/router");
const path = require("path");
const port = process.env.PORT || 4000;
//definir variable estatica//
app.use(express.static(path.join(__dirname, "./public")));
//setear el ejs//
app.set("view engine", "ejs");
//usa las rutas//
app.use("/", router);
//escuchar el puerto//
app.listen(port, () => {
  console.log(`Server running on PORT: ${port}`);
});
