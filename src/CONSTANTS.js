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
  new Release("TRINERGY - STARFALL", "29.png", "https://go.halcyon.fm/starfall"),
  new Release("TRINERGY - ROMANTIC STORY", "28.png", "https://go.halcyon.fm/romanticstory"),
  new Release("WAVEFRONT", "27.png", "https://go.halcyon.fm/wavefront"),
  new Release("VAYRE - SPECTRAMORPH", "26.png", "https://go.halcyon.fm/spectramorph"),
  new Release("ENCHANTED VOL. 1", "25.png", "https://go.halcyon.fm/enchanted"),
  new Release("AWEMINUS - SEA SHANTY", "26.jpeg", "https://go.halcyon.fm/sea_shanty"),
  new Release("QWATSON - RIDE BACK HOME", "27.jpeg", "https://go.halcyon.fm/ride_back_home"),
  new Release("OOLACILE - HOEPLE555", "28.jpeg", "https://go.halcyon.fm/hopele555"),
  new Release("CANNA - EXTRAGALACTIC", "24.png", "https://go.halcyon.fm/extragalactic"),
  new Release("CANNA - CELESTIA", "23.png", "https://go.halcyon.fm/celestia"),
  new Release("CANNA - UNBOUND", "22.png", "https://go.halcyon.fm/unbound"),
  new Release("OCTANE - HEXANE", "21.png", "https://go.halcyon.fm/hexane"),
  new Release("OCTANE - CYBER FUNK", "20.png", "https://go.halcyon.fm/cybrfnk"),
  new Release("OCTANE - NANO PRISMA", "19.png", "https://go.halcyon.fm/nanoprisma"),
  new Release("OCTANE - DIGITAL ION", "18.png", "https://go.halcyon.fm/digiion"),
  new Release("NUUSHI - FAIRYTALE", "16.png", "https://go.halcyon.fm/fairytale"),
  new Release("NUUSHI - TSUBAKI", "17.jpeg", "https://go.halcyon.fm/tsubaki"),
  new Release("VITAL SYNTH", "15.png", "https://account.vital.audio/halcyon/"),
  new Release("PHONON - EMME", "14.png", "https://go.halcyon.fm/emme"),
  new Release("KOZMOZ - DYSTOPIA", "13.jpeg", "https://go.halcyon.fm/dystpakoz"),
  new Release("OOLACILE & KOZMOZ - AUTONETIC", "12.jpeg", "https://go.halcyon.fm/autonetic"),
  new Release("AUTOMHATE - EGO STREAM", "10.png", "https://go.halcyon.fm/egostream"),
  new Release("AUTOMHATE - TONAL RIDDIM", "11.png", "https://go.halcyon.fm/tnlrdm"),
  new Release("PRCVR PT 1", "9.png", "https://go.halcyon.fm/prcvrpt1"),
  new Release("OOLACILE - CLOUD MIND", "8.png", "https://go.halcyon.fm/cloudmnd"),
  new Release("OOLACILE & AWEMINUS - MIND SCANNER", "7.jpeg", "https://go.halcyon.fm/mndscnr"),
  new Release("OOLACILE - PRCVR", "6.jpeg", "https://go.halcyon.fm/prcvr"),
  new Release("AWEMINUS - PACMAN BULLSHIT", "4.jpeg", "https://go.halcyon.fm/pacmanbs"),
  new Release("BVSSIC - ELYSIUM", "5.jpeg", "https://go.halcyon.fm/elysium"),
  new Release("HALCYON SOUND VOL 1", "3.jpeg", "https://go.halcyon.fm/hsv1"),
  new Release("VOLTRA - INSTANCE", "2.jpeg", "https://go.halcyon.fm/instance"),
  new Release("SVDDEN DEATH - UTAH", "1.jpeg", "https://go.halcyon.fm/utah"),
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
