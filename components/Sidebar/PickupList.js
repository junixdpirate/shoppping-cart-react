
import Link from 'next/link'

export default () => {
    return (
        <div className="border rounded-sm p-4 mt-4">
            <Link className="font-lg font-bold hover:text-yellow-500" href="/pickup/list">ピックアップ</Link>
        </div>
    )
}