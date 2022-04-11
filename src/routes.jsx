import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, ServicesPage, ForHomePage, ForFlatPage, ProjectsPage, ContactsPagePage, NotWorkingPage } from "./pages"

import logo from "./assets/images/logoForMedia.png"

export const useRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={ <NotWorkingPage/> }/>
            {/*<Route path="/services" element={ <ServicesPage/> }/>*/}
            {/*<Route path="/forhome" element={ <ForHomePage/> }/>*/}
            {/*<Route path="/forflat" element={ <ForFlatPage/> }/>*/}
            {/*<Route path="/projects" element={ <ProjectsPage/> }/>*/}
            {/*<Route path="/contacts" element={ <ContactsPagePage/> }/>*/}
            {/*<Route path="/media/logo" element={<img src={logo} alt="error"/> }/>*/}
            <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
    )
}
