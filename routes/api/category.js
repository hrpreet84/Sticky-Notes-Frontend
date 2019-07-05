const express = require('express');
const config = require('config');
const router = express.Router();
const Category = require('../../models/Category');
const auth = require('../../middleware/auth');


router.post('/',
    auth,async (req, res) => {
        try {
            
            // const newCatgory = new Category({
            //     user: req.user.id,
            //     title: req.body.title,
            //     description: req.body.description

            // });
            console.log(req.user);
            // const category = await newCatgory.save();
            // res.send(category);

        } catch (error) {
            console.log(error.message);
            res.status(500).send('Server error');
        }
    });

router.get('/',
    auth,async (req, res) => {
        try {
            const categories = await Category.find({ user: req.user.id });
            res.send(categories);
    
        } catch (error) {
            console.log(error.message);
            res.status(500).send('Server error');
        }
});

router.get('/:id', auth,async (req, res) => {
    try {
        const category = await Category.findOne({
          user: req.user.id,
          _id: req.params.id
        });
        if (!category) {
          return res.status(404).send('No category found');
        }
        res.send(category);
      } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
      }
});


router.put('/', auth, async (req, res) => {
    try {
      let category = await Category.findOne({
        user: req.user.id,
        _id: req.body.id
      });
  
      if (!category) {
        return res.status(404).send('Post not found');
      }
  
      // Update
      const { title, description } = req.body;
      category = await Category.findOneAndUpdate(
        { _id: id },
        { title: title, description: description  }
      );
        res.send(Post4);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
  });   


router.delete('/', auth,async (req, res) => {
    try {

        await Category.findOneAndRemove({ user: req.user.id, _id: req.body.id });
        res.json({ msg: 'category deleted' });
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send("server error");
    }

});

module.exports = router;