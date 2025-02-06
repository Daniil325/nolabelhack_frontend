import { MainPage } from "@/pages/main/main";
import { RegistrationPage } from "@/pages/registration";
import { TechnologyPage } from "@/pages/technology/technology";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const RouterProvider = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={<MainPage />} />
                    <Route path="/technology" element={<TechnologyPage />} />
                    <Route path="/registration" element={<RegistrationPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
