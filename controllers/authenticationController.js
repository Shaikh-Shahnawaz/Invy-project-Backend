const db = require('../models')
const bcrypt = require("bcrypt");
const { createJwt } = require('../utils/tokenGenerate');
const Users = db.users

// Show all users

exports.showUser = async (req, res) => {
  try {
    const data = await Users.findAll();
    res.json({ message: "Data Fetched !!", data: data });
  } catch (error) {
    throw new Error(error);
  }
};


/// Signup users

exports.signupUser = async (req, res) => {
  console.log(req.body)
  try {
    const data = await Users.create(req.body)

    if(!data) res.json({error:'fill all the inputs'})

    res.status(200).json({ message: "Signup Successful"})

  } catch (error) {
    throw new Error(error);
  }
};



// Login users
exports.loginUser = async (req, res, next) => {
  
  try {
    let data;
    if(req.body.username){
       data = await Users.findOne({ where:{ username: req.body.username } });
    }else{
       data = await Users.findOne({ where: { email: req.body.email } });
    }
    if (!data) throw new Error("Username not found");

    // we have to run some checks that password matches or not
    const authenticated = await bcrypt.compare(req.body.password, data.password);
    if (!authenticated) throw new Error("Incorrect Password");
    

    // we have to return jwt
    // yeh jo data hai woh mongoose ka object hai to usko convert krna hoga normal object m
    const token = createJwt(JSON.parse(JSON.stringify(data)));
    res.json({ message: "Login SuccessFully !!", token: token });

    
  } catch (error) {
    // agr error aati hai to yeh next error middleware m bhej dega
    throw new Error(error);
  }
};