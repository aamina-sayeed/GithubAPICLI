import axios from "axios";
import readline from "readline-sync";
import color from "cli-color";

let blue = color.xterm(99);
let green = color.xterm(64);
let dark_red = color.xterm(88);
let pink = color.xterm(161);
let orange = color.xterm(202);

console.clear();
let x = readline.question(blue("Enter name:"));

let data = axios.get(`https://api.github.com/users/${x}`);

data
  .then((response) => {
    let y = response.data;

    // for(let i in y){
    //     console.log(y[i])

    // }
    console.log(
      orange("----------------------Your GitHub Profile--------------------")
    );
    console.log(green(`Your name is: ${pink(y.name)}`));
    console.log(green(`Your login is: ${pink(y.login)}`));
    console.log(green(`Your bio :\n${pink(y.bio)}`));
    console.log(green(`Your public repos are: ${pink(y.public_repos)}`));
    console.log(green(`Your followers are: ${pink(y.followers)}`));
    console.log(green(`Your following count is:${pink(y.following)}`));
    if (y.twitter_username) {
      console.log(
        green(`Your twitter username is:${pink(y.twitter_username)}`)
      );
    } else {
      console.log(blue("No twitter account linked/created"));
    }
  })
  .catch((e) =>
    console.log(dark_red("Enter proper userame/check server connection"))
  );
