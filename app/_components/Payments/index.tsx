import React from 'react';
import {BlockTitle} from "@/app/_components/ui";

import styles from './styles.module.css'

const list1 = [
    {id: 1, value: 'криптовалюта'},
    {id: 3, value: 'банковская карта'},
    {id: 4, value: 'webmoney'},
    {id: 5, value: 'advcash'},
]

const list2 = [
    {id: 6, value: 'ключи tf2'},
    {id: 7, value: 'qiwi'},
    {id: 8, value: 'payeer'},
    {id: 9, value: 'boosty'},
    {id: 10, value: 'lolz'},
]

const Payments = () => {
    return (
        <section className={styles.container}>
            <BlockTitle light={true}>Способы оплаты</BlockTitle>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    {
                        list1.map(el =>
                            <li key={el.id} className={styles.item}>{el.value}</li>
                        )
                    }
                </ul>
                <ul className={styles.list}>
                    {
                        list2.map(el =>
                            <li key={el.id} className={styles.item}>{el.value}</li>
                        )
                    }
                </ul>
            </div>
        </section>
    );
};

export default Payments;