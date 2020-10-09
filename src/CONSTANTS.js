const LINKS = {
  "twitter": "https://twitter.com/HalcyonLV",
  "facebook": "https://facebook.com/LvHalcyon",
  "soundcloud": "https://soundcloud.com/halcyonlv",
  "instagram": "https://instagram.com/halcyonlv",
}

function Release(name, path, link) {
  this.name = name;
  this.path = "/RELEASES/" + path;
  this.link = link;
}

const RELEASES = [
  new Release("OOLACILE & AWEMINUS - MIND SCANNER", "7.jpeg", "https://go.halcyon.fm/mndscnr"),
  new Release("OOLACILE - CLOUD MIND", "8.png", "https://go.halcyon.fm/cloudmnd"),
  new Release("PRCVR PT 1", "9.png", "https://go.halcyon.fm/prcvrpt1"),
  new Release("SVDDEN DEATH - UTAH", "1.jpeg", "https://go.halcyon.fm/utah"),
  new Release("VOLTRA - INSTANCE", "2.jpeg", "https://go.halcyon.fm/instance"),
  new Release("HALCYON SOUND VOL 1", "3.jpeg", "https://go.halcyon.fm/hsv1"),
  new Release("AWEMINUS - PACMAN BULLSHIT", "4.jpeg", "https://go.halcyon.fm/pacmanbs"),
  new Release("BVSSIC - ELYSIUM", "5.jpeg", "https://go.halcyon.fm/elysium"),
  new Release("OOLACILE - PRCVR", "6.jpeg", "https://go.halcyon.fm/prcvr"),
]

const SCROLL_OFFSETS = [
  {
    "min": -1,
    "max": 262,
  },
  {
    "min": 252,
    "max": 712,
  },
  {
    "min": 702,
    "max": 1102
  },
  {
    "min": 1092,
    "max": 1542
  },
  {
    "min": 1532,
    "max": 1961
  },
  {
    "min": 1962,
    "max": 3000
  }
]

const ABOUT = "Halcyon is an electronic music house spearheaded by DJ/Producer Oolacile focused around, but not limited to, the emerging genre Future Riddim. Being lead by an artist, Halcyon approaches it's releases with the artists in mind as the number one priority. Halcyon aims to give musicians 100% creative direction over their vision and concepts while providing them with the tools they need to do so. We've curated a passionate team of exemplary visual artists who are eager to bring our musicians ideas to life. We believe artists deserve much more than the current industry standard offers them, therefore we offer the highest artist royalty in the world of bass music to our knowledge. We are excited to expose audiences around the globe to innovative new artists and cutting edge sounds going into 2021 and beyond.";

export { ABOUT, LINKS, RELEASES, SCROLL_OFFSETS };
