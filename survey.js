const readline = require('readline');

const profile = {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  profile.name = answer;
  rl.question("What's an activity you like doing? ", (answer2) => {
    profile.activity = answer2;
    rl.question("What do you listen to while doing that? ", (answer) => {
      profile.music = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        profile.meal = answer;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          profile.food = answer;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            profile.sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              profile.superpower = answer;
              
              rl.close();
              console.log(`My name is ${profile.name} and I like ${profile.activity} to ${profile.music}. After some ${profile.food} for ${profile.meal}, I dabble in a bit of ${profile.sport} before saving the world with my ${profile.superpower}. Nice to meet you.`);
            });
          });
        });
      });
    });
    
    
  });
  
});


