const express = require("express");
const app = express();
const port = 5000;

// use hbs for view engine
app.set("view engine", "hbs");
// menambahkan path
app.set("views", "src/views");
app.use("/assets", express.static("src/assets"));

app.get("/", home);
app.get("/contact", contact);
app.get("/my-project", myProject);
app.get("/my-testimonials", myTestimonials);
app.get("/detail-project/:id", detailProject);

function home(req, res) {
  res.render("index");
}

function contact(req, res) {
  res.render("contact");
}

function myProject(req, res) {
  const data = [
    {
      id: 1,
      title: "Dumbways Web App",
      duration: "5 Days",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      title: "Dumbways Web App",
      duration: "3 Month",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      title: "Dumbways Web App",
      duration: "2 Years",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  res.render("my-project", { data });
}

function myTestimonials(req, res) {
  res.render("my-testimonials");
}

function detailProject(req, res) {
  const { id } = req.params;
  // console.log(id);

  res.render("detail-project", { id });
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
