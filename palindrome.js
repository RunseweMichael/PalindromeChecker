const input = document.getElementById('text-input');
const check = document.getElementById('check-btn');
const result = document.getElementById('result');
const facts = document.getElementById('randomFacts');

const factArray = [
    " 💡 Palindromes are ancient: The concept of palindromes dates back to ancient Greece, where they were used in poerty and wordplay",
    " 💡 Palindrome checkers are simple: A palindrome checker can be implemented using a simple algorith that compares a string with its reverse",
    " 💡 Wordplay clubs: In the 19th and 20th centuries, wordplay clubs and sociaeties were formed, where members would share and create palindromes and other forms of wordplay",
    " 💡 Sator Square: The Sator Square is a fampous ancient palindrome that reads the same way forward and backward, discovered in Roman ruins",
    " 💡Spaces, punctuations and Special characters are often ignored in Palindromes. Only alphanumeric characters are considered i.e a-z, 0-9."
]



function checkWord(){
    const word = input.value.trim();
    const reverseWord = word.split("").reverse().join("");
    regex = /[^a-zA-Z0-9]/g;
    const wordCleaned = word.replace(regex,"");
    const wordLower = wordCleaned.toLowerCase();

    const factindex = Math.floor(Math.random() * factArray.length)

    facts.textContent = factArray[factindex];

    if(word === ""){
        alert("Please input a value")
    }

    else{
        const reverse = wordLower.split("").reverse().join("");

        result.style.display = "block";

        if (wordLower === reverse){
            result.textContent = ` "${word}" is a Palindrome. "${word}" reads the same as its reverse; "${reverseWord}" `
        }

        else{
            result.textContent = ` "${word}" is not a Palindrome. The reverse of "${word}" is "${reverseWord}". It is not the same moving backwards`
        }

    }
    
};

check.addEventListener('click', checkWord)