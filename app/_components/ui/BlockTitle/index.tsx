import React from 'react';

import styles from './styles.module.css'

interface BlockTitleProps {
    children: React.ReactNode
    light?: boolean
}
const BlockTitle: React.FC<BlockTitleProps> = ({ children, light = false }) => {
    return (
        <h1 className={`${styles.h1} ${light ? styles.light : ''}`}>
            {children}
        </h1>
    );
};

export default BlockTitle;