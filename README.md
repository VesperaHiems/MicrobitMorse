# Microbit Morse

The files contain JS code for Micro:bits to send (sender.js) and receive (receiver.js) Morse code on Micro:bits. Due to the length limitations on sending strings via radio (you can only send about 4-7 morse characters), instead of decrypting the message at the receiver's end, the message is already decrypted on the sender's Micro:bit upon sending.

To use the programs, simply copy paste the code into Micro:bit editor, download the program and copy it onto the Micro:bits.

# SENDING

A-button: . (short)
B-button: - (long)
A+B: space (separates characters)
shake: send the word

# RECEIVING

The Micro:bit receives the sent message automatically right after the sender shakes their Micro:bit.

A-button: see the latest message again
B-button: clear screen (if message was only one letter long, it remains on the screen until another message arrives, or the screen is cleared)
