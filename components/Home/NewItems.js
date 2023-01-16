
import { useState, useEffect } from 'react'
import ProductThumbnail from '../ProductThumbnail'

export default () => {

    const [products, setProducts] = useState([])
    const [isLoaded, setLoaded] = useState(false)

    useEffect(() => {
        if(isLoaded) return;
        fetch(`/api/product/newProducts`)
          .then((res) => res.json())
          .then((data) => {
            setProducts(data)
            setLoaded(true)
          })
      })


    return(
        <div className="mt-20">
            <h3 className="sectionHeader">新商品</h3>
            <div className="grid grid-cols-3 content-center">
                {products.map(product => <ProductThumbnail key={product.id} product={product} />)}
            </div>
        </div>
    )
}