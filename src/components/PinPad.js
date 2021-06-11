import React, { useState, useEffect } from 'react';

const PinPad = () => {

    const [pin, setPin] = useState("");
    const [attempts, setAttempts] = useState(3);
    const [type, setType] = useState('password');
    const [locked, setLocked] = useState(0);
    const [showTime, setShowTime] = useState(false);
    const [counter, setCounter] = useState(30);

    const correctPin = '1234';

    function Count() {
        useEffect(() => {
            counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        }, []);
        
        return (
            <div className="Count">
            <h2>You can try again in: {counter}</h2>
            </div>
        );
    }

    const inputHandler = (e) => {
        setPin(e.target.value)
    };

    const clearHandler = (e) => {
        e.preventDefault();
        setPin("");
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(pin.length !== 4) {
            setLocked(1);
            setType("text");
            setPin("Your PIN shoult be 4 digits long");
            const timer = setTimeout(() => {
                setLocked(0);
                setType(type);
                setPin("")
            }, 1500)
            return () => clearTimeout(timer);
        }
        if(attempts === 1 && pin !== correctPin) {
            setType("text")
            setPin("LOCKED");
            setLocked(1);
            setAttempts((prevCount) => prevCount - 1);
            setShowTime(true);
            setCounter(30);
            const lockedTimer = setTimeout(() => {
                setLocked(0);
                setPin("")
                setAttempts(3);
                setType("password");
                setShowTime(false);
                setCounter(30);
            }, 30000);
            return () => clearTimeout(lockedTimer);
        }
     else if(pin !== correctPin && pin.length === 4) {
                setLocked(1);
                setType("text");
                setPin("ERROR");
                setAttempts((prevCount) => prevCount - 1);
                const timer = setTimeout(() => {
                    setLocked(0);
                    setType(type);
                    setPin("")
                }, 1500)
                return () => clearTimeout(timer);

        } else if(pin === correctPin) {
            setLocked(1);
            setType("text");
            setPin("OK");
            const timer = setTimeout(() => {
                setLocked(0);
                setType(type);
                setPin("")
            }, 1500)
            return () => clearTimeout(timer);
        }

    }

  

    return(
        <div className="pinPad">
            <div className="inputForm">
                <h1>Enter PIN</h1>
                <input onChange={inputHandler} 
                        type={type} 
                        value={pin}
                        disabled />
            </div>
            <div className="attempts">
                <h2>Attempts left: {attempts}</h2>
                {showTime && <Count />}
            </div>
            <div className="numRowOne">
                <button onClick={() => setPin((pin) => `${pin}1`)}
                        type="text"
                        disabled={locked}>1</button>
                <button onClick={() => setPin((pin) => `${pin}2`)}
                        type="text"
                        disabled={locked}>2</button>
                <button onClick={() => setPin((pin) => `${pin}3`)}
                        type="text"
                        disabled={locked}>3</button>
            </div>
            <div className="numRowTwo">
                <button onClick={() => setPin((pin) => `${pin}4`)}
                        type="text"
                        disabled={locked}>4</button>
                <button onClick={() => setPin((pin) => `${pin}5`)}
                        type="text"
                        disabled={locked}>5</button>
                <button onClick={() => setPin((pin) => `${pin}6`)}
                        type="text"
                        disabled={locked}>6</button>
            </div>
            <div className="numRowThree">
                <button onClick={() => setPin((pin) => `${pin}7`)}
                        type="text"
                        disabled={locked}>7</button>
                <button onClick={() => setPin((pin) => `${pin}8`)}
                        type="text"
                        disabled={locked}>8</button>
                <button onClick={() => setPin((pin) => `${pin}9`)}
                        type="text"
                        disabled={locked}>9</button>
            </div>
            <div className="numRowFour">
                <button onClick={clearHandler}
                        type="remove"
                        disabled={locked}>C</button>
                <button onClick={() => setPin((pin) => `${pin}0`)}
                        type="text"
                        disabled={locked}>0</button>
                <button onClick={submitHandler}
                        type="Submit"
                        disabled={locked}>OK</button>
            </div>
        </div>
    )
}

export default PinPad;