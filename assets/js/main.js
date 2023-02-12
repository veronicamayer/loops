/* Lev 1_1 */
console.log("----------Lev 1_1-----------");
for (let i = 1; i <= 10; i++) {
    console.log("Hello World " + i); 
}

/* Lev 1_2 */
console.log("----------Lev 1_2-----------");
let array = [];
for (let i = 0; i <= 10; i++) {
    array.push(i); 
}
console.log(array);

/* Lev 1_4 */
console.log("----------Lev 1_4-----------");
let names = ["Freddy", "Steffen", "Finn", "Julia", "Franzi", "Christian", "Sergio"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

/* Lev 1_6 */
console.log("----------Lev 1_6-----------");
let retArray = [];
for (let i = 1; i <= 100; i++) {
    retArray.push(`image_${i}.jpg`);
}
console.log(retArray); 

/* Lev 1_7 */
let i = 0;

do {
    document.querySelector('#sectionOne').innerHTML += `<p>The number is ${i}</p>`;
    i++;
} while (i <= 5);

/* Lev 1_9 */
let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung'];

document.querySelector('#wordPrint').addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector('#print').innerHTML = "";

    const input = parseInt(document.querySelector('#wordLength').value);
    
    words.filter(word => word.length === input).forEach(word => {
        console.log(word);
        document.querySelector('#print').innerHTML += `<p>${word}</p>`;
    });
});

/* Lev 2_1 */
console.log("----------Lev 2_1-----------");

function imageArray () {
    let returnArray = [];
    let fileNumber = "000";

    for (let i = 1; i <= 100; i++) {
        fileNumber = (i <= 9) ? `00${i}` : (i <= 99) ? `0${i}` : `${i}`;
        returnArray.push(`image_${fileNumber}.jpg`);
    }

    console.log(returnArray);
}

imageArray();

/* Lev 2_2 */
document.querySelector('#loopPrint').addEventListener('submit', (event) => {
    event.preventDefault();

    let loop = ["L","p"];
    const loopLength = parseInt(document.querySelector('#loopLength').value);
    
    for (let i = 0; i < loopLength; i++) {
        loop.splice(1, 0, "o");
    }

    document.querySelector('#printLoop').innerHTML = loop.join('');
});

/* Lev 3_1 */
console.log("----------Lev 3_1-----------");
let inputString = "I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by 'devil', ";

function separateString(inputString) {
    let inputArray = inputString.match(/.{1,100}/g);
    let outputArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        outputArray.push(`${inputArray[i]} - ${i + 1} of ${inputArray.length}`);
    }
    return outputArray;
}

console.log(separateString(inputString));

/* Lev 3_2 */
console.log("----------Lev 3_2-----------");
let numArr = [5, 22, 15, 100, 55]

function divideNumArr() {
    for (let i = 0; i < numArr.length; i++) {        
        let divisors = [];

        for (let a = 2; a < numArr[i]; a++) {
            if (numArr[i] % a === 0) {
            divisors.push(a);
            }
        }
        
        for (let b = 0; b <= divisors.length; b++) {
            let quotient = numArr[i] / divisors[b];
            (divisors[b] != null) ? document.querySelector('#sectionFour').innerHTML += `<p>${numArr[i]} lässt sich durch ${divisors[b]} teilen. Das Ergebnis ist ${quotient}!</p>` : "";
        }
    }
}

divideNumArr();
