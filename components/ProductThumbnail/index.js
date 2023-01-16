import Image from 'next/image'
import Link from 'next/link'

const ProductThumbnail = ( {product} ) => {
    return (
            
            <Link className="block" href={`/product/${product.id}`}>
                <div className="grid justify-items-center">
                    <span className="mb-2 font-bold text-gray-700 hover:text-yellow-500">{product.name}</span>
                    <Image src={`/images/thumbnail/${product.thumbnail}`} alt={product.name} width="150" height="150" />
                    <span className="mt-2 text-gray-700 hover:text-yellow-500">販売価格：<span>{product.price}</span></span>
                </div>
            </Link>
            
        
    )
}

export default ProductThumbnail