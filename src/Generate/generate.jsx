import React, { useState, useRef } from 'react';
import QRCode from 'react-qr-code';

function Generate() {
    const [url, setUrl] = useState('');
    const [input, setInput] = useState('');
    const qrRef = useRef(null);

    // Copy QR code as image
    const handleCopy = () => {
        const svg = qrRef.current.querySelector('svg');
        if (svg) {
            const serializer = new XMLSerializer();
            const svgString = serializer.serializeToString(svg);
            const canvas = document.createElement('canvas');
            const img = new window.Image();
            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                canvas.toBlob(blob => {
                    const item = new ClipboardItem({ 'image/png': blob });
                    navigator.clipboard.write([item]);
                });
            };
            img.src = 'data:image/svg+xml;base64,' + window.btoa(svgString);
        }
    };

    // Download QR code as image
const handleDownload = () => {
    const svg = qrRef.current.querySelector('svg');
    if (svg) {
        const serializer = new XMLSerializer();
        const svgString = serializer.serializeToString(svg);
        const canvas = document.createElement('canvas');
        const img = new window.Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            // Use the input value as the filename, fallback to 'qr-code.png'
            const safeTitle = input
                ? input.replace(/[^a-z0-9]/gi, '_').toLowerCase().slice(0, 50)
                : 'qr-code';
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = `${safeTitle}.png`;
            link.click();
        };
        img.src = 'data:image/svg+xml;base64,' + window.btoa(svgString);
    }
};

    const handleGenerate = (e) => {
        e.preventDefault();
        setUrl(input);
    };

    return (
        <div className="min-h-screen flex flex-col items-center py-10 px-2 pt-30">
            <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">Start creating QR Code</h1>
            <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl mb-8">
                {/* Input and Button */}
                <form
                    onSubmit={handleGenerate}
                    className="bg-white rounded-xl shadow p-8 flex-1 flex flex-col justify-center min-w-[320px]"
                >
                    <label className="font-medium mb-2 text-gray-700">Copy paste URL or write URL</label>
                    <input
                        type="url"
                        placeholder="www.articlename.com"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#3B82F6] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-600 transition-colors text-base w-fit self-end"
                    >
                        Generate
                    </button>
                </form>
                {/* QR Code Preview */}
                <div className="bg-white rounded-xl shadow p-8 flex-1 flex flex-col items-center min-w-[320px]" ref={qrRef}>
                    <span className="font-medium mb-2 text-gray-700">QR code preview</span>
                    <div className="bg-white p-2 rounded flex justify-center items-center mb-4">
                        <QRCode value={url || ' '} size={180} />
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={handleCopy}
                            className="bg-[#3B82F6] text-white px-5 py-1 rounded-full font-semibold shadow hover:bg-blue-600 transition-colors text-base"
                        >
                            Copy
                        </button>
                        <button
                            onClick={handleDownload}
                            className="bg-[#3B82F6] text-white px-5 py-1 rounded-full font-semibold shadow hover:bg-blue-600 transition-colors text-base"
                        >
                            Download
                        </button>
                    </div>
                </div>
            </div>
            {/* How to create QR code instructions */}
            <div className="bg-white rounded-xl shadow p-6 w-full max-w-6xl text-center">
                <h2 className="text-lg font-semibold mb-3">How to create QR code?</h2>
                <ol className="text-gray-700 text-sm list-decimal list-inside space-y-1 text-left md:text-center">
                    <li>
                        Open the jw.org page you want to share and copy the full URL from your browser’s address bar (make sure it starts with https://).
                    </li>
                    <li>
                        Paste the URL into the “Copy paste URL or write URL” field.
                    </li>
                    <li>
                        Click Generate.
                    </li>
                    <li>
                        Check the QR code preview on the right to confirm it appears.
                    </li>
                    <li>
                        Scan the QR code with your phone (camera or QR scanner app) to make sure it opens the correct page.
                    </li>
                    <li>
                        Click Download to save the QR image for printing or digital use, or click Copy to copy the image to your clipboard.
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Generate;