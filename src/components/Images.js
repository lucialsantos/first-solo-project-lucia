import React, { useState } from 'react';

function Images() {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  }

  return (
    <div>
      <input type="file" onChange={handleChange} />
      {image && <img src={URL.createObjectURL(image)} alt="Uploaded Image" />}
    </div>
  );
}

export default Images;
