import categories from './data'

export default function handler(req, res) {
    const result = categories.map(item => { return { id : item.id, name : item.name } } )
    res.status(200).json(result)
  }