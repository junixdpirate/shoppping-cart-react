import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className="mt-28">
        
        <div id='pagetop' className="text-right"><a href='#top'>▲ページトップ</a></div>

        <div className={styles.footer}>
              
              <div className='footer-menu'>

                <div id="footer_menu">
                    <a className="hover:text-yellow-500" href='/shop/info'>お問い合わせ</a>
                    ｜<a className="hover:text-yellow-500"  href='/shop/order'>特定商取引法に基づく表記</a>
                    ｜<a className="hover:text-yellow-500" href='/shop/privacy'>プライバシーポリシー</a>
                </div>

                <div id='copyright' className="text-center mt-1">
                    © 2021 sampleshop test
                </div>

              </div>
        </div>
    </footer>
  );
}
