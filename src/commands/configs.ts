import command from '../../config.json' assert {type: 'json'};

const createConfig = () : string[] => {
  let string = "";
  const projects : string[] = [];
  const files = `${command.configs.length} File(s)`;
  const SPACE = "&nbsp;";

  projects.push("<br>")

  command.configs.forEach((ele) => {
    let link = `<a href="${ele[2]}" target="_blank">${ele[0]}</a>`
    string += SPACE.repeat(2);
    string += link;
    string += SPACE.repeat(17 - ele[0].length);
    string += ele[1];
    projects.push(string);
    string = '';
  });

  projects.push("<br>");
  projects.push(files);
  projects.push("<br>");
  return projects
}

export const CONFIGS = createConfig()
