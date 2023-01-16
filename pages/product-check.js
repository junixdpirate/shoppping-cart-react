import axios from 'axios';
import ProductList from '../components/Products/ProductList'
import Input from "../components/Input"
import { useState } from 'react';
import { useRouter } from 'next/router'

export default () => {
    
    const strProductData = sessionStorage.getItem('productData');
    const { code, name } = JSON.parse(strProductData)
    
    const [showProducts, setShowProducts] = useState(false)
    const [products, setProducts] = useState({})
    
    const submitHandler = () => {
        axios.post('/api/product/store', { code, name })
            .then(res => {
                setProducts(res.data)
                setShowProducts(true)
            })
    }

    return (
        <div>
            <div>
                <h3>Confirm Product</h3>
                <p>
                    Product Code : {code}
                </p>
                <p>
                    Product Name : {name}
                </p>

                <div>
                    <Input name="name" value={name} />
                </div>
                <p>
                    <button onClick={submitHandler} >Submit Product</button>
                </p>
            </div>
            
            {showProducts && <ProductList products={products} />}

        </div>
    )
}

