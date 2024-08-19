const quotes = [
    "We have the power to hold no opinion about a thing and not to let it upset our state of mind, for things have no natural power to shape our judgments. – Marcus Aurelius",
    "To bear trials with a calm mind robs misfortune of its strength and burden -Seneca",
    "The impediment to action advances action. What stands in the way becomes the way- Marcus",
    "Associate with people who are likely to improve you. - Seneca",
    "It is not death that a man should fear, but he should fear never beginning to live. — Marcus Aurelius",
    "How long are you going to wait before you demand the best for yourself — Epictetus"
];

const btn = document.getElementById("btn");
const quoteElement = document.getElementById("quote");

btn.addEventListener("click", () => {
    const randomQuote = getRandomQuote();
    quoteElement.textContent = randomQuote;
});

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}