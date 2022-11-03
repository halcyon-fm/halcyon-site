const LINKS = {
  "twitter": "https://twitter.com/HalcyonLV",
  "facebook": "https://facebook.com/LvHalcyon",
  "soundcloud": "https://soundcloud.com/halcyonlv",
  "instagram": "https://instagram.com/halcyonlv",
}

function Release(name, path, link) {
  this.name = name;
  this.path = "r/" + path;
  this.link = link;
  this.img = path;
}

const RELEASES = [
  new Release("HALCYON SOUND VOL 2", "_4.png", "https://go.halcyon.fm/halsound2"),
  new Release("ENDURANCE", "_3.png", "https://go.halcyon.fm/endurance"),
  new Release("THE COMEDOWN", "_2.png", "https://go.halcyon.fm/thecmdwn"),
  new Release("PERCEIVER PT 2", "_1.png", "https://go.halcyon.fm/realitysim"),
]

const ABOUT = "Halcyon is an electronic music house spearheaded by DJ/Producer Oolacile focused around, but not limited to, the emerging genre Future Riddim. Being lead by an artist, Halcyon approaches it's releases with the artists in mind as the number one priority. Halcyon aims to give musicians 100% creative direction over their vision and concepts while providing them with the tools they need to do so. We've curated a passionate team of exemplary visual artists who are eager to bring our musicians ideas to life. We believe artists deserve much more than the current industry standard offers them, therefore we offer the highest artist royalty in the world of bass music to our knowledge. We are excited to expose audiences around the globe to innovative new artists and cutting edge sounds going into 2021 and beyond.";

export { ABOUT, LINKS, RELEASES };
