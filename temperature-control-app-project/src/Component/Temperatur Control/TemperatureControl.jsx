import { useState } from "react";
import "../Temperatur Control/TemperatureControl.css";

const TemperatureControl = () =>{
    const[count, setCount]  = useState(14);

    const handleIncrease = () =>{
        setCount(count + 1);
    }

    const handleDecrease = () =>{
        setCount(count - 1);
    }
    return(
        <>
            <div className="temperature-control-content">
                <div style={{backgroundColor: count >= 16 ? "orange": "blue"}} className="temperature-control-heading">
                    <h1>{`${count}°C`}</h1>
                </div>
                <div className="temperature-control-button">
                    <button onClick={handleIncrease} className="teperature-btn">+</button>
                    <button onClick={handleDecrease} className="teperature-btn">-</button>
                </div>
            </div>
        </>
    )
}
export default TemperatureControl;