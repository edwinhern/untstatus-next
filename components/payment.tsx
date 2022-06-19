import React from 'react';
import { checkout } from './checkout';


const Payment: React.FC = () => {
    return (
        <div className="bg-white text-black text-3xl text-center">
            <button onClick={( () => {
                checkout({
                    lineItems: [
                        {
                            price: "price_1KzUdWL8iUJmsyzfqKM9UIhK",
                            quantity: 1
                        }
                    ]
                })
            })}>
                Donate
            </button>
            {/* <a href="https://buy.stripe.com/test_4gw7tt6Hn4ISeyY6oo">BUy</a> */}
        </div>
        
    )
}

export default Payment;