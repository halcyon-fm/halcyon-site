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
import 'CSS/releases.scss';

const Release = (props) => {
    const [loaded, setLoaded] = useState(0);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setLoaded(1);
        };
        img.src = props.release.cover;
    });

    return (
        <div
            className='release'
            title={props.release.name}
            onClick={() => { window.open(props.release.fan_link) }}
            key={props.release.name.replace(' ', '-').toLowerCase()}
        >
            <div className={`placeholder ${loaded ? 'fade-out' : ''}`}/>
            <img
                className={`invisible ${loaded ? 'fade-in' : ''}`}
                name={props.release.name}
                src={props.release.cover}
                alt={props.release.name}
            />
        </div>
    )
};

const Releases = (props) => {
    const [releases, setReleases] = useState([]);

    useEffect(() => {
        try {
            fetch('/api/releases')
            .then((response) => response.json())
            .then((data) => {
                setReleases(data.releases.reverse())
            });
        }
        catch (error) {
            console.log('Error: Failed to fetch discography');
            console.log(error);
        }
    }, []);

    return (
        <div className={releases.length ? 'fade-in' : 'invisible'}>
            <div className='float-container'>
                {
                    releases.map((release) => <Release release={release}/>)
                }
            </div>
        </div>
    )
};

export default Releases;
