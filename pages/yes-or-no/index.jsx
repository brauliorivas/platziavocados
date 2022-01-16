import React, { useState, useEffect } from "react";
import Link from 'next/link';

const index = () => {
    const [result, setResult] = useState('');
    const [answer, setAnswer] = useState(null);
    const [button, setButton] = useState(null);
    const [text, setText] = useState(null);
    const [loader, setLoader] = useState(null);
    const green = '#21ba45';
    const grey = '#cacbcd'

    useEffect(() => {
        answer = document.getElementById('result');
        button = document.getElementById('try-again');
        text = document.getElementById('text');
        loader = document.getElementById('loader');
        setAnswer(answer);
        setButton(button);
        setText(text);
        setLoader(loader);

        generateRand();
    }, [])

    const generateRand = () => {
        const random = Math.random();
        answer.style.color = green;
        button.style.backgroundColor = green;
        text.style.display = 'block';
        loader.style.display = 'none';

        if (random > 0.5) {
            setResult('YES');
        } else {
            setResult('NO');
        }
    }

    const animation = () => {
        answer.style.color = grey;
        button.style.backgroundColor = grey;
        text.style.display = 'none';
        loader.style.display = 'block';

        setTimeout(() => {
            generateRand();
        }, 250);
    }


    return (
        <div className="container">
            <h1 id="result" className="result">{result}</h1>
            <button id="try-again" className="btn-try-again" type="button" onClick={animation}>
                <div className="loader" id="loader"></div>
                <p id="text">Intentar de nuevo</p>
            </button>
            <Link href="/">
                <a className="header-link">
                    <button className="btn-home" type="button">
                        <p>Volver al inicio</p>
                    </button>
                </a>
            </Link>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-family: Lato,Helvetica Neue,Arial,Helvetica,sans-serif;
                }
                .result {
                    font-size: 9.8rem;
                    margin: 0;
                    margin-top: 25px;
                    text-align: center;
                }
                .btn-try-again {
                    width: 50%;
                    max-width: 175px;
                    margin-bottom: 1rem;
                    box-shadow: inset 0 0 0 0 rgb(34 36 38 / 15%);
                    color: white;
                    border: none;
                    font-family: Lato,Helvetica Neue,Arial,Helvetica,sans-serif;
                    font-weight: bolder;
                    font-size: 1.4rem;
                    border-radius: 3px;
                }
                .header-link {
                    width: 50%;
                    max-width: 175px;
                }
                .btn-home {
                    width: 100%;
                    box-shadow: inset 0 0 0 0 rgb(34 36 38 / 15%);
                    color: black;
                    border: 1px solid black;
                    background-color: white;
                    height: 45px;
                    font-family: Lato,Helvetica Neue,Arial,Helvetica,sans-serif;
                }

                .loader {
                    border: 5px solid #f3f3f3; /* Light grey */
                    border-top: 5px solid #3498db; /* Blue */
                    border-radius: 50%;
                    width: 25px;
                    height: 25px;
                    animation: spin 2s linear infinite;
                    display: none;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 10px;
                    margin-bottom: 10px;
                }
                
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
            `}
            </style>
        </div>
    );
}

export default index;