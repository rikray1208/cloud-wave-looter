"use client"

import React, {useState} from 'react';

const Nav = () => {
    const [index, setIndex] = useState(-1);

    return (
        <ul>
            <a href="#home">Главная</a>
            <a href="#description">Функционал</a>
            <a href="#prices">Цены</a>
        </ul>
    );
};

export default Nav;