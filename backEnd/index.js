const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const roleController = require("./Controller/role-controller");
const userController = require("./Controller/user-controller");



const app = express();
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(
    "mongodb://localhost:27017/task2705",
    function (
        err //for link db to server
    ) {
        if (err) {
            console.log("db connection fail...");
            console.log(err);
        } else {
            console.log("db connected...");
        }
    }
);



//roles
app.post("/roles", roleController.addRole);
app.get("/roles", roleController.getAllRoles);
app.get("/roles/:roleId", roleController.getById);
app.delete("/roles/:roleId", roleController.deleteRole);
// app.put("/roles/:roleId", roleController.updateRole);
app.put("/roles/:roleId", roleController.updateById);




//users
app.post("/users", userController.addUser);
app.get("/users", userController.getAllUsers);
app.get("/users/:userId", userController.getById);
app.get("/usersByRoleid/:roleId", userController.getByroleId);
app.delete("/users/:userId", userController.deleteUser);
app.put("/users/:userId", userController.updateUser);
app.post("/login", userController.login);
//server
app.listen(4000, function () {
    console.log("server started on 4000");
});
