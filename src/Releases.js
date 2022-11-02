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
        <>
            {
                releases.map((release) => {
                    return (
                        <div
                            className='release'
                            title={release.name}
                            onClick={() => { window.open(release.fan_link) }}
                        >
                            <img
                                name={release.name}
                                src={release.cover}
                                alt={release.name}
                            />
                        </div>
                    )
                })
            }
        </>
    )
};

export default Releases;
