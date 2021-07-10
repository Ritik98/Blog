import React, { useState } from "react";
import { render } from "react-dom";
import './ReactFirebaseUpload.css';

import { storage } from '../../Firebase/index';

const ReactFirebaseFileUpload = (props) => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
            props.onAdd(url);
          });
          
      }
    );
  };

  console.log("image: ", image);

  return (
    <div >
      <progress value={progress}  max="100" />
      <br />
      <br />
      <input type="file" className = "button" onChange={handleChange} />
      <button onClick={handleUpload} className = "button">Upload</button>
      <br />
      {url}
      <br />
      <img src={url || "http://via.placeholder.com/200"} alt="firebase-image"  className = "center1"/>
    </div>
  );
};

export default ReactFirebaseFileUpload;