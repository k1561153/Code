// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
// This is a template for your labs and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// Please do not create a new file for each lab!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop (Lab #1, Week 3) -------------------------//

// Declare variables with values for the following:
// - the name of the horse at the stable
// - the age of the horse
// - whether the horse is inside or outside
// - the cost to board the horse monthly
// - the fee for a late payment (monthly rate + 20%)
//
// Create a variable and use it to store a message for visitors to the stable.
// Create a variable and use it to store a message that monthly payment is late, and the amount owing.
// Include the name of your horse in the message.

let horseName = "Beans";
let horseAge = 7;
let isInside = true;
let monthlyFee = 100;
let lateFee = monthlyFee * 1.2;

let visitorsMessage = "Welcome to the stable!";
let lateMessage =
    "Payment for " + horseName + " is late. Amount owing: $" + lateFee;

//------------------------- First day (Lab #2, Week 4) -------------------------//

// Using an object, add at least 3 horses to your stables.
//
// The horses should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)

// Store the horses you've just created in a "horses" variable.
// Keep your old horse info from week one for now.

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.

let horseOne = {
    name: horseName,
    nickname: "Bean",
    favouriteTreat: "Carrots",
    age: horseAge,
    monthlyRent: monthlyFee,
    isInside: true,
    colour: "Brown",
    speed: "Fast",
};

let horseTwo = {
    name: "Strawberry",
    nickname: "Straw",
    favouriteTreat: "Apples",
    age: 9,
    monthlyRent: 300,
    isInside: false,
    colour: "White",
    speed: "Moderate",
};

let horseThree = {
    name: "Charlie",
    nickname: "Char",
    favouriteTreat: "Cookies",
    age: 12312,
    monthlyRent: 400,
    isInside: true,
    colour: "Black",
    speed: "Slow",
};

let horses = [horseOne, horseTwo, horseThree];

let newHorse = {
    name: "Joe",
    nickname: "Joey",
    favouriteTreat: "Muffins",
    age: 6,
    monthlyRent: 500,
    isInside: false,
    colour: "Grey",
    speed: "Very slow",
};

horses.push(newHorse);

horseOne.isHungry = true;
horseTwo.isHungry = false;
horseThree.isHungry = true;
newHorse.isHungry = false;
