import React, { useState } from 'react';
import templates from './templates';
import TemplateTile from './component/templateTile';
import PaperTile from './component/paperTile';

function Create() {
    const [selectedTemplates, setSelectedTemplates] = useState([null, null]);
    const [letters, setLetters] = useState(['', '']);

    const handleSelectTemplate = (template) => {
        if (!selectedTemplates[0]) {
            setSelectedTemplates([template, null]);
        } else if (!selectedTemplates[1]) {
            setSelectedTemplates([selectedTemplates[0], template]);
        }
    };

    const handleLetterChange = (index, value) => {
        const updated = [...letters];
        updated[index] = value;
        setLetters(updated);
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="flex min-h-screen bg-[#FAFAFA]">
            {/* Templates Sidebar */}
            <aside className="w-60 h-auto bg-white border-r px-6 py-10">
                <h2 className="text-[#3B82F6] font-bold mb-4 text-center">Templates</h2>
                {templates.map(tpl => (
                    <TemplateTile key={tpl.id} template={tpl} onSelect={handleSelectTemplate} />
                ))}
            </aside>
            {/* Main Editor */}
            <main className="flex-1 flex flex-col items-center py-8">
                {/* Toolbar above PaperTile */}
                <div className="flex items-center justify-between w-[700px] bg-white rounded-full shadow px-4 py-2 mb-4">
                    <div className="flex items-center gap-2">
                        <input type="text" value="Arial" readOnly className="border rounded px-2 py-1 w-24 text-sm" />
                        <button className="bg-gray-100 px-2 py-1 rounded text-lg">-</button>
                        <span className="px-2">50</span>
                        <button className="bg-gray-100 px-2 py-1 rounded text-lg">+</button>
                        <button className="bg-gray-100 px-2 py-1 rounded text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                        </button>
                        <button className="bg-gray-100 px-2 py-1 rounded text-lg font-bold">B</button>
                        <button className="bg-gray-100 px-2 py-1 rounded text-lg italic font-bold">I</button>
                        <button className="bg-gray-100 px-2 py-1 rounded text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </button>
                    </div>
                    <button
                        className="bg-[#3B82F6] text-white px-6 py-2 rounded-full font-semibold shadow text-base"
                        onClick={handlePrint}
                    >
                        Download
                    </button>
                </div>
                {/* Bondpaper */}
                <PaperTile
                    left={
                        <div>
                            {selectedTemplates[0] && (
                                <img src={selectedTemplates[0].image} alt="" className="w-16 h-20 mb-2" />
                            )}
                            <textarea
                                className="w-full h-80 border rounded p-2"
                                placeholder="Click to start writing..."
                                value={letters[0]}
                                onChange={e => handleLetterChange(0, e.target.value)}
                            />
                        </div>
                    }
                    right={
                        <div>
                            {selectedTemplates[1] && (
                                <img src={selectedTemplates[1].image} alt="" className="w-16 h-20 mb-2" />
                            )}
                            <textarea
                                className="w-full h-80 border rounded p-2"
                                placeholder="Click to start writing..."
                                value={letters[1]}
                                onChange={e => handleLetterChange(1, e.target.value)}
                            />
                        </div>
                    }
                />
            </main>
        </div>
    );
}

export default Create;