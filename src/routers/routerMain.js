import React from "react";
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import { Main } from "../components/main";
import Login from "../components/login";

export const RouterMain = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/main" element={<Main/>}/>
                <Route path="*" element={(
                    <>
                    <h1>Error 404 not found</h1>   
                    </>
                )}/>
            </Routes>
        </BrowserRouter>
    )
}