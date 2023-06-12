const names = ["Ada", "Brendan", "Ali"];
const greeting = "birthday";

function writeCards(names, greeting) {
    const messages = [];
  
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      const message = `Thank you, ${name}, for the wonderful ${greeting} gift!`;
      messages.push(message);
    }
  
    return messages;
  }
  
 
const birthdayMessages = writeCards(names, greeting);

console.log(birthdayMessages);


function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  countDown(10)