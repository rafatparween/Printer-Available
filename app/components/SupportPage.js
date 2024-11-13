import Image from 'next/image';

export default function SupportPage() {
    return (
        <>
            <div className="flex flex-col items-center py-10 space-y-10">
                {/* Header Section */}
                <h1 className="text-3xl font-bold text-center">We Provide Solution’s for</h1>
                <p className="text-center text-gray-500">
                    Storage | Software Download | Installation Issues | Network Connectivity Related Issues
                </p>

                {/* Solutions Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl px-6">
                    {/* Solution 1 */}
                    <div className="flex flex-col items-center text-center border border-gray-200 p-6 rounded-lg shadow-sm">
                        <Image src="/windows.jpg" alt="Windows 11" width={250} height={113} />
                        <h2 className="mt-4 font-semibold text-lg">Get Instant Support for Laptop & Desktop</h2>
                        <p className="text-gray-600">
                            If elite, premium, pavilions or any other HP desktop is not working properly due to an error then connect to
                            one of our technicians at customer service number.
                        </p>
                        <button className="mt-4 bg-[#007DBD] text-white py-2 px-4 rounded hover:bg-blue-700">
                            Install HP Smart
                        </button>
                    </div>

                    {/* Solution 2 */}
                    <div className="flex flex-col items-center text-center border border-gray-200 p-6 rounded-lg shadow-sm">
                        <Image src="/scan.png" alt="Printer Setup" width={250} height={113} className="object-cover" />
                        <h2 className="mt-4 font-semibold text-lg">How to print, scan and fax</h2>
                        <p className="text-gray-600">
                            Click Print Scan Fax for instructions on how to print, scan and fax with your HP Printer using Windows or
                            Mac OS.
                        </p>
                        <button className="mt-4 bg-[#007DBD] text-white py-2 px-4 rounded hover:bg-blue-700">
                            Fix Scan/Print
                        </button>
                    </div>

                    {/* Solution 3 */}
                    <div className="flex flex-col items-center text-center border border-gray-200 p-6 rounded-lg shadow-sm">
                        <Image src="/offline.png" alt="Printer Queue" width={250} height={113} className="object-cover" />

                        <h2 className="mt-4 font-semibold text-lg">Printer offline or print job stuck in queue?</h2>
                        <p className="text-gray-600">
                            Use this Windows automated tool to diagnose and fix printer problems such as printer offline and print jobs
                            stuck in queue.
                        </p>
                        <button className="mt-4 bg-[#007DBD] text-white py-2 px-4 rounded hover:bg-blue-700">
                            Fix your Printer
                        </button>
                    </div>
                </div>

                {/* Printer Identification Section */}
                <div className="w-full bg-gray-100 py-10">
                    <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto px-6 space-y-8 md:space-y-0 md:space-x-8">
                        {/* Text Section */}
                        <div className="flex-1 text-center md:text-left space-y-4">
                            <h2 className="text-xl font-semibold">Identify your printer for manuals and specific product information</h2>
                            <p>Enter your serial number, product number or product name</p>
                            <input
                                type="text"
                                placeholder="Example: HP DeskJet 2632 All-in-One printer"
                                className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded"
                            />
                            <button className="mt-4 bg-[#007DBD] text-white py-2 px-4 rounded hover:bg-blue-700">
                                Submit
                            </button>
                        </div>
                        <div className="w-px h-[312px] bg-gray-300"></div>
                        {/* Image Section */}
                        <div className="flex-1 flex justify-center md:justify-end">
                            <Image src="/Deskjet.avif" alt="Printer Example" width={526} height={314} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mb-[35px]">
                <Image src="/slider.webp" alt="Printer Example" width={970} height={190} />
            </div>
        </>
    );
}
