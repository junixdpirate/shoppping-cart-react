
import { useState, useEffect } from 'react'
import Link from 'next/link'

const CategoryLink = ( { category }) => {
    return (
        <li>
            <Link className="block hover:text-yellow-500 px-2 py-2 border-b mb-1" href={`/product/list/${category.id}`}>{category.name}</Link>
        </li>
    )
}

export default () => {

    const [categories, setCategories] = useState([])
    //const [isLoading, setLoading] = useState(false)
    const [isLoaded, setLoaded] = useState(false)

    useEffect(() => {
        if(isLoaded) return;
        //setLoading(true)
        fetch(`/api/categories/main`)
          .then((res) => res.json())
          .then((data) => {
            setCategories(data)
            //setLoading(false)
            setLoaded(true)
          })
      })

    return (
        <div className="mt-4">
            <h3 className="font-bold border-b pb-1 mb-2">商品カテゴリー</h3>

            <ul>
                {categories.map(category => <CategoryLink category={category} key={category.id} />)}
            </ul>
        </div>
    )
}