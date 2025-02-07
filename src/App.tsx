import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "./providers/router";
import { queryClient } from "@api";
import { PrimeReactProvider } from "primereact/api";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'react-datepicker/dist/react-datepicker.css';
import "./App.css";

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <PrimeReactProvider>
                <RouterProvider />
            </PrimeReactProvider>
        </QueryClientProvider>
    );
}

export default App;
