export interface Product {
  productName: Data
  harvestSeason: Data
  cropType: Data
  price: Data
  location: Data
  productionQuantity: Data
  productionDate: Data
  country: Data
  ProductImage: Data
}
export interface Data {
  type: string
  datatype: string
  value: string
}
