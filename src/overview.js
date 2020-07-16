import React from 'react';
import CardSmall from './card-small.js';

const cardSmall = [
    {
        icon: 'images/icon-facebook.svg',
        pageView: '1000',
        growth: 3,
        id: 1,

    },
    {
        icon: 'images/icon-instagram.svg',
        pageView: '100630',
        growth: 3,
        id: 2,

    },
    {
        icon: 'images/icon-twitter.svg',
        pageView: '10',
        growth: 3,
        id: 3,

    },
    {
        icon: 'images/icon-youtube.svg',
        pageView: '06',
        growth: 3,
        id: 4,

    },
]

const Overview = () => {
    return (
        <section className="overview">
            <div className="wrapper">
            <h2>Overview - Today</h2>
                <div className="grid">
                    {cardSmall.map( ( listSmall )=> <CardSmall key={listSmall.id} {...listSmall} /> )}
                </div>
            </div>
        </section>
    );
}

export default Overview;