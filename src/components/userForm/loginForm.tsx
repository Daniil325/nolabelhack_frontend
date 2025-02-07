import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { classNames } from "primereact/utils";
import styles from "./style.module.css";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    const getFormErrorMessage = (name: string) => {
        //@ts-ignore
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    //const postMutation = usePostItem("user/login");

    const navigate = useNavigate();

    const onRegisterClick = () => {
        localStorage.setItem("tmp", "gooooooooooool");
        navigate("/votelist");
    };

    return (
        <>
            <div className={styles.form__container}>
                <div className={styles.form__wrapper}>
                    <h3>Вход</h3>
                    <div className={styles.form}>
                        <div className="field">
                            <span className="p-float-label">
                                <InputText
                                    value={email}
                                    onChange={(el) => setEmail(el.target.value)}
                                    autoFocus
                                />

                                <label
                                    htmlFor="name"
                                    //@ts-ignore
                                    className={classNames({ "p-error": errors.email })}
                                >
                                    Почта
                                </label>
                            </span>
                            {getFormErrorMessage("name")}
                        </div>

                        <div className="field">
                            <span className="p-float-label">
                                <Password
                                    value={password}
                                    onChange={(el) => setPassword(el.target.value)}
                                />
                                <label
                                    htmlFor="name"
                                    //@ts-ignore
                                    className={classNames({ "p-error": errors.password })}
                                >
                                    Пароль
                                </label>
                            </span>
                            {getFormErrorMessage("name")}
                        </div>

                        <div className={styles.buttons}>
                            <Button
                                className={styles.button1}
                                label="Зарегистрироваться"
                                onClick={onRegisterClick}
                            />
                            <Button className={styles.button1} label="Войти" onClick={onRegisterClick} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
