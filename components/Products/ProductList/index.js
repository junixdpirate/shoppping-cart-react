const ProductItem = ( { product } ) => {
    
    return (
        <li>
            {product.code}
            <br />
            {product.name}
        </li>
    )
}


export default ( { products }) => {
    
    // convert to array cuz products is an object array and not an array list
    const productList = Object.keys(products).map(k => products[k])

    return (
        <>
            <h1>Product List</h1>

            <ul>
                {productList.map((item, i) => <ProductItem key={i} product={item} />)}
            </ul>
        </>
    )
}