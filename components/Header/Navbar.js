
import Link from 'next/link'

export default function Navbar() {
    return (
      <div className="bg-gray-200 p-2 rounded-sm">
          <Link href="/account/signin" className="hover:text-yellow-500">ログイン</Link>
          &nbsp;|&nbsp;
          <Link href="/shop/rules" className="hover:text-yellow-500">会員登録</Link>
      </div>
    );
  }