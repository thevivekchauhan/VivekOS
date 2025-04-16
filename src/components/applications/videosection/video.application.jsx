import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';
import './video.css';

const videos = [
  {
    id: 1,
    title: "Hawa Mahal Jaipur | The 'Palace of Winds' - A Marvel of Architecture & History",
    url: "din4GA6YuVs",
    // description: "Hawa Mahal is made from pink and red sandstone, following the architectural style of Mughal architecture with Rajput influences."
  },
  {
    id: 3,
    title: "Century of Experience: Life Advice from 103-Year Grandma | Podcast Episode",
    url: "iIUV7MiJG8Q",
    // description: "Join me in this special podcast episode as I sit down with 103-year-old grandmother. She shares heart-touching stories, wisdom from the past, and her secrets to a long, happy life."
  },
  {
    id: 2,
    title: "The Spectacular Ahmedabad Kite Festival 2025: A Sky Full of Wonders",
    url: "9lMHxnQYlAE",
    // description: "Welcome to the heart of Gujarat, where the sky comes alive with color, tradition, and international flair at the Ahmedabad Kite Festival 2025."
  },
  {
    id: 4,
    title: "Science City Ahmedabad: A Fascinating Journey into Science & Technology | Exhibits, Fun & Education",
    url: "5XcrtlbZzoA",
    // description: "Science City in Ahmedabad, Gujarat, is a dynamic and interactive science museum designed to spark curiosity and inspire learning."
  },
  {
    id: 5,
    title: "England vs Australia Cricket world cup match 2023 | Highlights",
    url: "Odw3JlFwUiM",
    // description: "Watch the highlights of the thrilling England vs Australia match in the 2023 Cricket World Cup. Relive the excitement and key moments from this epic showdown."
  },
  {
    id: 6,
    title: "My farm vlog | Urban side 🏕️",
    url: "-d9S3fqWmwY",
    // description: "Join me on a relaxing farm vlog where I share my experiences and adventures in the Urban side. From scenic views to farm activities, it's a peaceful escape into nature."
  }
];

const VideoPlayer = () => {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState('');

  const openModal = (id) => {
    setVideoId(id);
    setOpen(true);
  };

  return (
    <div className="video-player-container">
      <h2 className="title">🎥 My Video Collection</h2>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card" onClick={() => openModal(video.url)}>
            <div className="thumbnail-wrapper">
              <img
                src={`https://img.youtube.com/vi/${video.url}/0.jpg`}
                alt={video.title}
                className="thumbnail"
              />
              <div className="play-button">▶</div>
            </div>
            <h3 className="video-title">{video.title}</h3>
            <p className="video-description">{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
