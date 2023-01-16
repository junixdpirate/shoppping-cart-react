
import Link from 'next/link'

export default () => {
    return(
        <div>
            <h3 className="sectionHeader">新着情報</h3>

            <p className="text-right">
                <Link className="hover:text-yellow-500" href="/shop/news">全ての新着情報を見る</Link>
            </p>
        </div>
    )
}