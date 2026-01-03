const whoamiObj = {
  "message": [
    [
      "In the mirror of the universe,",
      "I pause, smile, and ask it back — who are *you* really?"
    ],
    [
      "Between late-night thoughts and bold ideas,",
      "I wander confidently through my own mystery,",
      "casually dropping the question — so, who am I today?"
    ],
    [
      "In life’s grand playlist,",
      "I’m the catchy tune wondering why everyone’s humming along,",
      "softly teasing the question — is this my chorus?"
    ],
    [
      "Like stardust with a sense of humor,",
      "I glance at the cosmos with raised eyebrows,",
      "and whisper — be honest, who am I becoming?"
    ],
    [
      "In reality’s intricate design,",
      "I’m the curious thread tugging playfully at the pattern,",
      "grinning as I ask — care to guess who I am?"
    ],
  ],
}

export const createWhoami = () : string[] => {
  const whoami : string[] = [];  
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    if (idx === whoamiObj.message[r].length - 1) {
      ele += "<span class='command'>who am I?</span>";
    }
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami
}
