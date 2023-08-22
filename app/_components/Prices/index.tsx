import React from 'react';
import {BlockTitle, Card} from "@/app/_components/ui";

import styles from './styles.module.css'

import price1 from '@/public/price1.png'
import price2 from '@/public/price2.png'
import Image from "next/image";

import { orbitron } from '@/fonts'

const items = [
    {key: 1, title: 'Подписка 1 месяц', value: '5.99$'},
    {key: 2, title: 'Подписка 6 месяц', value: '19.99$'},
    {key: 3, title: 'Подписка 1 год', value: '24.99$'},
    {key: 4, title: 'Подписка LT', value: '49.99$'},
]

const Prices = () => {
    return (
        <section className={styles.container}>
            <BlockTitle>Цены</BlockTitle>
            <Image className={styles.price1} src={price1} alt={'price'} quality={100}/>
            <Image className={styles.price2} src={price2} alt={'price'} quality={100}/>
            <ul className={styles.list}>
                {
                    items.map((item) =>
                        <Card key={item.key}>
                            <li className={styles.item}>
                                <div className={styles.itemClaudWave}>
                                    <p style={orbitron.style}>CloudWave</p>
                                    <p style={orbitron.style}>looter</p>
                                </div>
                                <p>{item.title}</p>
                                <span>{item.value}</span>
                            </li>
                        </Card>
                    )
                }
            </ul>
        </section>
    );
};

export default Prices;