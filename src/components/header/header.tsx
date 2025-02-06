import styles from "./style.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <h1 className={styles.header__title}>X<span className={styles.title_blue}>D_</span>Voting</h1>
                <ul className={styles.header__nav}>
                    <li className={styles.header__nav_item}>о технологии</li>
                    <li className={styles.header__nav_item}>список голосований</li>
                    <li className={styles.header__nav_item}>о нас</li>
                </ul>
                <div className={styles.header__auth}>
                    <p className={styles.header__auth_text}>Авторизация</p>
                </div>
            </div>
        </header>
    );
};
