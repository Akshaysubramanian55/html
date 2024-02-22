import React, { useState,useContext } from 'react';
import './Calculator.css'


function Calculator() {
    const [expression, setExpression] = useState('');

    const handleButtonClick = (value) => {
        setExpression(prevExpression => prevExpression + value);
    };

    const handleClearButtonClick = () => {
        setExpression('');
    };

    const handleCalculate = () => {
        try {
            // Use eval to calculate the expression
            const result = eval(expression);
            setExpression(result.toString());
        } catch (error) {
            // Handle errors, such as division by zero
            setExpression('Error');
        }
    };

    const switchToLightMode = () => {
        setTheme('light');
      };
    
      const switchToDarkMode = () => {
        setTheme('dark');
      };
    

    return (
        <div className="calculator">




            <table>
                <tr>
                    <td colSpan={3}>
                        <input type="text" value={expression} readOnly />
                    </td>
                    <td>
                        <button onClick={handleClearButtonClick}>C</button>
                    </td>

                </tr>

                <tr>
                    <td> <button onClick={() => handleButtonClick('1')}>1</button></td>
                    <td><button onClick={() => handleButtonClick('2')}>2</button></td>
                    <td> <button onClick={() => handleButtonClick('3')}>3</button></td>
                    <td><button onClick={() => handleButtonClick('+')}>+</button></td>

                </tr>

                <tr>
                    <td> <button onClick={() => handleButtonClick('4')}>4</button></td>
                    <td><button onClick={() => handleButtonClick('5')}>5</button></td>
                    <td><button onClick={() => handleButtonClick('6')}>6</button></td>
                    <td> <button onClick={() => handleButtonClick('-')}>-</button></td>

                </tr>

                <tr>
                    <td><button onClick={() => handleButtonClick('7')}>7</button></td>

                    <td><button onClick={() => handleButtonClick('8')}>8</button></td>
                    <td> <button onClick={() => handleButtonClick('9')}>9</button></td>
                    <td> <button onClick={() => handleButtonClick('*')}>*</button></td>

                </tr>

                <tr>
                    <td><button onClick={() => handleButtonClick('0')}>0</button></td>
                    <td> <button onClick={() => handleButtonClick('.')}>.</button></td>
                    <td> <button onClick={() => handleButtonClick('/')}>/</button></td>
                    <td><button onClick={handleCalculate}>=</button></td>

                </tr>

            </table>


            <div>
            <button onClick={switchToLightMode}>Switch to Light Mode</button>
        <button onClick={switchToDarkMode}>Switch to Dark Mode</button>

            </div>


        </div>

    );
}

export default Calculator;
