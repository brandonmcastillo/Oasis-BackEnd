const db = require('../models')

module.exports = {
    // Get all the cities
    index: (req,res) => {
        db.City.find( (err, foundCities) => {
            if (err) {console.log(err)}
            res.json(foundCities)
        })
    },
    // Get one city
    get_city: (req, res) => {
        let cityId = req.params.id
        db.City.findOne({_id: cityId}, (err, foundCity) => {
            if (err) {console.log}
            res.json(foundCity)
        })
    }
}