
import Router, { useRouter } from 'next/router'
import { useState } from 'react'
import Input from "../components/Input"

const ProductAdd = () => {

    // use session storage to persist data and pass to product-check
    //const sessionProductData = sessionStorage.getItem('productData')
    const [product, setProduct] = useState({ code : null, name : null})
    
    const onInputChanged = (name, value) => {
        product[name] = value;
        setProduct({...product});
        sessionStorage.setItem('productData', JSON.stringify(product))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sessionStorage.setItem('productData', JSON.stringify(product))
        Router.push('/product-check')
    }
    return (
    <div class="box-rounded background-white gap-4 p-4">
        <form method="post" onSubmit={handleSubmit}>
            <div className="font-bold font-lg">Product Add</div>
            <div>
                <Input name="code" cbchanged={onInputChanged}>Product Code</Input>
            </div>
            <div>
                <Input name="name" cbchanged={onInputChanged}>Product Name</Input>
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    </div>)
}

export default ProductAdd