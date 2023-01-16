
import styles from "./layout.module.scss";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
//import CategoriesBar from "components/Categories";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <div className={`${styles.main} flex`}>
          <div className={`${styles.sidebar} flex-initial`}>
            <Sidebar />
          </div>
          <div className={`${styles.maincontent} flex-auto`}>
            {children}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
