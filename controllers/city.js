const db = require('../models')

module.exports = {
    index: (req,res) => {
        db.City.find( (err, foundCities) => {
            if (err) {console.log(err)}
            res.json(foundCities)
        })
    },
    get_city: (req, res) => {
        let cityId = req.params.id
        db.City.findOne({_id: cityId}, (err, foundCity) => {
            if (err) {console.log}
            res.json(foundCity)
        })
    }
}