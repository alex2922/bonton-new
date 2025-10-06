import React from 'react'

const HeroSection = () => {
  return (
    <div className="parent h-[calc(110vh)]  opacity-100 relative ">
    <div className="absolute top-0 left-0 w-full h-full bg-black ">
      <video
        className="w-full h-full object-cover"
        src="/herobg2.webm"
        autoPlay
        loop
        // muted
        controls
      ></video>
    
    </div>

    
  </div>
  )
}

export default HeroSection



// import React, { useRef, useEffect } from 'react';

// const HeroSection = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const handleUnmute = () => {
//       if (videoRef.current) {
//         videoRef.current.muted = false;
//         videoRef.current.play();
//       }
//       // Remove listener after first click
//       window.removeEventListener('click', handleUnmute);
//     };

//     // Wait for a user gesture to unmute
//     window.addEventListener('click', handleUnmute);

//     return () => window.removeEventListener('click', handleUnmute);
//   }, []);

//   return (
//     <div className="parent h-[calc(110vh)] opacity-100 relative">
//       <div className="absolute top-0 left-0 w-full h-full bg-black">
//         <video
//           ref={videoRef}
//           className="w-full h-full object-cover"
//           src="/herobg2.webm"
//           autoPlay
//           loop
//           muted
//           playsInline
//         ></video>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
