// import React, { useState } from 'react';

// const Images = () => {
//   const [images, setImages] = useState([]); // empty array to store images
//   const [imageUrl, setImageUrl] = useState(''); //  empty string to store the input field value

//   // Function to add an image URL to the images array
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent the form from submitting
//     setImages([...images, imageUrl]); // Spread operator to copy the existing images and add the new image URL
//     setImageUrl(''); // Reset the input field value
//   };

//   // Function to render the images
//   const renderImages = () => {
//     return images.map((image, index) => {
//       return <img key={index} src={image} alt="Vision Board" />;
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//       <label>
//           Vision Board
//       </label>
//         <input
//           type="text"
//           value={imageUrl}
//           onChange={(event) => setImageUrl(event.target.value)}
//         />
//         <button type="submit">Add Image</button>
//       </form>
//       {renderImages()}
//     </div>
//   );
// };

// export default Images;




