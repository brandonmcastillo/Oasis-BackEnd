const
    express = require('express')
    router = express.Router(),
    jwt = require('jsonwebtoken'),
    // controllers = require('../controllers')

router.post('/signup', controllers.user.signup);

router.post('/login', controllers.user.login)

router.use((req, res, next) => {
    console.log('activated')
    const bearerHeader = req.headers['authorization'];
    console.log('triggered token check', bearerHeader)
  
    if(typeof bearerHeader !== 'undefined'){
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      req.token = bearerToken;
      let verified = jwt.verify(req.token, '');
      console.log('here is the verified', verified)
      req.userId = verified._id //set user id for routes to use
      next();
    } 
    else {
      res.sendStatus(403);
    }
})

router.get('/', controllers.user.show)

// router.get('/:id', controllers.post.index)


// Get all the posts made by one user
router.get('/:id/post', controller.post.index)

// Get one post by id made by one user
router.get('/:id', controllers.post.get_post)

// Update a post made by a user
router.put('/:userId/post/:id', controllers.post.update)

// Create a new post
// router.post('/', controllers.post.create)

// Delete a post
router.delete('/:userId/post/:id', controllers.post.remove)


module.exports = router