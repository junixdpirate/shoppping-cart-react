
import styles from "./header.module.scss";
import Link from 'next/link'

export default () => {
    return (
        <>
            <ul className={styles.menu}>
                <li className={styles.first}><Link href="/account/mypage" className="hover:text-yellow-500">マイページ</Link></li>
                <li><Link href="/cart" className="hover:text-yellow-500">カート</Link></li>
                <li><Link href="/shop/info" className="hover:text-yellow-500">お問い合わせ</Link></li>
                <li><Link href="/" className="hover:text-yellow-500">お気に入りに登録</Link></li>
            </ul>
        </>
    )
}