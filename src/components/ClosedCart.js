import React from "react";
import { connect } from "react-redux";
import { toggle } from '../store/actions';

function ClosedCart(props) {

    function handdleClick() {
        props.dispatch(toggle());
    }


    return (
        <div className='close-cart'>
            <span onClick={() => handdleClick()} className='open-btn'>
                <div className='cart-icon'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        className='icon'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                        />
                    </svg>
                    <span className='item-count'>4</span>
                </div>
            </span>
        </div>
    );
}


export default connect(() => {
    return {

    }
})(ClosedCart);