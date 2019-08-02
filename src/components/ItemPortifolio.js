import React from 'react';

const ItemPortfolio = ({ portfolio }) => {
    console.log(portfolio)
    return (
        <div className='col-sm-4'>
            <div className='thumbnail'>
                <img src={portfolio.imageUrl} alt='Paris' width='150' height='150' />
                <p><strong>{portfolio.title}</strong></p>
                <p>{portfolio.description}</p>
            </div>
        </div>
    )
}
export default ItemPortfolio;