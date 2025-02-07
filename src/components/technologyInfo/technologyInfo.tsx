import styles from "./style.module.css";

export const TechnologyInfo = () => {
    return (
        <>
            <div className={styles.info_container}>
                <div className={styles.info_item}>
                    <div className={styles.info_item__prefix}>
                        <p className={styles.info_item__prefix_number}>01</p>
                        <p className={styles.info_item__prefix_name}>Пользователи.</p>
                    </div>
                    <div className={styles.info_item__text}>
                        Каждому пользователю выдается уникальный цифровой ключ, защищающий его
                        личность. Ключ подтвердит вашу личность и предоставит конфиденциальность.
                    </div>
                </div>

                <div className={styles.info_item}>
                    <div className={styles.info_item__prefix}>
                        <p className={styles.info_item__prefix_number}>02</p>
                        <p className={styles.info_item__prefix_name}>Блокчейн.</p>
                    </div>
                    <div className={styles.info_item__text}>
                        В нашей системе, основанной на блокчейне, каждый голос безопасно и
                        прозрачно записывается в базу данных, защищенную от изменений и удалений,
                        обеспечивая честность и неизменяемость результатов.
                    </div>
                </div>

                <div className={styles.info_item}>
                    <div className={styles.info_item__prefix}>
                        <p className={styles.info_item__prefix_number}>03</p>
                        <p className={styles.info_item__prefix_name}>Криптография.</p>
                    </div>
                    <div className={styles.info_item__text}>
                        Использование криптографии гарантирует конфиденциальность и предотвращает
                        мошенничество при голосовании пользователей, шифруя их голоса и защищая их
                        личности.
                    </div>
                </div>

                <div className={styles.info_item}>
                    <div className={styles.info_item__prefix}>
                        <p className={styles.info_item__prefix_number}>04</p>
                        <p className={styles.info_item__prefix_name}>
                            Для чего нужна наша разработка.
                        </p>
                    </div>
                    <div className={styles.info_item__text}>
                        Наша программа отвечает на острую потребность в честных и прозрачных
                        системах принятий решений. Мы не просто предоставляем технологическую
                        платформу, а формируем новый стандарт открытости и доверия в управлении
                        различных организаций. От больших компаний, до общественных движений.
                        Способствуя созданию более справедливых и эффективных систем принятия
                        решений.
                    </div>
                </div>
            </div>
        </>
    );
};
