import React from 'react'

function RandomQoutes() {
    const quotes = [
        "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
        "Whether you think you can or you think you can’t, you’re right. - Henry Ford",
        "The best way to predict the future is to create it. - Peter Drucker"
      ];
      const quoteIndex = Math.floor(Math.random()*quotes.length);
      const quote = quotes[quoteIndex]
  return (
    <div>{quote}</div>
  )
}

export default RandomQoutes