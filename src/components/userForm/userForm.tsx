import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { classNames } from "primereact/utils";
import styles from "./style.module.css";
import { Button } from "primereact/button";
import { usePostItem } from "@/providers/api";


export const UserForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const getFormErrorMessage = (name: string) => {
        //@ts-ignore
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    const postMutation = usePostItem("user/registration");

    const onRegisterClick = () => {
        postMutation.mutate({
            email: email,
            password: password,
            is_active: null,
            is_superuser: null,
            is_verified: true,
        });
    };

    return (
        <>
            <div className={styles.form__container}>
                <div className={styles.form__wrapper}>
                    <h3>Регистрация</h3>
                    <p>Ваш первый шаг к честным голосованиям!</p>
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
                                <InputText
                                    value={password}
                                    onChange={(el) => setPassword(el.target.value)}
                                    autoFocus
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
                            <Button className={styles.button1} label="Зарегистрироваться" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
