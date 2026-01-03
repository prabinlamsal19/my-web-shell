import command from '../../config.json' assert {type: 'json'};

const createAbout = () : string[] => {
  const about : string[] = [];

  const SPACE = "&nbsp;";

  const EMAIL = "Email";
  const GITHUB = "Github";
  const LINKEDIN = "Linkedin";
  
  const email = `<i class='fa-solid fa-envelope'></i> ${EMAIL}`;   
  const github = `<i class='fa-brands fa-github'></i> ${GITHUB}`;
  const linkedin = `<i class='fa-brands fa-linkedin'></i> ${LINKEDIN}`;
  let string = "";

  about.push("<br>");
  
  // Split the about greeting into sentences for multiline display
  const sentences = command.aboutGreeting.split(". ");
  sentences.forEach((sentence, index) => {
    // Re-add the period except for the last sentence (which might already have it)
    if (index < sentences.length - 1) {
      about.push(sentence + ".");
    } else {
      about.push(sentence);
    }
  });
  
  about.push("<br>");
  string += SPACE.repeat(2);
  string += email;
  string += SPACE.repeat(17 - EMAIL.length);
  string += `<a target='_blank' href='mailto:${command.social.email}'>${command.social.email}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += github;
  string += SPACE.repeat(17 - GITHUB.length);
  string += `<a target='_blank' href='https://github.com/${command.social.github}'>github/${command.social.github}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += linkedin;
  string += SPACE.repeat(17 - LINKEDIN.length);  
  string += `<a target='_blank' href='${command.social.linkedin}'>linkedin/prabinlamsal</a>`;
  about.push(string);

  about.push("<br>");
  about.push("---");
  about.push("<br>");

  const GOODREADS = "Goodreads";
  const MONKEYTYPE = "Monkeytype";
  const MYANIMELIST = "MyAnimeList";
  const INSTAGRAM = "Instagram";
  const YOUTUBE = "Youtube";

  const goodreads = `<i class='fa-brands fa-goodreads'></i> ${GOODREADS}`;
  const monkeytype = `<i class='fa-solid fa-keyboard'></i> ${MONKEYTYPE}`;
  const myanimelist = `<i class='fa-solid fa-book-open'></i> ${MYANIMELIST}`;
  const instagram = `<i class='fa-brands fa-instagram'></i> ${INSTAGRAM}`;
  const youtube = `<i class='fa-brands fa-youtube'></i> ${YOUTUBE}`;

  const addSocial = (label: string, iconHtml: string, url: string, displayLink: string) => {
    let str = "";
    str += SPACE.repeat(2);
    str += iconHtml;
    str += SPACE.repeat(17 - label.length);
    str += `<a target='_blank' href='${url}'>${displayLink}</a>`;
    about.push(str);
  };

  addSocial(GOODREADS, goodreads, command.social.goodreads, "goodreads/prabinlamsal");
  addSocial(MONKEYTYPE, monkeytype, command.social.monkeytype, "monkeytype/prabinlamsal"); 
  addSocial(MYANIMELIST, myanimelist, command.social.myanimelist, "myanimelist/_black_petal");
  addSocial(INSTAGRAM, instagram, command.social.instagram, "instagram/_prabinlamsal");
  addSocial(YOUTUBE, youtube, command.social.youtube, "youtube/@prabinlamsal5125");

  about.push("<br>");
  return about
}

export const ABOUT = createAbout();
