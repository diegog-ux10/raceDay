let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

const age = 19;

if (age >= 18 && registeredEarly === true) {
  raceNumber += 1000;
};

if (age >= 18 && registeredEarly === true) {
  console.log (`You'r race number is ${raceNumber} and you will race at 9:30 am`);
} else if (age >= 18 && registeredEarly === false) {
  console.log (`You'r race number is ${raceNumber} and you will race at 11:00 am`);
  } else if (age < 18) {
    console.log (`You'r race number is ${raceNumber} and you will race at 12:30 pm`);
  }
