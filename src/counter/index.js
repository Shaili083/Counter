import React, { useState, useEffect, useRef } from 'react';
import "./index.css"
import Axios from "axios";

var timer;
const Counter = (props) => {

    const { maximum } = props;
    const [counterValue, setCounterValue] = useState(1);
    const calledDebounce = useRef(false);

    useEffect(() => {
       
        fetchCount();
    }, [])

    useEffect(() => {
        if(calledDebounce.current)
        debounce(() => updateTheCounter())()
    }, [counterValue])

    const fetchCount = async () => {
        const responseFetched = await Axios.get('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter.json')
        if (responseFetched.data > 0) {
            setCounterValue(responseFetched.data);
            calledDebounce.current =false;
        } else {
            setCounterValue(1);
        }
    }


    function debounce(updateCounter, timeout = 1000) {

        return function () {
            clearTimeout(timer)
            timer = setTimeout(() => updateCounter(), timeout)
        }


    }

    const incrementCounter = () => {
        calledDebounce.current =true;
        if (counterValue < maximum)
            setCounterValue(counterValue + 1);
        // debounce(()=>updateTheCounter())()

    }

    const updateTheCounter = async () => {

        const resp = await Axios.put('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json', { counter: counterValue })
        console.log('test', resp);
    }

    const decrementCounter = () => {
        calledDebounce.current =true;
        setCounterValue(counterValue - 1);
        // debounce(()=>updateTheCounter())()
    }

    return <div className="counter-container">
        <div className="counter-sub-division" onClick={() => decrementCounter()}>-</div>
        <input className="counter-sub-division" type="number" value={counterValue} onChange={(e) => { calledDebounce.current =true;setCounterValue(parseInt(e.target.value)) }} />
        <div className="counter-sub-division" onClick={() => incrementCounter()}>+</div>
    </div>

}

export default Counter