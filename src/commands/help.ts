const helpObj = {
  "commands": [
    [
    "'about'",
    "About me.",
    ],
    [
      "'configs'",
      "Don't just view. Highly recommended to use"
    ],
    [
      "'whoami'",
      "Wait a minute, who are you ?"
    ],
    ["'sudo'",
      "???"
    ],
    [
      "'repo'",
      "View my Github Repositories."
    ],
    [
      "'cv'",
      "Download my CV"
    ],
    ["'neofetch'",
      "i use arch btw."
    ],
    [
      "'clear'",
      "Clear the terminal."
    ],
    [
      "'grateful'",
      "Practice gratitude."
    ],
    [
      "'blogs'",
      "Visit my blogs."
    ]
  ],
}

const createHelp = () : string[] => {
  const help : string[] = []
  help.push("<br>")

  helpObj.commands.forEach((ele) => {
    const SPACE = "&nbsp;";
    let string = "";
    string += SPACE.repeat(2);
    string += "<span class='command'>";
    string += ele[0];
    string += "</span>";
    string += SPACE.repeat(17 - ele[0].length);
    string += ele[1];
    help.push(string);
  })

  help.push("<br>");
  help.push("Press <span class='keys'>[Tab]</span> for auto completion.");
  help.push("Press <span class='keys'>[Esc]</span> to clear the input line.");
  help.push("Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands.");
  help.push("<br>");
  return help
}

export const HELP = createHelp();
