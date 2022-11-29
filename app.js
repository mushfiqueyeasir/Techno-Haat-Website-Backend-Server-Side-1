const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// thard party middleWare
app.use(cors());
app.use(express.json());

// route
const aboutRoute = require("./Routes/about.route");
const blogRoute = require("./Routes/blog.route");
const footerRoute = require("./Routes/footer.route");
const galleryRoute = require("./Routes/gallery.route");
const navRoute = require("./Routes/nav.route");
const homeBannerRoute = require("./Routes/homeBanner.route");
const projectsRoute = require("./Routes/projects.route");
const randomRoute = require("./Routes/random.route");
const serviceRoute = require("./Routes/service.route");
const teamRoute = require("./Routes/team.route");
const expectationRoute = require("./Routes/expectation.route");
const clientsRoute = require("./Routes/clients.route");

app.use("/about", aboutRoute);
app.use("/blog", blogRoute);
app.use("/footer", footerRoute);
app.use("/gallery", galleryRoute);
app.use("/navigation", navRoute);
app.use("/home/banner", homeBannerRoute);
app.use("/expectation", expectationRoute);
app.use("/clients", clientsRoute);

app.use("/projects", projectsRoute);
app.use("/random", randomRoute);
app.use("/service", serviceRoute);
app.use("/team", teamRoute);

const complete = [
  "about",
  "home/banner",
  "gallery",
  "footer",
  "expectation",
  "clients",
  "projects/conternt",
  "projects/list",
];

app.get("/", (req, res) => {
  res.send(`<h1>Techno Haat server is connected and responding!!</h1>
  <br/>
  <p> We use the flowing approach for database operation on three routes in the "about" section get,post,put ► <a href="https://techno-haat-website-backend-server-side.vercel.app/about">Click here for get about data</a></p>

  <p> Same as about api we have three database operation get,post,put in "Home Banner" section ► <a href="https://techno-haat-website-backend-server-side.vercel.app/home/banner">Click here for get Home Banner data</a></p>

  <p> Gallery Section Api /gallery ► <a href="https://techno-haat-website-backend-server-side.vercel.app/gallery">Click here for get Gallery data</a></p>


  <p> Footer Section Api /footer ► <a href="https://techno-haat-website-backend-server-side.vercel.app/footer">Click here for get Footer data</a></p>

  <p> Nav Section Api /navigation ► <a href="https://techno-haat-website-backend-server-side.vercel.app/navigation">Click here for get navigation data</a></p>

  <p> Expectation Section Api /expectation  ► <a href="https://techno-haat-website-backend-server-side.vercel.app/expectation ">Click here for get expectation  data</a></p>

  <p> Clients Section Api /clients  ► <a href="https://techno-haat-website-backend-server-side.vercel.app/clients ">Click here for get clients data</a></p>

  <p> Projects Content Section Api /projects/content  ► <a href="https://techno-haat-website-backend-server-side.vercel.app/projects/content ">Click here for get Projects Content Section data</a></p>

  <p> Projects list Section Api /projects/list  ► <a href="https://techno-haat-website-backend-server-side.vercel.app/projects/list ">Click here for get Projects List Section data</a></p>

  `);
});

module.exports = app;
