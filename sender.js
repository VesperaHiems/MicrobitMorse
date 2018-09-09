radio.setGroup(1);
let dot = '.';
let dash = '-';
let space = ' ';
let toSend: string = "";

let morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----"]
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]


input.onButtonPressed(Button.B, () => {
    toSend += dash;
})
input.onButtonPressed(Button.A, () => {
    toSend += dot;
})
input.onButtonPressed(Button.AB, () => {
    toSend += space;
})

input.onShake(() => {
    let word = "";
    let morseChar = "";
    for (let index = 0; index < toSend.length; index++) {
        let char = toSend.charAt(index)
        if (char == " ") {
            if (morseChar.length > 0) {
                word += alphabet[morse.indexOf(morseChar)];
                morseChar = "";
            }
        } else {
            morseChar += char;
        }
    }
    radio.sendString(word);
    word = "";
    toSend = "";
})