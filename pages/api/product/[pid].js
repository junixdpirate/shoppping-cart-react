
import products from "./products"

export default function handler(req, res) {
    const {pid} = req.query
    const product = products.find(p => p.id == pid);
    //console.log(products);
    res.status(200).json(product)
  }