import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const CartTotal = () => {
    const { getCartAmount, currency, delivery_fee } = useContext(ShopContext);
    const navigate = useNavigate();
    const cartAmount = getCartAmount();

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 lg:p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-4">
                Cart Totals
            </h2>
            <div className="space-y-4 text-lg">
                <div className="flex justify-between items-center">
                    <p className="text-gray-600">Subtotal</p>
                    <p className="font-medium text-gray-900">
                        {currency}{cartAmount}
                    </p>
                </div>
                <hr/>
                <div className="flex justify-between items-center">
                    <p className="text-gray-600">Delivery Fee</p>
                    <p className="font-medium text-gray-900">
                        {currency}{cartAmount === 0 ? 0 : delivery_fee}
                    </p>
                </div>
                <hr/>
                <div className="flex justify-between items-center font-bold text-xl">
                    <p>Total</p>
                    <p>
                        {currency}{cartAmount === 0 ? 0 : cartAmount + delivery_fee}
                    </p>
                </div>
            </div>
           
        </div>
    );
};

export default CartTotal;