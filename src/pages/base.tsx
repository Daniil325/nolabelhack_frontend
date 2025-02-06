import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import React, { PropsWithChildren } from "react";

export const BasePage: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};
