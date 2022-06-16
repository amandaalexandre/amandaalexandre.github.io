import React from 'react'
import { Routes, Route } from "react-router-dom";
import Main from './components/Main';

export default function Routes() {
    

    return (
        <Routes>
            <Route path='/' element={<Main/>} />
        </Routes>
    )
}
