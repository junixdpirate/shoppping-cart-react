
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Product = () => {

    const router = useRouter()
    const {pid} = router.query
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        if(!pid) return
        setLoading(true)
        fetch(`/api/product/${pid}`)
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setLoading(false)
          })
      }, [pid])
    
      if (isLoading) return <p>Loading...</p>
      if (!data) return <p>No product</p>

    return (<>
        <h1>{data.name}</h1>
    </>)
}


export default Product;