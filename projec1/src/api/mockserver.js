import { createServer, Model } from 'miragejs';



const data= [
  {
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont",
    "duration": "2h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.3
  },
  {
    "title": "The Godfather",
    "year": 1972,
    "director": "Francis Ford Coppola",
    "duration": "2h 55min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.2
  },
  {
    "title": "The Godfather: Part II",
    "year": 1974,
    "director": "Francis Ford Coppola",
    "duration": "3h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9
  },  {
    "title": "Dead Poets Society",
    "year": 1989,
    "director": "Peter Weir",
    "duration": "2h 8min",
    "genre": [
      "Comedy",
      "Drama"
    ],
    "rate": 8
  }
]

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,
    models: {
      client: Model,
    },
    seeds(server) { },
    routes() {
      this.namespace = '/api/';        
      this.timing = 2000

      this.get('data', (schema, request) => {               // /api/ + movies url-rol kell fetchelni
      
        return data
      });

  this.get('filterData', (schema, request) => {                           // api/clients?search=[keresendo szoveg]&nev=otto
        const search = request.queryParams.search
        const clientName= request.queryParams.nev   // ===otto
        return data.filter(client => client.name.includes(search))
      });



this.post('/save', (schema, request) => {                                 // POST method to api/pets
        let { name, isVaccinated } = JSON.parse(request.requestBody);
        data.forEach(c => {
          c.pets.forEach(p => {
            if (p.name === name) p.isVaccinated = isVaccinated
          })
        })
        return { success: true }
      });

      
    },
  });
  return server;
}
