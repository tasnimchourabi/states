import React from 'react';

const SarRating = ({ rating }) => {
    function stars(rating) {
        let star = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                star.push(<span key={i} style={{ color: 'gold', fontSize: '20px' }}>★</span>);
            } else {
                star.push(<span key={i} style={{ color: 'black', fontSize: '20px' }}>★</span>);
            }
        }
        return star;
    }

    return <div>{stars(rating)}</div>;
};

export default SarRating;

