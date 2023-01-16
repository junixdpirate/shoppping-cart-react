import products from "./products"

export default function handler(req, res) {
    const {code, name } = req.body
    
    products[ Object.keys(products).length + 1] = { code, name}
    
    res.status(200).json(products)
  }