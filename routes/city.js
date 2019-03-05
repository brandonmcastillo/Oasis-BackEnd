const
    express = require('express'),
    router = express.Router()
    // controllers = require('../controllers')

router.get('/', controllers.city.index)

module.exports = router;