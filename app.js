import express from "express";
import path from "path";
import methodOverride from "method-override";

// Create a URL-based __dirname alternative
const __dirname = path.resolve(path.dirname(new URL(import.meta.url).pathname).substring(1));

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
console.log("Views directory:", path.join(__dirname, "views"));

app.get('/', (req, res) => {
    res.render("home");
});
app.get("/calculator",(req,res)=>{
    res.render("calculator/calculator")
})
app.listen(3000, () => {
    console.log("listening on port 3000");
});