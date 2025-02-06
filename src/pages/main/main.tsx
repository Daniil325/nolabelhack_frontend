import { Main } from "@/components/main";
import { BasePage } from "../base";
import { useGetList } from "@/providers/api";


export const MainPage = () => {
    const { status, data, error, isFetching } = useGetList("vote")

    if (data) {
        console.log(data)
    }
    console.log(data)

    return <BasePage children={<Main />} />;
};
