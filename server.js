const express = require("express");
const morgan = require("morgan");

const app = express();
app.set("views", "./pages");
app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const blogs = [
    { title: "title 1", description: "good" },
    { title: "title 2", description: "better" },
  ];

  res.render("index", {
    title: "Home",
    blogs,
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});

app.use((req, res) => {
  res.status(404);
  res.render("404", { title: "404 Not Found" });
});

app.listen(3000, () => console.log("server is listening on 3000"));
