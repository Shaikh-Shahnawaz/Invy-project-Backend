const db = require('../models')

const Users = db.users


exports.signupUser = async (req, res) => {
  console.log(req.body)
  try {

  
    const data = await Users.create(req.body)

    if(!data) res.json({error:'fill all the inputs'})

    res.status(200).json({ message: "Signup Successful"})


    console.log(Users)
    // const getData = await authentication.find();
    // const username = getData.map((ele) => ele.username);

    // if (!username.includes(req.body.username)) {
    //   const data = await authentication.create(req.body);
    //   res.json({ message: "Signup Successful", data: data });
    // } else {
    //   res.json({ message: "Username not available !! Try Different username" });
    // }
  } catch (error) {
    throw new Error(error);
  }
};