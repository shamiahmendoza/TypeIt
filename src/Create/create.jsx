import React, { useState } from 'react';
import templates from './templates';
import TemplateTile from './component/templateTile';
import PaperTile from './component/paperTile';
import MyEditor from './component/richTextEditor';

const Create = () => {
    const [selectedTemplates, setSelectedTemplates] = useState([null, null]);
    const [leftTextBoxes, setLeftTextBoxes] = useState([]);
    const [rightTextBoxes, setRightTextBoxes] = useState([]);
    const [activeBox, setActiveBox] = useState(null);

    // Get the value of the active box
    let editorValue = '';
    if (activeBox) {
        const { side, idx } = activeBox;
        if (side === 'left' && leftTextBoxes[idx]) editorValue = leftTextBoxes[idx].text;
        if (side === 'right' && rightTextBoxes[idx]) editorValue = rightTextBoxes[idx].text;
    }

    // Update the active box when editor changes
    const handleEditorChange = (newValue) => {
        if (!activeBox) return;
        const { side, idx } = activeBox;
        if (side === 'left') {
            const updated = [...leftTextBoxes];
            updated[idx].text = newValue;
            setLeftTextBoxes(updated);
        } else {
            const updated = [...rightTextBoxes];
            updated[idx].text = newValue;
            setRightTextBoxes(updated);
        }
    };

    const handleSelectTemplate = (template, side) => {
        const updated = [...selectedTemplates];
        updated[side] = template;
        setSelectedTemplates(updated);
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#FAFAFA] overflow-hidden pt-20">
            {/* Templates section: horizontal scroll at the top */}
            <aside
                className="
                    w-full
                    bg-white
                    border-b
                    px-4
                    py-6
                    overflow-x-auto
                    flex-shrink-0
                    "
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    overflowX: 'auto',
                    overflowY: 'hidden',
                }}
            >
                <h2 className="text-[#3B82F6] font-bold mb-6 text-center">Templates</h2>
                <div
                    className="
                        flex
                        flex-row
                        gap-6
                        items-center
                        w-full
                        "
                    style={{
                        overflowX: 'auto',
                        overflowY: 'hidden',
                        scrollSnapType: 'x mandatory',
                    }}
                >
                    {templates.map((tpl, idx) => (
                        <React.Fragment key={idx}>
                            <TemplateTile template={tpl} onSelect={() => handleSelectTemplate(tpl, 0)} />
                            <TemplateTile template={tpl} onSelect={() => handleSelectTemplate(tpl, 1)} />
                        </React.Fragment>
                    ))}
                </div>
            </aside>
            {/* Main content */}
            <main className="flex-1 flex flex-col items-center py-8 overflow-hidden">
                {/* RTE above PaperTile */}
                {/* <div className="w-full max-w-2xl mb-6">
                    <MyEditor value={editorValue} onChange={handleEditorChange} readOnly={!activeBox} />
                </div> */}
                <PaperTile
                    leftTemplate={selectedTemplates[0]}
                    rightTemplate={selectedTemplates[1]}
                    leftTextBoxes={leftTextBoxes}
                    setLeftTextBoxes={setLeftTextBoxes}
                    rightTextBoxes={rightTextBoxes}
                    setRightTextBoxes={setRightTextBoxes}
                    activeBox={activeBox}
                    setActiveBox={setActiveBox}
                />
            </main>
        </div>
    );
};

export default Create;