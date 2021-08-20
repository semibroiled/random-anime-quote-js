const quoteButton = document.querySelector('#quote-button');
const apiurl = 'https://animechan.vercel.app/api/random';
const spinner = document.querySelector('#spinner');
const twitterButton = document.querySelector('#tweet');
quoteButton.addEventListener('click', getQuote);



async function getQuote(){
    
    console.log('quote button was clicked');

    spinner.classList.remove('hidden');
    quoteButton.disabled = true;

    try{
        const response = await fetch(apiurl);
        if (!response.ok){
            throw Error(response.statusText);
            }
        const json = await response.json();
        console.log(json);
        showQuote(json);
        tweetQuote(json);
        


    }
    catch(err){
        console.log(err);
        alert('Sorry, I failed to fetch a Random Quote');

    }
    finally {
        spinner.classList.add('hidden');
        quoteButton.disabled = false;
    }
}


function showQuote(quote){
    
    const quoteContent = document.querySelector('#anime-quote');
    const quoteAnime = document.querySelector('#quote-anime');
    const quoteChar = document.querySelector('#quote-char');
    quoteContent.textContent = '"'+quote.quote+'"';
    quoteAnime.textContent = '#'+quote.anime;
    quoteChar.textContent = '- '+ quote.character;


}

function tweetQuote(quote) {
    twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote}` );
}
getQuote();