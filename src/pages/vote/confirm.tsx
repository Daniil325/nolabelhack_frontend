import styles from "./style.module.css";
import { Button } from "primereact/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useNavigate } from "react-router-dom";

export const VoteConfirm = () => {

    const nav = useNavigate()

    const onRegisterClick = () => {
       nav("/votelist")
    };

    return (
        <>
            <Header />
            <div className={styles.conf__container}>
                <div className={styles.form__wrapper}>
                    <p>Вы уверены в своем выборе?</p>

                    <div className={styles.vvvv}>
                        <Button className={styles.button2} label="Да" onClick={onRegisterClick} />
                        <Button className={styles.button2} label="Нет" onClick={onRegisterClick} />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};
