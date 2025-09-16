import React, { useRef } from 'react';

const fontFamilies = [
    'Arial', 'Georgia', 'Times New Roman', 'Verdana', 'Courier New',
    'Trebuchet MS', 'Comic Sans MS', 'Impact', 'Tahoma', 'Palatino'
];

const fontSizes = [
    { label: 'Small', value: 2 },
    { label: 'Normal', value: 3 },
    { label: 'Large', value: 4 },
    { label: 'X-Large', value: 5 },
    { label: 'XX-Large', value: 6 },
    { label: 'Huge', value: 7 }
];

const RichTextEditor = ({ value, onChange, readOnly = false }) => {
    const editorRef = useRef(null);

    // Execute formatting commands
    const exec = (command, value = null) => {
        document.execCommand(command, false, value);
        if (editorRef.current) {
            onChange(editorRef.current.innerHTML);
        }
    };

    // Handle input changes
    const handleInput = () => {
        if (editorRef.current) {
            onChange(editorRef.current.innerHTML);
        }
    };

    return (
        <div className="w-full">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-3 mb-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg px-4 py-2 shadow">
                {/* Font family */}
                <select
                    onChange={e => exec('fontName', e.target.value)}
                    className="border rounded px-2 py-1 text-sm bg-white focus:outline-blue-400"
                    title="Font Family"
                >
                    {fontFamilies.map(f => (
                        <option key={f} value={f}>{f}</option>
                    ))}
                </select>
                {/* Font size */}
                <select
                    onChange={e => exec('fontSize', e.target.value)}
                    className="border rounded px-2 py-1 text-sm bg-white focus:outline-blue-400"
                    title="Font Size"
                >
                    {fontSizes.map(size => (
                        <option key={size.value} value={size.value}>{size.label}</option>
                    ))}
                </select>
                {/* Bold */}
                <button type="button" className="px-2 py-1 font-bold rounded hover:bg-blue-200" onClick={() => exec('bold')} title="Bold">
                    <span style={{ fontWeight: 'bold' }}>B</span>
                </button>
                {/* Italic */}
                <button type="button" className="px-2 py-1 italic font-bold rounded hover:bg-blue-200" onClick={() => exec('italic')} title="Italic">
                    <span style={{ fontStyle: 'italic' }}>I</span>
                </button>
                {/* Underline */}
                <button type="button" className="px-2 py-1 underline font-bold rounded hover:bg-blue-200" onClick={() => exec('underline')} title="Underline">
                    <span style={{ textDecoration: 'underline' }}>U</span>
                </button>
                {/* Alignment */}
                <button type="button" className="px-2 py-1 rounded hover:bg-blue-200" onClick={() => exec('justifyLeft')} title="Align Left">
                    <span style={{ display: 'inline-block', width: 18 }}>L</span>
                </button>
                <button type="button" className="px-2 py-1 rounded hover:bg-blue-200" onClick={() => exec('justifyCenter')} title="Align Center">
                    <span style={{ display: 'inline-block', width: 18 }}>C</span>
                </button>
                <button type="button" className="px-2 py-1 rounded hover:bg-blue-200" onClick={() => exec('justifyRight')} title="Align Right">
                    <span style={{ display: 'inline-block', width: 18 }}>R</span>
                </button>
            </div>
        </div>
    );
};

export default RichTextEditor;