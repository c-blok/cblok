import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

export const useRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<div>HELLO</div>}/>
            <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
    )
}
