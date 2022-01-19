const quotes = [
    {
        quote: "It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you'll do things differently.",
        author: "Warren Buffett",
    },
    {
        quote: "It is possible to store the mind with a million facts and still be entirely uneducated.",
        author: "Alec Bourne",
    },
    {
        quote: "There is more to life than increasing its speed",
        author: "Mahatma Gandhi",
    },
    {
        quote: "If you want to see what children can do, you must stop giving them things.",
        author: "Norman Douglas",
    },
    {
        quote: "The Chinese use two brush strokes to write the word 'crisis.' One brush stroke stands for danger; the other for opportunity. In a crisis, be aware of the danger - but recognize the opportunity.",
        author: "John F. Kennedy",
    },
    {
        quote: "Eighty percent of success is showing up.",
        author: "Woody Allen",
    },
    {
        quote: "Reading is to the mind what exercise is to the body.",
        author: "Sir Richard Steele",
    },
    {
        quote: "Learn as much by writing as by reading.",
        author: "Lord Acton",
    },
    {
        quote: "The gratification comes in the doing, not in the results.",
        author: "James Dean",
    },

];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const quotesLen = quotes.length;

const rand = Math.floor(Math.random() * quotesLen) //quetes의 길이 사이의 난수 생성
const todaysQuote = quotes[rand];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;

