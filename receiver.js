let lastMessage = "";
radio.setGroup(1)

radio.onDataPacketReceived(({ receivedString }) => {
    basic.showString(receivedString);
    lastMessage = receivedString;
})

input.onButtonPressed(Button.A, () => {
    basic.showString(lastMessage);
})

input.onButtonPressed(Button.B, () => {
    basic.clearScreen();
})