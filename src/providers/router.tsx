import { MainPage } from "@/pages/main/main";
import { RegistrationPage } from "@/pages/registration";
import { TechnologyPage } from "@/pages/technology/technology";
import { CreateVote, VoteList } from "@/pages/vote";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const RouterProvider = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={<MainPage />} />
                    <Route path="/technology" element={<TechnologyPage />} />
                    <Route path="/registration" element={<RegistrationPage />} />
                    <Route path="/votelist" element={<VoteList />} />
                    <Route path="/vote/create" element={<CreateVote />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
