import React from 'react';
import Image from 'next/image';
import styles from './Item.module.css';

const Item = (item: any) => {
    const aguacate = item.item;

    return (
        <article className="item-aguacate">
            <Image className={styles.image} src={aguacate.image} alt={aguacate.title} width={288} height={288} />
            <h2 className="item-aguacate__name">{aguacate.name}</h2>
            <p className="item-aguacate__price">{aguacate.price}</p>
            <style jsx>{`
                .item-aguacate {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-family: Lato,Helvetica Neue,Arial,Helvetica,sans-serif;
                    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
                    width: 288px;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 15px;
                    margin-bottom: 15px;
                }
                .item-aguacate__name {
                    font-size: 2rem;
                    text-align: left;
                    margin-right: auto;
                    padding-left: 1rem;
                    margin-top: 10px;
                    margin-bottom: 0;
                    font-weight: 700;
                }
                .item-aguacate__price {
                    color: dimgrey;
                    font-size: 1.6rem;
                    margin-top: 5px;
                    margin-right: auto;
                    padding-left: 1rem;
                }                
            `}</style>
        </article>
    );
}

export default Item;