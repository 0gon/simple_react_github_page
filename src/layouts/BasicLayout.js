import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FileListRenderer from 'component/FileListRenderer';

const BasicLayout = ({ children }) => {


    return (
        <>
            <div className="side-bar">
                <div className="site-header">
                    <Link to={'/'}>simple_react_github_page</Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to={'/test'}>test</Link></li>
                    </ul>
                    <FileListRenderer />
                </nav>
            </div>

            <div className="main">
                <div className="main-content-wrap">
                    <main>
                        {children}
                    </main>
                </div>
            </div>

        </>
    )
}

export default BasicLayout;