import styles from "./header.module.scss";
import Logo from "./Logo";
import SearchBar from "./Searchbar";
import Navbar from "./Navbar";
import HeaderMenu from "./HeaderMenu";

export default function Header({ noSearchBar }) {
    return (
      <header className={styles.header}>
        <div className="flex gap-4">
            <div className="flex-initial"><Logo /></div>
            {!noSearchBar && <div className="flex-auto ml-4">{<SearchBar />}</div>}
            <div className="flex-initial "><Navbar /></div>
        </div>
        <HeaderMenu />
      </header>
    );
  }