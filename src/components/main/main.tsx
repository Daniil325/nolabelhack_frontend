import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

type VoteItemProps = {
    title: string;
    description: string;
};

export const VoteItem = ({ title, description }: VoteItemProps) => {
    const nav = useNavigate()

    const onClick = () => {
        nav("/vote/detail")
    }

    return (
        <div className={styles.main} onClick={onClick}>
            <div className={styles.avatar}>
                <img className={styles.avatar_image} src="public/Ellipse.png" alt="" />
            </div>
            <div className={styles.main_text}>
                {title}
                <br />
                {description}
            </div>
        </div>
    );
};

export const Main = () => {
    return (
        <>
            <div className="vctheme-hero-home" id="vctheme-hero-home_0" data-v-app="">
                <div className="vctheme-container">
                    <div className="vctheme-hero-home__content">
                        <div className="vctheme-hero-home__title vctheme-font-inerith vctheme-font-162 is-strong-underline">
                            <h1>
                                Мы обеспечиваем
                                <br /> открытость
                                <br /> <strong>процесса</strong> голосования
                            </h1>
                        </div>
                        <div className="vctheme-hero-home__thumb vctheme-container__out">
                            <div className="vctheme-hero-home__thumb__item"></div>
                        </div>
                        <div className="vctheme-hero-home__text vctheme-font-30 vctheme-font-inerith">
                            <div className="vctheme-hero-home__text__content">
                                <p>
                                    Блокчейн технология - распределенный, защищенный, прозрачный
                                    реестр данных.
                                </p>
                                <p>
                                    Голос каждого гражданина имеет равное значение и надежно
                                    защищен, устанавливая новый стандарт доверия и безопасности.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
