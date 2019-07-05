const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');
const User = require('../../models/User');


// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',  
  [
    check('first_name', 'First Name is required')
      .not()
      .isEmpty(),
      check('last_name', 'Last Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
    check('gender','Gender is required').not().isEmpty(),
    check('phone','Gender is required').not().isEmpty(),
    check('phone','Phone is 10 digit').isLength({min:10})
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { first_name, last_name, email, password, gender, phone } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
        first_name,
        last_name,
        email,
        password,
        gender,
        phone
      });

      

      const salt =  await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
          name: user.name
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);


router.post('/authenticate',async(req, res)=> {
  const user1 = await User.findOne({email:req.body.email});
     if (!user1) {
      console.log(user1);
      res.status(404).send('user not found');
     } else {
       console.log(user1);
if(bcrypt.compare(req.body.password, user1.password)) {
const token = jwt.sign({id: user1._id}, config.get('jwtSecret'), { expiresIn: 36000 });
res.json({status:"success", message: "user found!!!", data:{user: user1, token:token}});
}
else{
res.json({status:"error", message: "Invalid email/password!!!", data:null});
}
     }
    }
);


router.put('/update', auth, async(req,res)=>{
   const user1 = User.findOne({email:req.body.email});
   if(!user1){
     res.status(404).send('user not found');
   }
     // Update
     const { email, first_name, last_name, password,gender,phone } = req.body;
     console.log({ email, first_name, last_name, password,gender,phone });
     user1 = await User.findOneAndUpdate(
       { email: email },
       { first_name: first_name, last_name:last_name, password:await bcrypt.hash(password, bcrypt.genSalt(10)),
      gender:gender, phone:phone }
     );
     res.send(user1);
});

module.exports = router;