const
    express = require('express')
    cors = require('cors')
    userRoutes = require('./routes/user')
    postRoutes = require('./routes/post')
    cityRoutes = require('./routes/city')
    bodyParser = require('body-parser')
    
const app = express()

app.use(cors())
app.use(bodyParser.urllencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('public'))

app.use('/api/posts', postRoutes)
app.use('/user', userRoutes)
app.use('/api/city', cityRoutes)

app.listen(3001, () => console.log('Listening on port 3001 :)'))