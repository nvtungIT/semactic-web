export interface Product {
  productName: Data
  harvestSeason: Data
  cropType: Data
  runtime: Data
  price: Data
  location: Data
  quantity: Data
  ProductImage: Data
}
export interface Data {
  type: string
  datatype: string
  value: string
}
