// src/FileListReader.js
import React from 'react';
import { Link } from 'react-router-dom';
import folderStructure from "folderStructure";

const FileListRenderer = () => {


    const renderStructure = (items, parentPath = '') => {

        return (
            <ul>
                {items.map((item, index) => {
                    const { name, path, children } = item;
                    const isFile = !children;
                    const currentPath = `${parentPath}/${path}`


                    return (
                        <li key={index}>
                            {isFile ? (
                                <Link to={`/md${currentPath}`}>{name}</Link>
                            ) : (
                                <>
                                    {name}
                                    {children && renderStructure(children, currentPath)}
                                </>
                            )}
                        </li>
                    );
                })}
            </ul>
        );
    };

    return renderStructure(folderStructure);
};

export default FileListRenderer;
