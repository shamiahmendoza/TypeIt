import React from 'react';

const TemplateTile = ({ template, onSelect }) => (
    <div className="mb-4 flex flex-col items-center w-32 h-52 border rounded-xl shadow-md overflow-hidden opacity-90 hover:opacity-100 transition-opacity mx-auto">
        <div className="w-full h-40 rounded-t-xl bg-gray-400 flex items-center justify-center overflow-hidden">
            {template.image && (
                <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover rounded-t-xl"
                />
            )}
        </div>
        <button
            className="w-full bg-[#3B82F6] text-[#FDE68A] px-2 py-2 rounded-b-xl font-semibold text-xs"
            onClick={onSelect}
        >
            Use This Template
        </button>
    </div>
);

export default TemplateTile;