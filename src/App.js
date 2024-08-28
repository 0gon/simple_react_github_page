import React, { lazy, Suspense } from 'react';
import { Routes, Route, Redirect } from "react-router-dom";

const MainPage = lazy(() => import('pages/MainPage'));
const MarpdownPage = lazy(() => import('pages/MarkdownPage'));

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/' Component={MainPage} />
                <Route path='/md/*' Component={MarpdownPage} />
            </Routes>
        </Suspense>
    );
}

export default App;
