import command from '../../config.json' assert {type: 'json'};

const createBanner = () : string[] => {
  const banner : string[] = [];
  banner.push("<br>")
  
  const colors = command.colors;
  const systemInfo = [
    `<span style="color: ${colors.prompt.user}">${command.username}</span><span style="color: ${colors.prompt.default}">@</span><span style="color: ${colors.prompt.host}">${command.hostname}</span>`,
    `-------------------`,
    `<span style="color: ${colors.prompt.host}">OS</span>: Arch Linux x86_64`,
    `<span style="color: ${colors.prompt.host}">Host</span>: WebShell Portfolio`,
    `<span style="color: ${colors.prompt.host}">Kernel</span>: 6.6.7-arch1-1`,
    `<span style="color: ${colors.prompt.host}">Uptime</span>: 1 day, 2 hours, 12 mins`,
    `<span style="color: ${colors.prompt.host}">Packages</span>: 69420 (pacman)`,
    `<span style="color: ${colors.prompt.host}">Shell</span>: zsh`,
    `<span style="color: ${colors.prompt.host}">Resolution</span>: 1920x1080`,
    `<span style="color: ${colors.prompt.host}">WM</span>: i3`,
    `<span style="color: ${colors.prompt.host}">Theme</span>: Breeze`,
    `<span style="color: ${colors.prompt.host}">Icons</span>: Papirus`,
    `<span style="color: ${colors.prompt.host}">Terminal</span>: WebShell`,
    `<span style="color: ${colors.prompt.host}">CPU</span>: AMD Ryzen 9 7950X (32) @ 4.5GHz`,
    `<span style="color: ${colors.prompt.host}">GPU</span>: NVIDIA GeForce RTX 4090`,
    `<span style="color: ${colors.prompt.host}">Memory</span>: 32GiB / 64GiB`
  ];

  command.ascii.forEach((ele, index) => {
    let bannerString = "";
    //this is for the ascii art
    for (let i = 0; i < ele.length; i++) {
      if (ele[i] === " ") {
        bannerString += "&nbsp;";
      } else {
        bannerString += ele[i];
      }
    }
    
    // Add alignment padding
    // Assuming max width of this specific ASCII is around 35-40 chars. 
    // We want to pad until a fixed column, say 50.
    // However, since we replaced spaces with &nbsp;, the 'length' of strings might vary visually vs char count? 
    // No, &nbsp; is one char width effectively in monospaced font.
    // We just need to add &nbsp; until some target length.
    
    const targetLength = 45;
    const currentLength = ele.length;
    const padding = Math.max(0, targetLength - currentLength);
    const paddingString = "&nbsp;".repeat(padding);

    let eleToPush = `<pre>${bannerString}${paddingString}`;
    
    if (systemInfo[index]) {
      eleToPush += systemInfo[index];
    }
    
    eleToPush += `</pre>`;
    banner.push(eleToPush);
  });  
  banner.push("<br>");
  banner.push("Welcome to my shell.");
  banner.push("Type <span class='command'>'about'</span> for more about me.");
  banner.push(`Type <span class='command'>'blogs'</span> to view my blogs or click <a href='${command.blogsLink}' target='_blank'>here</a>.`);
  banner.push("<br>");
  banner.push("Type <span class='command'>'help'</span> for a list of all available commands.");
  banner.push("<br>");
  return banner;
}

export const BANNER = createBanner();
