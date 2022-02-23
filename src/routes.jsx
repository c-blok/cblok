import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, ServicesPage, ForHomePage, ForFlatPage, ProjectsPage, ContactsPagePage } from "./pages"

export const useRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={ <HomePage/> }/>
            <Route path="/services" element={ <ServicesPage/> }/>
            <Route path="/forhome" element={ <ForHomePage/> }/>
            <Route path="/forflat" element={ <ForFlatPage/> }/>
            <Route path="/projects" element={ <ProjectsPage/> }/>
            <Route path="/contacts" element={ <ContactsPagePage/> }/>
            <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
    )
}
