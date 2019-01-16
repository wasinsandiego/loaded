const express = require('express')
const express_graphql = require('express-graphql')
const { buildSchema } = require('graphql')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const { ALL_TALENT } = require('./data.js')

// GraphQL schema
var schema = buildSchema(`
  type Query {
    influencer(id: Int!): Influencer
    influencers: [Influencer]
  },
  type Influencer {
    id: Int
    handle: String
    avatar: String
    twitchId: Int
    twitchFollowers: Int
    twitchViewers: Int
    twitchUrl: String
    twitterFollowers: Int
    twitterLink: String
    youtubeSubscribers: Int
    youtubeLink: String
  }
`)

function getInfluencer (args) {
  const { id } = args
  const result = ALL_TALENT.filter(inf => {
    return inf.id == id
  })[0]
  return result
}

function getInfluencers () {
  return ALL_TALENT
}

const transform = (obj) => {
  const { id, handle, avatar, youtube_account, twitter_account, twitch_accounts } = obj
  return {
    id,
    handle,
    avatar,
    twitchViewers: obj.influence_performance_score,
    twitchFollowers: obj.influence_following_score,
    twitchId:obj.twitch_accounts[0].id,
    twitchUrl: `https://twitch.tv/${obj.twitch_accounts[0].slug}`,
    twitterFollowers: twitter_account.followers,
    twitterLink: `https://twitter.com/${twitter_account.screen_name}`,
    youtubeSubscribers: youtube_account.subscribers,
    youtubeLink: `https://youtube.com/channel/${youtube_account.youtube_id}`,
  }
}

const root = {
  influencer: getInfluencer,
  influencers: getInfluencers
}

const port = process.env.PORT || 4000
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// -------------------------------------------------------------
// GraphQL
app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

// REST
app.get('/influencers', (req, res) => {
  res.json(ALL_TALENT.map(({id, handle, avatar, twitchViewers}) => ({
    id, handle, avatar, twitchViewers
  })))
})
app.get('/influencers/:id', (req, res) => {
  res.json(getInfluencer({ id: req.params.id }))
})
// -------------------------------------------------------------


// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' })
})

app.post('/api/world', (req, res) => {
  console.log(req.body)
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  )
})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')))

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

app.listen(port, () => {
  console.log('GraphQL running on http://localhost:4000/graphql')
  console.log('App running on http://localhost:3000')
})
// app.listen(port, () => console.log(`Listening on port ${port}`))
