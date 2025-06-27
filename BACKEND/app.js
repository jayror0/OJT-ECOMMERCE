const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;
const { Users } = require("./models");

const cors = require("cors");
app.use(cors());

app.use(express.json());

app.post("/createUser", async (req, res) => {
  const userDetails = req.body;
  const user = await Users.create(userDetails);
  res.json(user);
});

//Deletion data
app.delete("/deleteUser/:id", async (req, res) => {
  const id = req.params.id;
  const deleted = await Users.destroy({ where: { id } });
  if (deleted) {
    res.json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

//Read data
app.get("/getUsers", async (req, res) => {
  const users = await Users.findAll();
  res.json(users);
});

//Update/Replace
app.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  console.log("This is the that I get:>", id);
  console.log("This is the req.params.id:>", req.params.id);
});

// Update data
// app.put("/update/:id", async (req, res) => {
//   const id = req.params.id
//   const updatedData = req.body
//   const [updated] = await Users.update(updatedData, { where: { id } })
//   if (updated) {
//     const updatedUser = await Users.findByPk(id)
//     res.json(updatedUser)
//   } else {
//     res.status(404).json({ message: "User not found" })
//   }
// })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// To create a new table column after the model is generated, use a migration:
// npx sequelize-cli migration:generate --name add-column-to-users
// Then, edit the generated migration file to add your column, for example:
// await queryInterface.addColumn('Users', 'age', { type: Sequelize.INTEGER });
// Finally, run the migration:
// npx sequelize-cli db:migrate

// app.get('/getJsonData', (req, res) => {
//     res.json({
//         message: "I'm a json file"
//     })
// })

// app.post("/postJsonData", (req, res) => {
//   console.log("this is the data", req.body);
//   const { name } = req.body;
//   console.log("this is the name: ", name);
// });

// app.get('/getJsonData', (req, res) => {
//     res.json({
//         message: "this is the data"
//     })
// })

// Updated PUT method for updating users
// app.put("/updateUser/:id", async (req, res) => {
//   try {
//     const userId = req.params.id;
//     const updatedDetails = req.body;

//     const existingUser = await Users.findByPk(userId);

//     if (!existingUser) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Update the user
//     await Users.update(updatedDetails, {
//       where: { id: userId },
//     });

//     // Get the updated user
//     const updatedUser = await Users.findByPk(userId);
//     res.json(updatedUser);
//   } catch (error) {
//     console.error("Error updating user with PUT:", error);
//     if (error.name === "SequelizeValidationError") {
//       return res
//         .status(400)
//         .json({ message: "Validation error", errors: error.errors });
//     } else if (error.name === "SequelizeUniqueConstraintError") {
//       return res
//         .status(409)
//         .json({ message: "Email already exists", errors: error.errors });
//     }
//     res
//       .status(500)
//       .json({ message: "Failed to update user", error: error.message });
//   }
// });

