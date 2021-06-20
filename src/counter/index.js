import React, { useState } from 'react';
import "./index.css"

const Counter = (props) => {

    const { maximum } = props;

    const [counterValue, setCounterValue] = useState(1);

    const incrementCounter = () => {
        if (counterValue < maximum)
            setCounterValue(counterValue + 1);
    }

    const decrementCounter = () => {
        setCounterValue(counterValue - 1);
    }

    return <div className="counter-container">
        <div className="counter-sub-division" onClick={() => decrementCounter()}>-</div>
        <input className="counter-sub-division" type="number" value={counterValue} onChange={(e) => setCounterValue(e.target.value)} />
        <div className="counter-sub-division" onClick={() => incrementCounter()}>+</div>
    </div>

}

export default Counter