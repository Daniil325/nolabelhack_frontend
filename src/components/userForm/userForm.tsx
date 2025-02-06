import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { classNames } from "primereact/utils";
import styles from "./style.module.css";

export const UserForm = () => {
    const [formData, setFormData] = useState({});

    const defaultValues = {
        username: "",
        email: "",
        password: "",
    };
    const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({ defaultValues });

    const onSubmit = (data: object) => {
        setFormData(data);

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    return (
        <>
            <div className={styles.form__container}>
                <div className={styles.form__wrapper}>
                    <h3>Регистрация</h3>
                    <p>Ваш первый шаг к честным голосованиям!</p>
                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} action="">
                        <div className="field">
                            <span className="p-float-label">
                                <Controller
                                    name="username"
                                    control={control}
                                    rules={{ required: "Name is required." }}
                                    render={({ field, fieldState }) => (
                                        <InputText
                                            id={field.name}
                                            {...field}
                                            autoFocus
                                            className={classNames({
                                                "p-invalid": fieldState.invalid,
                                            })}
                                        />
                                    )}
                                />
                                <label
                                    htmlFor="name"
                                    className={classNames({ "p-error": errors.username })}
                                >
                                    Имя пользователя
                                </label>
                            </span>
                            {getFormErrorMessage("name")}
                        </div>

                        <div className="field">
                            <span className="p-float-label">
                                <Controller
                                    name="email"
                                    control={control}
                                    rules={{ required: "Name is required." }}
                                    render={({ field, fieldState }) => (
                                        <InputText
                                            id={field.name}
                                            {...field}
                                            autoFocus
                                            className={classNames({
                                                "p-invalid": fieldState.invalid,
                                            })}
                                        />
                                    )}
                                />
                                <label
                                    htmlFor="name"
                                    className={classNames({ "p-error": errors.email })}
                                >
                                    Почта
                                </label>
                            </span>
                            {getFormErrorMessage("name")}
                        </div>

                        <div className="field">
                            <span className="p-float-label">
                                <Controller
                                    name="password"
                                    control={control}
                                    rules={{ required: "Name is required." }}
                                    render={({ field, fieldState }) => (
                                        <InputText
                                            id={field.name}
                                            {...field}
                                            autoFocus
                                            className={classNames({
                                                "p-invalid": fieldState.invalid,
                                            })}
                                        />
                                    )}
                                />
                                <label
                                    htmlFor="name"
                                    className={classNames({ "p-error": errors.password })}
                                >
                                    Пароль
                                </label>
                            </span>
                            {getFormErrorMessage("name")}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
