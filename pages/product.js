
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Product = () => {

    const router = useRouter()
    const {pid} = router.query
    const { data } = useSWR('/api/product/' + pid, fetcher)
    
    if (!data) return <p>Loading...</p>

    return (<>
        <h1>{data.name}</h1>
    </>)
}


export default Product;