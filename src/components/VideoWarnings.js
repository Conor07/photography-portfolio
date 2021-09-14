import React from "react";

const VideoWarnings = ({ text }) => {
  return (
    <div className="video-warning-container">
      <h2 className="video-warning-title">WARNING: ​ </h2>

      <h3 className="video-warning-text">
        <p>
          THESE VIDEOS CONTAIN FAST FLASHING IMAGES AND MAY POTENTIALLY TRIGGER
          SEIZURES AND/OR MIGRAINES FOR PHOTOSENSITIVE VIEWERS.
        </p>
        <p>VIEWER DISCRETION IS ADVISED.</p>
        <br />
        <p>THESE VIDEOS CONTAIN EXPLICIT CONTENT.</p>
        <p>PARENTAL GUIDANCE IS ADVISED.</p>
      </h3>
    </div>
  );
};

export default VideoWarnings;
