const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const app = express();

// Middleware Setup
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://sanket_cse:ZombyYT123@todolist.ia4reog.mongodb.net/?retryWrites=true&w=majority&appName=TodoList",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Schema and Model
const trySchema = new mongoose.Schema({
  name: String,
});

const Item = mongoose.model("task", trySchema);

// GET - Home Page
app.get("/", async (req, res) => {
  try {
    const foundItems = await Item.find({});
    res.render("list", { ejes: foundItems });
  } catch (err) {
    console.error("Error fetching items:", err);
    res.status(500).send("Internal Server Error");
  }
});

// POST - Add Task
app.post("/", async (req, res) => {
  const itemName = req.body.task;
  const newItem = new Item({ name: itemName });

  try {
    await newItem.save();
    res.redirect("/");
  } catch (err) {
    console.error("Failed to save task:", err);
    res.status(500).send("Failed to save task");
  }
});

// PUT - Edit Task
app.put("/edit/:id", async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, {
      name: req.body.updatedTask,
    });

    if (!updatedItem) {
      return res.status(404).send("Item not found");
    }

    res.redirect("/");
  } catch (err) {
    console.error("Failed to update task:", err);
    res.status(500).send("Failed to update task");
  }
});

// DELETE - Delete Task
app.delete("/delete/:id", async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).send("Item not found");
    }

    res.redirect("/");
  } catch (err) {
    console.error("Delete failed:", err);
    res.status(500).send("Delete failed");
  }
});

// Start the Server
app.listen(3000, () => {
  console.log("✅ Server started on port 3000");
});
