import React from 'react';

const Button = ({ children, to, onClick, className = '' }) => {
    return to ? (
        <a
            href={to}
            className={`bg-[#3B82F6] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-600 transition-colors text-lg inline-block ${className}`}
        >
            {children}
        </a>
    ) : (
        <button
            onClick={onClick}
            className={`bg-[#3B82F6] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-600 transition-colors text-lg ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;