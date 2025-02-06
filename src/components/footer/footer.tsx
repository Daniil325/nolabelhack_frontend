import styles from "./style.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footer__container}>
            <div className={styles.footer__wrapper}>
                <div className={styles.footer__copyright}>
                    <p>Copyright 2025| XD cult team</p>
                </div>

                <ul className={styles.footer_social__list}>
                    <li className={styles.footer_social__list_item}>Privacy Policy</li>
                    <li className={styles.footer_social__list_item}>Cookie Policy</li>
                    <li className={styles.footer_social__list_item}>Aggiorna preferenze cookie</li>
                    <li className={styles.footer_social__list_item}>Github</li>
                </ul>
            </div>
        </footer>
    )
}