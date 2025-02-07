import { useState } from "react";
import styles from "./style.module.css";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import DatePicker from "react-datepicker";
import { Button } from "primereact/button";
import { BASE_API_URL } from "@/providers/api";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const CreateVote = () => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [startDate, setStartDate] = useState<Date | null>();
    const [endDate, setEndDate] = useState<Date | null>();

    const [answer1, setAnswer1] = useState<string>("");
    const [answer2, setAnswer2] = useState<string>("");
    const [answer3, setAnswer3] = useState<string>("");

    const mutation = useMutation({
        mutationFn: async (postData: object) => {
            
            const { data } = await axios.post(`${BASE_API_URL}vote`, postData["voteData"]);

            for (const answer in postData["answerData"]) {
                const postObj = {
                    voteId: data,
                    answerText: postData["answerData"][answer],
                    createdAt: new Date()
                }
                const { data: answerResult } = await axios.post(`${BASE_API_URL}answer`, postObj)
            }
        },
    });

    const createClick = () => {
        mutation.mutate(
            {
           voteData: {
                title: title,
                description: description,
                start_date: startDate,
                end_date: endDate,
                is_active: true,
            },
            answerData: [answer1, answer2, answer3]
        }
        );
    };

    return (
        <>
            <Header />
            <div className={styles.form__container}>
                <div className={styles.form__wrapper}>
                    <h1>Создание голосования</h1>
                    <div className={styles.form}>
                        <div className="field">
                            <span className="p-float-label">
                                <InputText
                                    value={title}
                                    onChange={(el) => setTitle(el.target.value)}
                                    autoFocus
                                />

                                <label htmlFor="name">Название</label>
                            </span>
                        </div>

                        <div className="field">
                            <span className="p-float-label">
                                <InputTextarea
                                    value={description}
                                    onChange={(el) => setDescription(el.target.value)}
                                    autoFocus
                                    autoResize
                                />
                                <label htmlFor="name">Описание</label>
                            </span>
                        </div>

                        <div className="field">
                            <span className="p-float-label">
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                />
                                <label htmlFor="name">{startDate ? "" : "Дата начала"}</label>
                            </span>
                        </div>

                        <div className="field">
                            <span className="p-float-label">
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                />
                                <label htmlFor="name">{endDate ? "" : "Дата завершения"}</label>
                            </span>
                        </div>

                        <div className="field">
                            <span className="p-float-label">
                                <InputText
                                    value={answer1}
                                    onChange={(el) => setAnswer1(el.target.value)}
                                    autoFocus
                                />
                                <label htmlFor="name">Вариант 1</label>
                            </span>
                        </div>

                        <div className="field">
                            <span className="p-float-label">
                                <InputText
                                    value={answer2}
                                    onChange={(el) => setAnswer2(el.target.value)}
                                    autoFocus
                                />
                                <label htmlFor="name">Вариант 2</label>
                            </span>
                        </div>

                        <div className="field">
                            <span className="p-float-label">
                                <InputText
                                    value={answer3}
                                    onChange={(el) => setAnswer3(el.target.value)}
                                    autoFocus
                                />
                                <label htmlFor="name">Вариант 3</label>
                            </span>
                        </div>

                        <div className={styles.buttons}>
                            <Button
                                className={styles.button1}
                                label="Создать"
                                onClick={createClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
