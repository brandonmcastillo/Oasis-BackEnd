const
    express = require('express')
    
const app = express()

app.use(bodyParser.urllencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('public'))

app.listen(3001, () => console.log('Listening on port 3001 :)'))