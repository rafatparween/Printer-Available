// "use client"
// import { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// function Header() {
//   const [slide, setSlide] = useState(0);
//   const [itemWidth, setItemWidth] = useState(0);
//   const [visibleItems, setVisibleItems] = useState(0);

//   const [categories] = useState([
//     { name: "Visiting Cards", image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/visiting-cards/Velvet%20Touch%20Visiting%20Cards/IN_Velvet-Touch-Visiting-Cards_Overview" },
//     { name: "Personalised Pens", image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/Pens/Parker%20Lac%20Black%20Ball%20Pens/IN_Parker-Lac-Black-Ball-Pens_Overview" },
//     { name: "Custom T-shirts", image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/Clothing%20and%20Bags/Dutees%20Combo%20Polo%20T-Shirts/IN_Dutees-Combo-Polo-T-Shirts_Overview" },
//     { name: "Labels, Stickers & Packaging", image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/label%20and%20sticker/Custom%20Shape%20Stickers/New/IN_Custom-Shape-Stickers_Overview-2" },
//     { name: "Photo Gifts", image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/Photo%20Gifts/Acrylic%20Photo%20Blocks/IN_Acrylic-Photo-Blocks_Overview" },
//     { name: "Custom Bags", image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/Clothing%20and%20Bags/Bags-%20Wildcraft%20Laptop%20Bag/IN_Wildcraft-Laptop-Bag_Overview" },
//     { name: "Custom Drinkware", image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/Drinkware/Frosted%20Beer%20Mugs/IN_Frosted-Beer-Mugs_Overview" },
//     { name: "Custom Stationery", image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/marketing%20Materials/Wooden-LED-keychain/IN_Wooden-LED-keychain_Overview" },
//     { name: "Custom Stamps & Ink", image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/Stamps/Professional%20Stamps/IN_Professional-Stamps_Overview" },
//   ]);

//   // Calculate the item width and visible items based on the viewport width

//   useEffect(() => {
//     const updateItemWidth = () => {
//       const containerWidth = window.innerWidth;
//       const gap = 16; 
//       const calculatedItemWidth = (containerWidth - (gap * (8 - 1))) / 8; // Adjust for the gap between items
//       setItemWidth(calculatedItemWidth);
//       setVisibleItems(Math.floor(containerWidth / calculatedItemWidth));
//     };

//     updateItemWidth();
//     window.addEventListener("resize", updateItemWidth);

//     return () => window.removeEventListener("resize", updateItemWidth);
//   }, []);

//   const nextSlide = () => {
//     if (slide < categories.length - visibleItems) {
//       setSlide(slide + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (slide > 0) {
//       setSlide(slide - 1);
//     }
//   };

//   return (
//     <div className="w-full mt-10">
//       <h1 className="text-2xl font-semibold mb-4 text-center h-[38px]">Explore all categories</h1>
//       <div className="relative">
//         {/* Left Arrow */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
//           disabled={slide === 0}
//         >
//           <FaArrowLeft />
//         </button>

//         {/* Categories Carousel */}
//         <div className="overflow-hidden w-full">
//           <div
//             className="flex transition-transform ease-out duration-300"
//             style={{ transform: `translateX(-${slide * (itemWidth + 16)}px)` }} // Adjust translation to account for gap
//           >
//             {categories.map((cat, index) => (
//               <div
//                 key={index}
//                 className="shrink-0 text-center mx-2"
//                 style={{ width: itemWidth }}
//               >
//                 <img
//                   src={cat.image}
//                   alt={cat.name}
//                   className="w-full h-auto rounded-full"
//                 />
//                 <div className="mt-2">{cat.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={nextSlide}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
//           disabled={slide === categories.length - visibleItems}
//         >
//           <FaArrowRight />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Header;



import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex flex-col items-center">
      {/* Navigation Bar */}
      <nav className="bg-[#007dbd] text-white w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center h-12 items-center space-x-8">
            <Link href="#" className="hover:underline">Support Home</Link>
            <div className="relative group">
              <Link href="#" className="hover:underline flex items-center">
                Products <span className="ml-1">▼</span>
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute hidden group-hover:block bg-white text-black mt-2 shadow-lg p-2 rounded">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-200">Product 1</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-200">Product 2</Link>
              </div>
            </div>
            <Link href="#" className="hover:underline">Software and Drivers</Link>
            <div className="relative group">
              <Link href="#" className="hover:underline flex items-center">
                Diagnostics <span className="ml-1">▼</span>
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute hidden group-hover:block bg-white text-black mt-2 shadow-lg p-2 rounded">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-200">Diagnostics 1</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-200">Diagnostics 2</Link>
              </div>
            </div>
            <Link href="#" className="hover:underline">Contact Us</Link>
            <Link href="#" className="hover:underline">Business Support</Link>
            <div className="relative group">
              <Link href="#" className="hover:underline flex items-center">
                My HP Account <span className="ml-1">▼</span>
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute hidden group-hover:block bg-white text-black mt-2 shadow-lg p-2 rounded">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-200">Account 1</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-200">Account 2</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Content Section */}
      <div className="border-t border-gray-300 my-4 w-full"></div>
      <div className="flex items-center justify-between max-w-7xl w-full mx-auto p-4 ">
        <h1 className="text-3xl 2xl:ml-[133px] xl:ml-[124px]">HP Computer Support</h1>
        <Image
          src="/smarthp.webp" // Replace with the actual path to your image
          alt="HP Computer"
          width={400}
          height={150}
          className="object-cover 2xl:mr-[94px] xl:mr-[101px] "
        />
      </div>
      <div className="border-t border-gray-300 my-4 w-full"></div>
    </div>
  );
}
