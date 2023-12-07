import React, {useState} from 'react';
import {GiHealthIncrease} from 'react-icons/gi';
import {GiHealthDecrease} from 'react-icons/gi';


function ProductQuantity() {
    const [amount, setAmount] = useState(0);

    const increase = () => setAmount(amount === 10 ? amount : amount + 1)
    const decrease = () => setAmount(amount === 0 ? 0 : amount - 1)
    return (
        <div class="">
            <GiHealthDecrease onClick={decrease} class="larger" />
            <span class = "qv">{amount}</span>
            <GiHealthIncrease onClick={increase} class="larger" />
        </div>
    );
}

export default ProductQuantity 