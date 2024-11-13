import FooterSection from '@/app/components/FooterSection';
import NavbarSection from '@/app/components/NavbarSection';
import Storepage from '@/app/components/Storepage';
import JivoChat from '@/app/Jivochat';
import Link from 'next/link';

function Printersearch() {
  return (
    <>
      <NavbarSection />
      <div className="h-[530px]">
        <section
          className="flex flex-col justify-center items-center text-center py-12 relative bg-cover bg-center h-[530px]"
          style={{
            backgroundImage: "url('https://as1.ftcdn.net/v2/jpg/05/21/66/12/1000_F_521661218_MNYc5lCrIQUKKwBfIGzxJYHYxZzwNof9.jpg')"
          }}
        >
          {/* <div className="absolute inset-0 opacity-80"></div> */}
          <div className="absolute inset-0 bg-[#007DBA] opacity-60"></div>

          {/* Main content */}
          <div className="relative z-10 text-white 2xl:ml-[-392px] xl:ml-[108px]">
            <h1 className="text-[54px] mb-4 xl:ml-[-145px] 2xl:ml-[5px]">Complete setup using Professionals Help</h1>
            <div className="border-t border-white w-[1100px] mx-auto mb-8 mt-[-19px] xl:ml-[-4px]"></div>

            {/* Main Content Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start">
              {/* Left Side: Text and Steps */}
              <div className="space-y-4 lg:w-1/2 lg:pr-8 2xl:ml-[34px]">
                {/* Step 1 */}
                <div className="flex items-center space-x-3">
                  <span className="text-[35px] w-[41px] h-[58px]">1.</span>
                  <p className="text-[34px] whitespace-nowrap">Make sure that your printer is powered on</p>
                </div>
                {/* Step 2 */}
                <div className="flex items-center space-x-3">
                  <span className="text-[34px] w-[50px] h-[40px]">2.</span>
                  <p className="text-[34px] whitespace-nowrap 2xl:ml-[5px] 2xl:mt-[9px]">Click Install Setup & driver to complete your printer setup</p>
                </div>
                <Link href="./install/process">
                  <button className="install border border-white mt-8 bg-white w-[230px] h-[50px]  2xl:ml-[-189px] xl:ml-[-301px] py-2 px-6 rounded-lg font-bold shadow-md hover:bg-gray-100 transition duration-300 relative overflow-hidden">
                    <h1 className='text-[16px] text-black'>Install Hp Easy Start</h1>
                  </button>
                </Link>
              </div>

              {/* Printer and Devices Image */}
              <div className="relative z-10 mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
                {/* <img
                  src="https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/s/e/selene_4303_fdw_00002.png"  // Replace with actual path
                  alt="Printer setup devices"
                  width={316}
                  height={252}
                  className="object-contain 2xl:mr-[-1041px] "
                /> */}
              </div>
            </div>
          </div>
        </section>

        {/* Additional content */}
        <div className="flex flex-col items-center xl:ml-[-468px] 2xl:ml-[-688px]">
          <h1 className="mt-[30px] 2xl:ml-[-592px] xl:ml-[-592px] text-[16px]">Also available on:</h1>
          <img
            src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png"
            className="h-[50px] mt-4 ml-[-406px] "
            alt="Available on"
          />
        </div>
      </div>
      <Storepage />
      <FooterSection />
      <JivoChat />
    </>
  );
}

export default Printersearch;


{/* <Link href="./install/process">
  <button className="install border border-white mt-8 bg-white w-[230px] h-[50px]  2xl:ml-[-189px] xl:ml-[-301px] py-2 px-6 rounded-lg font-bold shadow-md hover:bg-gray-100 transition duration-300 relative overflow-hidden">
    <h1 className='text-[16px] text-black'>Install Hp Easy Start</h1>
  </button>
</Link> */}

// import Image from 'next/image';

// export default function HPComponent() {
//   return (
//     <div className="p-8 bg-gray-50">
//       {/* First Section */}
//       <div className="flex flex-col lg:flex-row items-center lg:items-start mb-8">
//         {/* Left Side - HP Smart Info */}
//         <div className="lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
//           <div className="p-4">
//             <Image
//               src="/smart.png" // Replace with the path to your HP icon image
//               alt="HP Smart Icon"
//               width={80}
//               height={80}
//             />
//           </div>
//           <h1 className="text-2xl font-semibold mt-4">HP Smart</h1>
//           <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
//             Install Now
//           </button>
//           <p className="text-gray-500 mt-2">
//             Connects seamlessly with your HP printer
//           </p>
//         </div>
//         {/* Right Side - Laptop Image */}
//         <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
//           <Image
//             src="/slaptop.webp" // Replace with the path to your laptop image
//             alt="Laptop with HP Smart app"
//             width={856}
//             height={378}
//             className="rounded-lg"
//           />
//         </div>
//       </div>

//       {/* Second Section */}
//       <div className="flex flex-col lg:flex-row items-start">
//         {/* Left Side - Text Content */}
//         <div className="lg:w-1/2 text-gray-700 text-sm space-y-4">
//           <p>
//             Print, scan, and share files by using HP Smart with your HP Printer. HP Smart makes it easy to get started and keeps you going with features like Print Anywhere or Mobile Fax! NOTE: Disconnect from a Virtual Private Network (VPN) connection before downloading.
//           </p>
//           <ul className="list-disc ml-8 space-y-2">
//             <li>Start with a hassle-free set up, then print, scan, copy, and share files directly from your computer to your friends, co-workers, or a linked cloud account</li>
//             <li>Manage or print to your printer using any network connection</li>
//             <li>Order supplies, get support, and manage your HP account straight from the app</li>
//             <li>Create high-quality scans by importing existing files or scanning from your printer, and improve them by cropping the file, adding filters and text, or adjusting saturation, contrast, and brightness</li>
//             <li>It’s easy to send secure faxes from the app with Mobile Fax</li>
//             <li>Be more productive with customizable one-touch Shortcuts (formally Smart Tasks)</li>
//             <li>Access hundreds of printable crafts, cards, and learning activities for free with Printables! Get involved and get your family creating together!</li>
//           </ul>
//           <p className="text-gray-500 mt-4">
//             Some HP Smart features require a network connection and an HP account for full functionality. Certain features/software are available in English language only.
//           </p>
//         </div>
//         {/* Right Side - Second Image */}
//         <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
//           <Image
//             src="/app.webp" // Replace with the path to your second image
//             alt="HP Smart app features"
//             width={600}
//             height={300}
//             className="rounded-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
