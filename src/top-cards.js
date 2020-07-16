import React from 'react';
import Card from './card.js';

const cardListData = [
    {
        userName: 'chessito',
        followers: 30,
        id: 1,
        todayfollowers: 30,
        icon: 'images/icon-facebook.svg',
        name: 'facebook',
    },
    {
        userName: 'Thay',
        followers: 4000,
        id: 2,
        todayfollowers: 30,
        icon: 'images/icon-instagram.svg',
        name: 'instagram',
    },
    {
        userName: 'Erk',
        followers: 500, 
        id: 3,
        todayfollowers: 30,
        icon: 'images/icon-twitter.svg',
        name: 'twitter',
    },
    {
        userName: 'gatitos',
        followers: 2,
        id: 4,
        todayfollowers: 30,
        icon: 'images/icon-youtube.svg',
        name: 'youtube',
    },
]

const TopCards = () => {
    return(
        <section className="top-cards">
            <div className="wrapper">
                <div className="grid">
                    {
                        cardListData.map(( cardData )=> <Card key={ cardData.id } { ...cardData } />)
                    }
                </div>
            </div>
        </section>
    );
}

export default TopCards;