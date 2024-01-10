import type { Product } from '@/models'
import request from '../utils/request'
export async function getProducts(): Promise<Product[]> {
  const query = `PREFIX ex: <http://example.org/ontology#>
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  SELECT ?productName  ?ProductImage ?cropType ?location  ?country
  WHERE {
    ?product rdf:type ex:Product ;
             ex:productName ?productName .
    
    ?product ex:ProductImage ?ProductImage .
     ?product ex:cropType ?cropType .
    ?product ex:location/ex:country ?country ;
             ex:location/ex:address ?address .
    
    BIND (CONCAT(?country, ", ", ?address) AS ?location)
  }
  
`
  const data = await request({ url: '/query', method: 'post', params: { query: query } })
  if (data.results && data.results.bindings) {
    console.log(data.results.bindings)
    return data.results.bindings as Product[]
  }
  return []
}

export async function getProductsFromLocation(location: string): Promise<Product[]> {
  const query = `PREFIX ex: <http://example.org/ontology#>
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  
  SELECT ?productName ?productionQuantity ?productionDate ?price ?harvestSeason ?cropType ?ProductImage ?location ?country
  WHERE {
    ?product rdf:type ex:Product ;
             ex:productName ?productName ;
             ex:quantity/ex:productionQuantity ?productionQuantity ;
             ex:quantity/ex:productionDate ?productionDate .
    
    ?product ex:price/ex:priceValue ?price .
    ?product ex:harvestSeason ?harvestSeason .
    ?product ex:location/ex:country ?country ;
             ex:location/ex:address ?address .
    ?product ex:cropType ?cropType.
     ?product ex:ProductImage ?ProductImage.
    
    BIND (CONCAT(?country, ", ", ?address) AS ?location)
    FILTER(?country = "${location}")
  }

`
  const data = await request({ url: '/query', method: 'post', params: { query: query } })
  if (data.results && data.results.bindings) {
    console.log(data.results.bindings)
    return data.results.bindings as Product[]
  }
  return []
}

export async function getProductsFromSeason(season: string): Promise<Product[]> {
  const query = `PREFIX ex: <http://example.org/ontology#>
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  
  SELECT ?productName ?productionQuantity ?productionDate ?price ?harvestSeason ?cropType ?ProductImage ?location ?country
  WHERE {
    ?product rdf:type ex:Product ;
             ex:productName ?productName ;
             ex:quantity/ex:productionQuantity ?productionQuantity ;
             ex:quantity/ex:productionDate ?productionDate .
    
    ?product ex:price/ex:priceValue ?price .
    ?product ex:harvestSeason ?harvestSeason .
    ?product ex:location/ex:country ?country ;
             ex:location/ex:address ?address .
    ?product ex:cropType ?cropType.
     ?product ex:ProductImage ?ProductImage.
    
    BIND (CONCAT(?country, ", ", ?address) AS ?location)
    FILTER(?harvestSeason = "${season}")
  }

`
  const data = await request({ url: '/query', method: 'post', params: { query: query } })
  if (data.results && data.results.bindings) {
    console.log(data.results.bindings)
    return data.results.bindings as Product[]
  }
  return []
}

export async function getDetailProduct(name: string): Promise<Product> {
  const query = `PREFIX ex: <http://example.org/ontology#>
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  
  SELECT ?productName ?productionQuantity ?productionDate ?price ?harvestSeason ?cropType ?ProductImage ?location ?country
  WHERE {
    ?product rdf:type ex:Product ;
             ex:productName ?productName ;
             ex:quantity/ex:productionQuantity ?productionQuantity ;
             ex:quantity/ex:productionDate ?productionDate .
    
    ?product ex:price/ex:priceValue ?price .
    ?product ex:harvestSeason ?harvestSeason .
    ?product ex:location/ex:country ?country ;
             ex:location/ex:address ?address .
    ?product ex:cropType ?cropType.
     ?product ex:ProductImage ?ProductImage.
    
    BIND (CONCAT(?country, ", ", ?address) AS ?location)
  
    FILTER(?productName = "${name}")
  }
  LIMIT 1
`
  const data = await request({ url: '/query', method: 'post', params: { query: query } })
  if (data.results && data.results.bindings && data.results.bindings[0]) {
    return data.results.bindings[0] as Product
  }
  return null
}

export async function queryData(query: string) {
  const data = await request({ url: '/query', method: 'post', params: { query: query } })
  if (data) return data
  return {}
}
