const quotes = [
  {
    quote: "Happiness is not a destination, it is a way of traveling.",
    author: "Margaret Lee Runbeck"
  },
  {
    quote: "There is no life without wounds; we can only choose what we build upon them.",
    author: "Alain de Botton"
  },
  {
    quote: "Life shrinks or expands in proportion to one’s courage.",
    author: "Anaïs Nin"
  },
  {
    quote: "Even the darkest night will end and the sun will rise.",
    author: "Victor Hugo"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote: "We are what we repeatedly do.",
    author: "Aristotle"
  },
  {
    quote: "In quietness, we come to understand ourselves more deeply.",
    author: "Hermann Hesse"
  },
  {
    quote: "While there’s life, there’s hope.",
    author: "Marcus Tullius Cicero"
  },
  {
    quote: "This moment, too, shall pass.",
    author: "Khalil Gibran"
  },
  {
    quote: "And in the end, the love you take is equal to the love you make.",
    author: "The Beatles"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;