const
    express = require('express'),
    router = express.Router()
    // controllers = require('../controllers')

router.get('/', controllers.post.index)

router.get('/:id', controllers.post.get_post)

router.put('/:id', controllers.post.update)

router.post('/', controllers.post.create)

router.delete('/:id', controllers.post.remove)

module.exports = router;