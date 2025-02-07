import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { VoteItem } from "@/components/main/main";
import styles from "./style.module.css";
import { useGetList } from "@/providers/api";
import { DataView } from "primereact/dataview";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

type Vote = {
    id: string;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    isActive: boolean;
};

export const VoteList = () => {
    const { data } = useGetList("vote");

    const itemTemplate = (items: Vote[]) => {
        return items.map((el) => {
            return <VoteItem title={el.title} description={el.description} />;
        });
    };

    const nav = useNavigate();

    const onClick = () => {
        nav("/vote/create");
    };

    if (data) {
        const items: Vote[] = data.data["items"];

        return (
            <>
                <Header />
                <main>
                    <div className="search"></div>
                    <div className={styles.vote_items}>
                        <DataView
                            className={styles.view}
                            value={items}
                            paginator
                            rows={3}
                            listTemplate={itemTemplate}
                        />
                        <Button
                            className={styles.button1}
                            label="Создать голосование"
                            onClick={onClick}
                        />
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main className="vote_list">
                <h1>loading...</h1>
            </main>
            <Footer />
        </>
    );
};
