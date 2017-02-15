import Express from 'express'
import 'isomorphic-fetch'
import Unsplash, { toJson } from 'unsplash-js'

const unsplash = new Unsplash({
  applicationId: process.env.applicationId,
  secret: process.env.secret,
  callbackUrl: process.env.callbackUrl
})

const app = Express()
const latest = [{'date': Date.now()}]

function updateLatest(query, offset, results) {
  if (latest.length == 10) latest.shift()
  latest.push({
    'query': query,
    'offset': offset,
    'results': results,
    'date': Date.now()
  })
  console.log(latest)
}

app.get('/', (req, res) => {
  res.send('Need help?</br><a href="https://github.com/IsaacAbrahamson/image-abstraction" target="_blank">Visit Repository</a>')
})

app.get('/api/latest', (req, res) => res.json(latest))

app.get('/api/search/:photo', (req, res) => {
  var query = req.params.photo
  var offset = req.query.offset || 1
  var results = req.query.results || 5
  
  unsplash.search.photos(query, offset, results)
  .then(toJson)
  .then(json => {
    if (offset > json.total_pages) {
      var error = new Error()
      error.stack = `Offset (${offset}) exceeds number of pages available (${json.total_pages})`
      throw error
    }
    
    var photos = []    
    for (var photo of json.results) {     
      photos.push({
        photographer: photo.user.name + ' | Unsplash',
        raw: photo.urls.raw,
        full: photo.urls.full,
        regular: photo.urls.regular,
        small: photo.urls.small,
        thumbnail: photo.urls.thumb,
        alt: `${query} photo by ${photo.user.name} courtesy of Unsplash`
      })
    }
    
    res.json({"Total Pages": json.total_pages, photos})
    updateLatest(query, offset, results)
  })
  .catch(err => {
    if (err.stack) res.json({error: err.stack})
    else res.json({err: 'An error occured.'})
  })  
})

app.listen(process.env.PORT)
console.log(`listening on port ${process.env.PORT}...`)