import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";

// React.lazy를 사용하여 컴포넌트를 동적으로 임포트
const MainPage = lazy(() => import('pages/MainPage'));
const TestPage = lazy(() => import('pages/TestPage'));
const MarpdownPage = lazy(() => import('pages/MarkdownPage'));

const App = () => {
    return (
        // Suspense 컴포넌트를 사용하여 로딩 중일 때 보여줄 대체 UI를 지정
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/' Component={MainPage} />
                <Route path='/test' Component={TestPage} />
                <Route path='/md/*' Component={MarpdownPage} />
            </Routes>
        </Suspense>
    );
}

export default App;
