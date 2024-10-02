import React, { useState } from 'react';

const quotes = [
    "Philippians 4:13 - I can do all things through Christ who strengthens me.",
    "Jeremiah 29:11 - For I know the plans I have for you, declares the Lord.",
    "Psalm 23:1 - The Lord is my shepherd; I shall not want.",
    "John 3:16 - For God so loved the world that He gave His only Son.",
    "Proverbs 3:5 - Trust in the Lord with all your heart.",
    "Matthew 5:14 - You are the light of the world.",
    "Romans 8:28 - And we know that in all things God works for the good of those who love Him.",
    "Joshua 1:9 - Be strong and courageous. Do not be afraid; do not be discouraged.",
    "Isaiah 41:10 - Fear not, for I am with you.",
    "Matthew 19:26 - With God, all things are possible."
];
const backgroundColors = [
    '#ffb3ba',
    '#ffdfba',
    '#ffffba',
    '#baffc9',
    '#bae1ff',
    '#c1c1f0',
];


const buttonColors = [
    '#2f2f2f',
    '#1c1c1c',
    '#3e3e3e',
    '#4b0082',
    '#2e2b5f',
    '#2a2a2a',
];

export default function QuoteGenerator() {
    const [quoteHistory, setQuoteHistory] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [bgColor, setBgColor] = useState(backgroundColors[0]);
    const [buttonColor, setButtonColor] = useState(buttonColors[0]);

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function getRandomColor(colorArray, excludeColor) {
        let randomIndex;
        let newColor;
        do {
            randomIndex = Math.floor(Math.random() * colorArray.length);
            newColor = colorArray[randomIndex];
        } while (newColor === excludeColor);
        return newColor;
    }

    function randomQuoteChange() {
        const newQuote = getRandomQuote();
        const newBgColor = getRandomColor(backgroundColors, bgColor);
        const newButtonColor = getRandomColor(buttonColors, buttonColor);

        const newQuoteHistory = [...quoteHistory, newQuote];
        setQuoteHistory(newQuoteHistory);
        setCurrentIndex(newQuoteHistory.length - 1);

        setBgColor(newBgColor);
        setButtonColor(newButtonColor);
    }

    function showPreviousQuote() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            alert("press the genrate firstt");
        }
    }

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100vw',
        background: bgColor,
        color: '#333',
        padding: '20px',
        boxSizing: 'border-box',
        transition: 'background 0.5s',
    };

    const titleStyle = {
        marginBottom: '30px',
        fontSize: '4rem',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        color: '#fff',
    };

    const quoteDisplayStyle = {
        marginBottom: '30px',
        padding: '40px',
        fontSize: '2rem',
        textAlign: 'center',
        border: '1px solid rgba(255, 255, 255, 0.7)',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        color: '#333',
        maxWidth: '600px',
    };

    const buttonStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200px',
        height: '200px',
        background: buttonColor,
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s, background 0.5s',
        position: 'relative',
        margin: '10px'
    };

    const buttonHoverStyle = {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
    };

    const buttonTextStyle = {
        fontSize: '1.5rem',
        color: '#fff',
        fontWeight: 'bold',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)',
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Bible Quote Generator</h1>
            <div style={quoteDisplayStyle}>
                <p>{quoteHistory[currentIndex] || "Click the circle to generate a quote!"}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <button
                    style={buttonStyle}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = buttonHoverStyle.transform;
                        e.currentTarget.style.boxShadow = buttonHoverStyle.boxShadow;
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                    onClick={randomQuoteChange}
                >
                    <span style={buttonTextStyle}>Generate Random</span>
                </button>
                <button
                    style={buttonStyle}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = buttonHoverStyle.transform;
                        e.currentTarget.style.boxShadow = buttonHoverStyle.boxShadow;
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                    onClick={showPreviousQuote}
                >
                    <span style={buttonTextStyle}>Previous Quote</span>
                </button>
            </div>
        </div>
    );
}
