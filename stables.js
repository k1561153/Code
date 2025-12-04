// Welcome!
//                _
//            ,.-" "-.,
//           /   ===   \
//          /  =======  \
//       __|  (o)   (0)  |__
//      / _|    .---.    |_ \
//     | /.----/ O O \----.\ |
//      \/     |     |     \/
//      |                   |
//      |                   |
//      |                   |
//      _\   -.,_____,.-   /_
//  ,.-"  "-.,_________,.-"  "-.,
// /          |       |          \
//|           l.     .l           |
//|            |     |            |
//l.           |     |           .l
// |           l.   .l           | \,
// l.           |   |           .l   \,
//  |           |   |           |      \,
//  l.          |   |          .l        |
//   |          |   |          |         |
//   |          |---|          |         |
//   |          |   |          |         |
//   /"-.,__,.-"\   /"-.,__,.-"\"-.,_,.-"\
//  |            \ /            |         |
//  |             |             |         |
//   \__|__|__|__/ \__|__|__|__/ \_|__|__/
//
// This is a template for the final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// You can copy and paste this into your stables.js file, and then use it to guide you.
// Please do not create a new file!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Setting up shop -------------------------//

let horses = [];
let welcomeMessage = "Welcome to Stable Stables";
let lateFee = 50;
let availableStalls = 10;

//------------------------- First day -------------------------//

function Horse(
    name,
    nickname,
    favoriteTreat,
    age,
    rent,
    isInside,
    color,
    personality
) {
    this.name = name;
    this.nickname = nickname;
    this.favoriteTreat = favoriteTreat;
    this.age = age;
    this.monthlyRent = rent;
    this.isInside = isInside;
    this.color = color;
    this.personality = personality;
    this.isHungry = false;

    this.introduce = function () {
        console.log(
            `I'm ${this.name}, but my nickname is ${this.nickname}. I'm ${this.age} years old and I like ${this.favoriteTreat}.`
        );
    };

    this.uniqueAction = function () {
        console.log(
            `${this.nickname} is ${this.color} and is ${this.personality}.`
        );
    };
}

let horse1 = new Horse(
    "Johnny",
    "John",
    "apples",
    6,
    300,
    true,
    "brown",
    "aggressive"
);
let horse2 = new Horse(
    "Bobby",
    "Bob",
    "carrots",
    7,
    350,
    false,
    "black",
    "shy"
);
let horse3 = new Horse(
    "Joey",
    "Joe",
    "muffins",
    8,
    400,
    true,
    "grey",
    "playful"
);

horses.push(horse1, horse2, horse3);

let newHorse = {
    name: "Lebron",
    nickname: "Bron",
    favoriteTreat: "cookies",
    age: 9,
    monthlyRent: 450,
    isInside: false,
    color: "white",
    personality: "calm",
    isHungry: false,
    introduce() {
        console.log(
            `I'm ${this.name}, but my nickname is ${this.nickname}. I like ${this.favoriteTreat}!`
        );
    },
    splash() {
        console.log(`${this.nickname} likes to splash in puddles.`);
    },
};

horses.push(newHorse);

horses.forEach((horse) => (horse.isHungry = true));

//------------------------- Stable roster -------------------------//

/*
{
  name: "Johnny",
  nickname: "John",
  favoriteTreat: "apples",
  age: 6,
  monthlyRent: 300,
  isInside: true,
  color: "brown",
  personality: "aggressive",
  isHungry: true,
  introduce: function(){...},
  uniqueAction: function(){...}
}
*/

//---------------------- Growing business ----------------------//

availableStalls = availableStalls - horses.length;

if (availableStalls < 2) {
    console.log("We need to build more stalls");
} else {
    console.log(`We have ${availableStalls} available!`);
}

function calculateLateRent(rent) {
    console.log(rent + lateFee);
}

calculateLateRent(horse1.monthlyRent);

let treatToCheck = "carrots";

for (let horse of horses) {
    if (horse.favoriteTreat === treatToCheck) {
        console.log(`${horse.nickname} likes ${treatToCheck}!`);
        break;
    } else {
        console.log(
            `${horse.nickname} does not like ${treatToCheck}. Checking next horse...`
        );
    }
}

function getNickname(horse) {
    return horse.nickname;
}

console.log(getNickname(horse2));

//------------------------- Day to day operations -------------------------//

function checkPersonality(horse) {
    if (horse.personality === "shy") {
        console.log(`${horse.nickname} is shy.`);
    } else {
        console.log(`${horse.nickname} is not shy.`);
    }
}

checkPersonality(horse2);

function moveAllOutside() {
    horses.forEach((horse) => {
        horse.isInside = false;
        console.log(
            `${horse.nickname} has been moved outside to spend time in the sun.`
        );
    });
}

moveAllOutside();

horses.forEach((horse) => {
    horse.toggleLocation = function () {
        this.isInside = !this.isInside;
    };
});

function feedHorses() {
    horses.forEach((horse) => {
        if (!horse.isInside) {
            console.log(
                `${horse.nickname} is outside. Calling them in to eat.`
            );
            horse.isInside = true;
        }
        console.log(`${horse.nickname} eats ${horse.favoriteTreat}!`);
        horse.isHungry = false;
    });
}

feedHorses();

function eveningMoveOutside(isDark) {
    horses.forEach((horse) => {
        if (isDark && !horse.isInside) {
            console.log(
                `${horse.nickname} is being brought inside as it is getting dark.`
            );
            horse.isInside = true;
        } else if (!isDark) {
            horse.isInside = false;
            console.log(`${horse.nickname} is heading outside for fresh air.`);
        }
    });
}

eveningMoveOutside(true);

//------------------------- Bonus -------------------------//

// Replace the ascii art at the top of the file with art representing your stable.
