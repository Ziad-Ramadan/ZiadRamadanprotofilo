// import React from 'react';
// import Image from 'next/image';
// import img1 from '../Images/788.png';
// import img2 from '../Images/build.png';
// import img3 from '../Images/xo1.png';
// import img4 from '../Images/334.png';
// import img5 from '../Images/457.png';
// import Link from 'next/link';

// export default function ThreeContainerLayout() {
//   return (
//     <div className="bg-black py-10 px-4 sm:px-8 ">
//       <h1 className="text-white font-bold text-3xl sm:text-5xl md:text-5xl lg:text-6xl mb-10 md:mb-12">
//         My Work
//       </h1>
//       <div className="flex text-center items-center justify-center">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-7xl mx-8 sm:mx-5 md:mx-10 lg:mx-2 ">
          
//           {/* Container 1 */}
//           {/* <div className="bg-transparent flex flex-col justify-center items-center relative overflow-hidden rounded-3xl border border-red-500 duration-500 w-full h-[350px] md:h-[400px] group">
//             <Image 
//               src={img1} 
//               alt="voting" 
//               className="absolute inset-0 w-full h-full object-cover group-hover:opacity-50 transition-opacity duration-500"
//             />
//             <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//               <h2 className="text-lg sm:text-xl text-white font-bold mb-2">
//                 Voting System
//               </h2>
//               <p className="text-xs sm:text-sm text-white mb-5">
//                 Voting System Using React, Tailwind, and Firebase
//               </p>
//               <button className='text-white py-2 w-20 sm:w-24 rounded-md text-center border border-red-500 mt-4'>
//                 See More
//               </button>
//             </div>
//           </div> */}

//           {/* Container 2 */}
//            {/* <div className="bg-transparent flex flex-col justify-center items-center relative overflow-hidden rounded-3xl border border-red-500 duration-500 w-full h-[350px] md:h-[400px] group">
//             <Image 
//               src={img2} 
//               alt="computer guardian" 
//               className="absolute inset-0 w-full h-full object-cover group-hover:opacity-50 transition-opacity duration-500"
//             />
//             <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//               <h2 className="text-lg sm:text-xl text-white font-bold mb-2">
//                 Computer Guardian
//               </h2>
//               <p className="text-xs sm:text-sm text-white mb-5">
//                 Build Your Computer Using HTML, CSS, JavaScript, and PHP
//               </p>
//               <button className='text-white py-2 w-20 sm:w-24 rounded-md text-center border border-red-500 mt-4'>
//                 See More
//               </button>
//             </div>
//           </div> */}

//           {/* Container 3 */}
//           {/* <div className="bg-transparent flex flex-col justify-center items-center relative overflow-hidden rounded-3xl border border-red-500 duration-500 w-full h-[350px] md:h-[400px] group">
//             <Image 
//               src={img3} 
//               alt="tic-tac-toe" 
//               className="absolute inset-0 w-full h-full object-cover group-hover:opacity-50 transition-opacity duration-500"
//             />
//             <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//               <h2 className="text-lg sm:text-xl text-white font-bold mb-2">
//                 Tic-Tac-Toe Game
//               </h2>
//               <p className="text-xs sm:text-sm text-white mb-5">
//                 XO Game Using C# - Play vs another player or CPU
//               </p>
//               <button className='text-white py-2 w-20 sm:w-24 rounded-md text-center border border-red-500 mt-4'>
//                 See More
//               </button>
//             </div>
//           </div> */}

//           {/* Container 4 */}
//           <div className="bg-transparent flex flex-col justify-center items-center relative overflow-hidden rounded-3xl border border-red-500 duration-500 w-full h-[350px] md:h-[400px] group">
//             <Image 
//               src={img5} 
//               alt="discord clone" 
//               className="absolute inset-0 w-full h-full object-cover group-hover:opacity-50 transition-opacity duration-500"
//             />
//             <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//               <h2 className="text-lg sm:text-xl text-white font-bold mb-2">
//                 Discord Clone
//               </h2>
//               <p className="text-xs sm:text-sm text-white mb-5">
//                 Discord Landing Page Clone Using Next.js, TypeScript, and CSS
//               </p>
//               <button className='text-white py-2 w-20 sm:w-24 rounded-md text-center border border-red-500 mt-4'>
//                 See More
//               </button>
//             </div>
//           </div>
//         </div>
//       </div> 

//       <div className="flex justify-center mt-6">
//         <Link href='/Projects' target='_blank' className='flex text-3xl text-white items-center justify-center text-center border mt-6 w-56 rounded-md border-red-600 hover:bg-red-600 duration-500 p-1'>
//           See More
//         </Link>
//       </div>
//     </div>
//   );
// }
