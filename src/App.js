import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import { useRoutes } from "./routes";

function App() {
    const routes = useRoutes();
    return (
        <div>
            <BrowserRouter>
                {routes}
            </BrowserRouter>
        </div>
    );
}

export default App;
