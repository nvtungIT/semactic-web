import type { Film } from '@/models';
import request from '../utils/request';
export  async function getFilms() : Film[] { 
    var query = `PREFIX ex: <http://example.org/ontology#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

SELECT ?movie ?title ?releaseDate ?budget ?runtime ?productionCompanies ?director ?genres ?cast ?character
WHERE {
  ?movie rdf:type ex:Movie;
    ex:title ?title;
    ex:release_date ?releaseDate;
    ex:budget ?budget;
    ex:runtime ?runtime;
    ex:production_companies ?productionCompanies;
    ex:director ?director.
  
  OPTIONAL {
    ?movie ex:genres ?genres.
    ?movie ex:has_cast ?cast.
    ?cast rdf:type ex:Role;
      ex:cast_member ?cast_member;
      ex:character ?character.
  }
}
`
    const data = await request({url: '/data', method: 'post', params: {query: query}})
    if (data.results && data.results.bindings) {
        return data.results.bindings as Film[]
    }
    return []
}


export async function getDetailFilm(name: string) : Film { 
    var query = `PREFIX ex: <http://example.org/ontology#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

SELECT ?movie ?title ?releaseDate ?budget ?runtime ?productionCompanies ?director ?genres ?cast ?character
WHERE {
  ?movie rdf:type ex:Movie;
    ex:title ?title;
    ex:release_date ?releaseDate;
    ex:budget ?budget;
    ex:runtime ?runtime;
    ex:production_companies ?productionCompanies;
    ex:director ?director.
  
  OPTIONAL {
    ?movie ex:genres ?genres.
    ?movie ex:has_cast ?cast.
    ?cast rdf:type ex:Role;
      ex:cast_member ?cast_member;
      ex:character ?character.
  }
   FILTER(regex(?title, "${name}", "i"))
} LIMIT 1
`
    const data = await request({url: '/data', method: 'post', params: {query: query}})
    if (data.results && data.results.bindings && data.results.bindings[0]) {
        return data.results.bindings[0] as Film
    }
    return null
}