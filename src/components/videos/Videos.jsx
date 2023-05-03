import React, { useState, useEffect } from 'react';
import './estilos.scss'
const API =
    "https://youtube-v31.p.rapidapi.com/search?channelId=UCk-HZHl4HRFP3t-Bkr-Y4FQ&part=snippet%2Cid&order=date&maxResults=4";

const Videos = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(API, {
                    method: "GET",
                    headers: {
                        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
                        "X-RapidAPI-Key": "c68edbdba9mshc3cb6eb8038f3b2p1f444ajsna5de19fe1256",
                    },
                });
                const data = await response.json();
                setVideos(data.items);
            } catch (error) {
                console.log(error);
            }
        };
        fetchVideos();
    }, []);

    return (
        <div className='videos'>
            {videos.map((video,index) => (
                <a
                    href={`https://youtube.com/watch?v=${video.id.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-video"
                    key={index}
                >
                    <div className="group">
                        <div className='group-miniatura'>
                            <img
                                src={video.snippet.thumbnails.high.url}
                                alt={video.snippet.description}
                                className="miniatura"
                            />
                        </div>
                        <div>
                            <h3 className="text-descripcion">{video.snippet.title}</h3>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Videos;
