const cors = require("cors");

const express = require("express");
const app = express();
const port = 3000;

const { book, author } = require("./models");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", async (req, res, next) => {
  try {
    const result = await book.findAll({
      order: [["price", "ASC"]],
      attributes: {
        exclude: [
          "published_at",
          "series",
          "revision",
          "createdAt",
          "updatedAt",
        ],
      },
      include: {
        model: author,
        attributes: {
          exclude: ["email", "phone", "createdAt", "updatedAt"],
        },
      },
    });
    res.send(result);
  } catch (err) {
    next(err);
  }
});

app.get("/:id", async (req, res, next) => {
  try {
    const result = await author.findByPk(req.params.id, {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (!result) {
      throw { name: "author not found" };
    }
    res.send(result);
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  switch (err.name) {
    case "SequelizeValidationError" || "SequelizeUniqueConstraintError":
      res.status(400).json({
        msg: err.errors[0].message,
      });
      break;
    case "author not found":
      res.status(401).json({
        msg: "Author ID Not Found",
      });
      break;

    default:
      res.status(500).json({
        statusCode: 500,
        message: err.message,
      });
      break;
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
