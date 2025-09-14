import React from 'react';

const PaperTile = ({ left, right }) => (
    <div className="bg-white rounded shadow flex w-[150vh] h-full mx-auto bondpaper my-5">
        <div className="flex-1 border-r px-4 py-2 flex flex-col">
            {left}
        </div>
        <div className="flex-1 px-4 py-2 flex flex-col">
            {right}
        </div>
    </div>
);

export default PaperTile;