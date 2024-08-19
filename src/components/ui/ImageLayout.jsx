// import React from "react";

// const ImageLayout = ({ images }) => {
//   const getGridClasses = () => {
//     switch (images.length) {
//       case 2:
//         return "grid grid-cols-2 gap-4";
//       case 3:
//         return "grid grid-cols-3 grid-row-2 gap-4";
//       case 5:
//         return "grid grid-cols-3  grid-row-2 gap-4";
//       default:
//         return "";
//     }
//   };
//   console.log(images);

//   return (
//     <div className={getGridClasses()}>
//       {images.map((image, index) => (
//         <div key={index} className="relative">
//           <img
//             src={image.src}
//             alt={`Image ${index + 1}`}
//             className="w-full h-auto object-cover"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageLayout;
