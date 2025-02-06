import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { VoteItem } from "@/components/main/main";
import styles from "./style.module.css";
import { Paginator } from "primereact/paginator";
import { useState } from "react";


export const VoteList = () => {
    //const { status, data, error, isFetching } = useGetList("vote");

    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    return (
        <>
            <Header />
            <main className="vote_list">
                <div className="search">

                </div>
                <div className={styles.vote_items}>
                    <VoteItem />
                    <VoteItem />
                    <VoteItem />
                </div>

                <div className={styles.pagination}>
                    <Paginator
                        first={first}
                        rows={rows}
                        totalRecords={120} 
                        onPageChange={onPageChange}
                    />
                </div>

            </main>
            <Footer />
        </>
    )
}