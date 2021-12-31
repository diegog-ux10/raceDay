let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;

const age = 19;

if (age >= 18 && registeredEarly === true) {
  raceNumber += 1000;
  console.log('Estoy aqui')
}

if (age >= 18 && registeredEarly === true) {
  console.log(`You'r race number is ${raceNumber} and you will race at 9:30 am`);
} else if (age => 18 && registeredEarly === false) {
  console.log(`You'r race number is ${raceNumber} and you will race at 11:00 am`);

}