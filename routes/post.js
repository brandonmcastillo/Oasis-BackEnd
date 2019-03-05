const
    express = require('express'),
    router = express.Router()
    // controllers = require('../controllers')

router.get('/', controllers.post.index)

router.get('/:id', controllers.post.get_post)

// router.get('/:id/user', controllers.post.get_user)

// router.get('/:id/city', controllers.post.get_city)

router.get('/:userId', controllers.post.find_by_user)

router.get('/:cityId', controllers.post.find_by_city)

router.put('/:id', controllers.post.update)

router.post('/', controllers.post.create)

router.delete('/:id', controllers.post.remove)

module.exports = router;