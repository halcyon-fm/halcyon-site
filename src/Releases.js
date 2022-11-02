/*
 *  filename: src/Releases.js
 *  description: -
 **/

/** External imports **/
import React, {
    useState,
    useEffect,
} from 'react';

/** Project imports - JS **/
//-

/** Project imports - CSS **/
import "CSS/releases.scss";

const Releases = (props) => {
    const [releases, setReleases] = useState([]);

    useEffect(() => {
        fetch('/api/releases')
        .then((response) => response.json())
        .then((data) => {
            setReleases(data.releases)
        });
    }, []);

    console.log(releases);
    let releaseElements = [];
    for (const release of releases) {
      console.log(release);
      let divCL = "shine-contain";
      let imgCL = `release ${release.img}`;
      releaseElements.push(
        <div className='shineContain' onClick={() => { window.open(release.fan_link) } }>
          <img className='release' name={ release.name } src={release.cover} alt={release.name} />
        </div>
      )
    }

    return (
      <div className="releases-container">
        { releaseElements }
      </div>
    )
};

//class Releases extends Component {
//  constructor(props) {
//    super(props);
//    this.shineIntervals = [];
//    this.scrollListener = null;
//  }
//
//  handleReleaseRainbow(release) {
//    const r = document.getElementsByClassName(release.img)[0];
//    if (!r) { return; }
//
//    let rect = r.getBoundingClientRect();
//    let page = document.getElementById("root").getBoundingClientRect();
//    
//    let pageCenter = (-1 * page.y) + (window.innerHeight / 2);
//    let rectCenter = (rect.y) + (rect.height / 2) + (-1 * page.y);
//
//    if (pageCenter >= rectCenter - 250 && pageCenter <= rectCenter + 250) {
//        r.classList = `release ${release.img} show-rainbow`;
//    }
//    else {
//        r.classList = `release ${release.img}`;
//    }
//  }
//
//  componentDidMount() {
//    let root = document.getElementById("root");
//    root.classList = "ios";
//
//    let content = document.getElementsByClassName("content")[0];
//    content.classList = "content releases";
//                                                                 
//    let footer = document.getElementsByTagName("footer")[0];
//    footer.classList = "contact";
//
//    setInterval(() => {
//      let i = randInt(0, RELEASES.length - 1);
//      const shineContain = document.getElementsByClassName("shine-contain")[i];
//      if (shineContain) {
//        shineContain.classList = "shine-contain shine";
//          setTimeout(() => {
//            shineContain.classList = "shine-contain";
//        }, 1400);
//      }
//    }, randInt(5000, 6000));
//
//    if (isMobileDevice()) {
//      const img = document.getElementsByClassName("release")[0];
//      img.classList = "release show-rainbow";
//      this.scrollListener = window.addEventListener("scroll", () => {
//        for (const release of RELEASES) {
//          this.handleReleaseRainbow(release);
//        }
//      });
//    }
//  }
//
//  render() {
//    let releases = [];
//    for (const release of RELEASES) {
//      let divCL = "shine-contain";
//      let imgCL = `release ${release.img}`;
//      if (release.name === "???") {
//        divCL = "shine-contain unreleased";
//        imgCL = "release unreleased";
//      }
//      releases.push(
//        <div className={divCL} onClick={() => { if (release.link !== "") { window.open(release.link) } }}>
//          <img className={imgCL} src={release.path} alt={release.name} />
//        </div>
//      )
//    }
//
//    return (
//      <div className="releases-container">
//        { releases }
//      </div>
//    )
//  }
//
//  componentWillUnmount() {
//    if (this.shineInterval) {
//      clearInterval(this.shineInterval);
//    }
//    if (this.scrollListener) {
//      clearInterval(this.scrollListener);
//    }
//  }
//}

export default Releases;
