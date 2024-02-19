const endpoint = 'https://api.quotable.io/random';

const fetchQuote = async () => {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        return data.content + " - " + data.author;
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
    }
};

const displayQuote = async () => {
    const quote = await fetchQuote();
    const quoteText = document.getElementById('quote-text');
    quoteText.textContent = '';
    let index = 0;
    const intervalId = setInterval(() => {
        if (index < quote.length) {
            quoteText.textContent += quote.charAt(index);
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, 50);
};


document.getElementById('new-quote-button').addEventListener('click', displayQuote);


