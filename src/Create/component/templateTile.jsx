import React from 'react';

const TemplateTile = ({ template, onSelect }) => (
    <div className="mb-4 flex flex-col items-center border border-gray-300 rounded-xl shadow-md">
        <div className="w-full h-auto rounded-t-xl bg-gray-400 flex items-center justify-center overflow-hidden">
            <img
                src={template.image}
                alt={template.name}
                className="w-full h-full object-cover rounded-t-xl"
            />
        </div>
        <button
            className="w-full bg-[#3B82F6] text-[#FDE68A] px-2 py-2 rounded-b-xl font-semibold text-sm -mt-1"
            onClick={() => onSelect(template)}
        >
            Use This Template
        </button>
    </div>
);

export default TemplateTile;