const bcrypt = require("bcrypt");
const UserModel = require("../model/user-model");

//add [ POST ]
module.exports.addUser = function (req, res) {
  let FirstName = req.body.FirstName;
  let LastName = req.body.LastName;
  let Email = req.body.Email;
  let password = req.body.password;
  let City = req.body.City;
  let Gender = req.body.Gender;
  let Hobbies = req.body.Hobbies;
  //encrypt
  let encPassword = bcrypt.hashSync(password, 10);
  let role = req.body.role;
  
  let user = new UserModel({
    FirstName: FirstName,
    LastName: LastName,
    Email: Email,
    password: encPassword,
    role: role,
    City: City,
   Gender:Gender,
   Hobbies:Hobbies,
    Status: req.body.Status,
    
  });

  

  user.save(function (err, data) {
    if (err) {
      res.json({ msg: "SMW", data: err, status: -1 }); //-1  [ 302 404 500 ]
    } else {
      res.json({ msg: "signup done", data: data, status: 200 }); //http status code
    }
  });
};







//list
module.exports.getAllUsers = function (req, res) {
  UserModel.find()
    .populate("role")
    .exec(function (err, data) {
      if (err) {
        res.json({ msg: "SMW", data: err, status: -1 }); //-1  [ 302 404 500 ]
      } else {
        res.json({ msg: "users ret...", data: data, status: 200 }); //http status code
      }
    });
};




// get by id

module.exports.getById= function(req,res){

  let id = req.params.userId;
  
  UserModel.find({_id:id}).populate("role")
  .exec(function(err,data){
    if (err) {
      res.json({ msg: "Something went wrong!!!", status: -1, data: err });
    } else {
      res.json({ msg: "users...", status: 200, data: data });
    }
  })
}

//GET BY ROLE iD
module.exports.getByroleId= function(req,res){

  let id = req.params.roleId;
  
  UserModel.find({role: id}).populate("role")
  .exec(function(err,data){
    if (err) {
      res.json({ msg: "Something went wrong!!!", status: -1, data: err });
    } else {
      res.json({ msg: "users...", status: 200, data: data });
    }
  })
}
//delete
module.exports.deleteUser = function (req, res) {
  //params userid
  let userId = req.params.userId; //postman -> userid

  UserModel.deleteOne({ _id: userId }, function (err, data) {
    if (err) {
      res.json({ msg: "SMW", data: err, status: -1 }); //-1  [ 302 404 500 ]
    } else {
      res.json({ msg: "user removed...", data: data, status: 200 }); //http status code
    }
  });
};

//update

module.exports.updateUser = function (req, res) {
  //update role set roleName = admin where roleId = 12121
  let userId = req.params.userId;
  let Status =req.body.Status
 
  

   UserModel.updateOne(
    { _id: userId },
    {  Status:Status,},
    function (err, data) {
      if (err) {
        res.json({ msg: "Something went wrong!!!", status: -1, data: err });
      } else {
        res.json({ msg: "updated...", status: 200, data: data });
      }
    }
  );
};




//login  for customer / vendor
module.exports.login = function (req, res) {
  let email = req.body.email;
  let password = req.body.password;

  let isCorrect = false;

  UserModel.findOne({ email: email }).populate('role').exec(function (err, data) {
    if (data) {
      let ans = bcrypt.compareSync(password, data.password);
      if (ans == true) {
        isCorrect = true;
      }
    }
    if (isCorrect == false) {
      res.json({ msg: "Invalid Credentials...", data: req.body, status: -1 }); //-1  [ 302 404 500 ]
    } else {
      res.json({ msg: "Login....", data: data, status: 200 }); //http status code
    }
  });
};


