import React from 'react';
import { Link } from 'react-router-dom';
import BasicNav from 'component/BasicNav';

const BasicLayout = ({ children }) => {


    return (
        <>
            <div className="side-bar">
                
                <div className="site-header">
                    <Link to={'/'}>simple_react_github_page</Link>
                </div>

                <BasicNav />
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