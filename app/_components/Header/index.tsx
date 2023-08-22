import React from 'react';

import {orbitron} from "@/fonts";

import styles from './Header.module.css'
import Image from "next/image";

import telegram from '@/public/telegram.svg'
import Link from "next/link";
import {TG_LINK} from "@/utils/constants";


const Header = () => {
    return (
        <header className={styles.container}>
            <h1
                className={styles.logo}
                style={orbitron.style}
            >
                Cloud Wave <span>looter</span>
            </h1>
            <Link href={TG_LINK} className={styles.telegramBtn}>
                <Image width={22} src={telegram} alt={'telegram'}/>
                <div>Связаться</div>
            </Link>
        </header>
    );
};

export default Header;