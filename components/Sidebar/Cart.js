
import Link from 'next/link'

export default () => {
    return (
        <div className="border rounded-sm">
            <div className="p-4"><b>ようこそ ゲスト 様</b></div>
            <div className="border-t p-4">
                    <Link className="hover:text-yellow-500" href="/cart">カートには何も入っていません。</Link>
            </div>
        </div>
    )
}