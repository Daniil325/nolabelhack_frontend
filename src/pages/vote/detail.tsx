import styles from "./style.module.css";
import { Button } from "primereact/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useNavigate } from "react-router-dom";

export const VoteDetail = () => {
   
    const nav = useNavigate()

    const onRegisterClick = () => {
       nav("/vote/confirm")
    };

    return (
        <>
            <Header />
            <div className={styles.form__container}>
                <div className={styles.form__wrapper}>
                    <h1 className={styles.f_title}>Тестовое голосование 1</h1>
                    <p>
                        Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне.
                        Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI
                        века. В то время некий безымянный печатник создал большую коллекцию
                        размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
                    </p>
                    <Button
                        className={styles.button2}
                        label="Вариант 1"
                        onClick={onRegisterClick}
                    />{" "}
                    <Button
                        className={styles.button2}
                        label="Вариант 2"
                        onClick={onRegisterClick}
                    />{" "}
                    <Button
                        className={styles.button2}
                        label="Вариант 3"
                        onClick={onRegisterClick}
                    />
                </div>
            </div>

            <Footer />
        </>
    );
};
