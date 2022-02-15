class Wordle {


    constructor(word) {
        this.word = word.toLowerCase();
        //this.wordArray = this.word.split('');
        this.counter = 0;
    }

    guess(str) {
        if (this.counter < 5) {
            let str_lower = str.toLowerCase();
            let guessWordArray = str_lower.split('');
            guessWordArray.forEach((element, i) => {
                if (this.word[i] === element) {
                    console.log(`${element} is in the right place!`)
                } else if (this.word.includes(element)) {
                    console.log(`${element} is in the word but in the wrong place.`);
                } else {
                    console.log(`${element} is not in the word.`)
                }

            })

        } else {
            console.log('You have ran out of guesses!')
        }

        this.counter++;
    }


}



let wordleTest = new Wordle("Birds");

wordleTest.guess("fhgjk");
wordleTest.guess("fhgjk");
wordleTest.guess("fhgjk");
wordleTest.guess("fhgjk");
wordleTest.guess("fhgjk");
wordleTest.guess("fhgjk");


