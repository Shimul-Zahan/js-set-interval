
let startIndex = 0;
const showLetter = () => {
    if (startIndex < letter.length) {
        if (letter[startIndex] === ' ') {
            document.getElementById('annimation').innerText += `_`;
        } else {
            document.getElementById('annimation').textContent += letter[startIndex];
        }
        startIndex++;
    } else {
        // document.getElementById('annimation').innerText = '';
        clearInterval(interval);
    }
}

const sentence = 'I am a Web Developer...';
const letter = sentence.split('');
const interval = setInterval(showLetter, 1000);