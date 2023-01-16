import products from './products'
import shuffleArray from '../../../components/_helpers/shuffleArray'

export default function handler(req, res) {
    const rankProducts = shuffleArray(products)
    res.status(200).json(rankProducts)
  }