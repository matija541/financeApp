import express from "express";
import path from "path";
import methodOverride from "method-override";

// Create a URL-based __dirname alternative
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get('/home', (req, res) => {
    res.render("home")
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});
