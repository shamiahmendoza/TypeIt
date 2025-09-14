import React from 'react';

const Footer = () => (
    <footer className="w-full mt-12 px-4 py-8 bg-[#FAFAFA]">
        <hr className="border-gray-300 mb-6" />
        <div className="flex flex-col items-center text-center">
            <span className="flex items-center mb-2 text-gray-700">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 11c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm0 0V7m0 4v4m0 0h4m-4 0H8"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v1m0 14v1m8-8h-1M5 12H4m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707"
                    />
                </svg>
                <span className="font-medium">Your Privacy is protected</span>
            </span>
            <p className="text-gray-500 text-sm max-w-xl">
                No data is stored — everything happens instantly on your device. Letters and QR codes cannot be saved in the website, so please copy or download them before you leave.
            </p>
        </div>
    </footer>
);

export default Footer;