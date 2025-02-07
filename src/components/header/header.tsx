import { Link } from "react-router-dom";
import styles from "./style.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <h1 className={styles.header__title}>
                    X<span className={styles.title_blue}>D_</span>Voting
                </h1>
                <ul className={styles.header__nav}>
                    <li className={styles.header__nav_item}><Link to="/technology">о технологии</Link> </li>
                    <li className={styles.header__nav_item}><Link to="/votelist">список голосований</Link></li>
                    <li className={styles.header__nav_item}><Link to="">о нас</Link></li>
                </ul>
                <div className={styles.header__auth}>
                    <p className={styles.header__auth_text}>
                        <Link to="/login">{localStorage.getItem("tmp") ? "Профиль" : "Авторизация"}</Link>
                    </p>
                </div>
            </div>
        </header>
    );
};
