Visit website at: [https://image-abstraction.gomix.me/](https://image-abstraction.gomix.me/)

#### Endpoints:
- `/api/latest`
- `/api/search/<photoName>?(parameters)`

#### Query Parameters:
- `offset` (default = 1)
- `results` (default = 5, max = 30)

#### Example Usage:
```javascript
$(document).ready(() => {
  const url = 'https://image-abstraction.gomix.me/api/search/computer?offset=2&results=3'
  $.get(url).then(data => console.log(data))
})
```

#### Example Output:
```json
{
  "Total Pages": 50,
  "photos": [
    {
      "photographer": "Markus Spiske | Unsplash",
      "raw": "https://images.unsplash.com/photo-1476170434383-88b137e598bb",
      "full": "https://images.unsplash.com/photo-1476170434383-88b137e598bb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=dbfdb29f473a3715cdc6d7cc7ade656a",
      "regular": "https://images.unsplash.com/photo-1476170434383-88b137e598bb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=a361641af048c8e87ad9bfd811f4e7ae",
      "small": "https://images.unsplash.com/photo-1476170434383-88b137e598bb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=9797c07f372b2711ca9b9715b861115e",
      "thumbnail": "https://images.unsplash.com/photo-1476170434383-88b137e598bb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=f83b6a841c15a5d92e05647fc50581f0",
      "alt": "computer photo by Markus Spiske courtesy of Unsplash"
    },
    {
      "photographer": "Luis Llerena | Unsplash",
      "raw": "https://images.unsplash.com/photo-1431605695381-f4a9c3cdd150",
      "full": "https://images.unsplash.com/photo-1431605695381-f4a9c3cdd150?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=98313d7dcf91541531244e476051b8f0",
      "regular": "https://images.unsplash.com/photo-1431605695381-f4a9c3cdd150?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=b53f294db4b2107ebd7f70be4e039ec7",
      "small": "https://images.unsplash.com/photo-1431605695381-f4a9c3cdd150?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=afca8a458b2eab3f8787967c85fe3567",
      "thumbnail": "https://images.unsplash.com/photo-1431605695381-f4a9c3cdd150?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=afaf796db0d874ad972d4f80bd769e8e",
      "alt": "computer photo by Luis Llerena courtesy of Unsplash"
    },
    {
      "photographer": "Jay Wennington | Unsplash",
      "raw": "https://images.unsplash.com/photo-1414509613498-f53000d3d2c1",
      "full": "https://images.unsplash.com/photo-1414509613498-f53000d3d2c1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=f921f3a4fa26cd2bfc8aa9809060c850",
      "regular": "https://images.unsplash.com/photo-1414509613498-f53000d3d2c1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=5c86144c234fc781f5439983eebaff6d",
      "small": "https://images.unsplash.com/photo-1414509613498-f53000d3d2c1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=4e2750d6781c010ba727cf0ed072f70b",
      "thumbnail": "https://images.unsplash.com/photo-1414509613498-f53000d3d2c1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=75ad355a95070fd5c64c9c9c1b480aaf",
      "alt": "computer photo by Jay Wennington courtesy of Unsplash"
    }
  ]
}
```
