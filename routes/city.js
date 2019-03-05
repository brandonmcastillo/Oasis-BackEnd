const
    express = require('express'),
    router = express.Router()
    // controllers = require('../controllers')

router.get('/', controllers.city.index)

router.get('/', controller.city.get_city)

module.exports = router;