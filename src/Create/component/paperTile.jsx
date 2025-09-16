import React from 'react';
import { Rnd } from 'react-rnd';

const defaultTextBox = {
    x: 40,
    y: 40,
    width: 220,
    height: 80,
    text: '',
};

const PaperTile = ({
    leftTemplate,
    rightTemplate,
    leftTextBoxes,
    setLeftTextBoxes,
    rightTextBoxes,
    setRightTextBoxes,
    activeBox,
    setActiveBox,
}) => {
    // Add new text box when user clicks "Type here..." text
    const addTextBox = (side) => {
        if (side === 'left') {
            setLeftTextBoxes([...leftTextBoxes, { ...defaultTextBox }]);
        } else {
            setRightTextBoxes([...rightTextBoxes, { ...defaultTextBox }]);
        }
    };

    // Update text box position/size/text
    const updateTextBox = (side, idx, updates) => {
        const boxes = side === 'left' ? [...leftTextBoxes] : [...rightTextBoxes];
        boxes[idx] = { ...boxes[idx], ...updates };
        if (side === 'left') setLeftTextBoxes(boxes);
        else setRightTextBoxes(boxes);
    };

    return (
        <div
            className="
                relative
                flex
                flex-col
                md:flex-row
                bg-white
                rounded-xl
                shadow-lg
                overflow-hidden
                w-full
                max-w-[1000px]
                h-auto
                md:h-[700px]
                min-h-[400px]
            "
        >
            {/* Left side */}
            <div className="relative w-full md:w-1/2 h-[300px] md:h-full border-r overflow-hidden">
                {leftTemplate && (
                    <img
                        src={leftTemplate.image}
                        alt={leftTemplate.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ zIndex: 0 }}
                    />
                )}
                {leftTextBoxes.map((box, idx) => (
                    <Rnd
                        key={idx}
                        size={{
                            width: box.width,
                            height: box.height,
                        }}
                        position={{
                            x: box.x,
                            y: box.y,
                        }}
                        onDragStop={(e, d) =>
                            updateTextBox('left', idx, { x: d.x, y: d.y })
                        }
                        onResizeStop={(e, direction, ref, delta, position) =>
                            updateTextBox('left', idx, {
                                width: ref.offsetWidth,
                                height: ref.offsetHeight,
                                ...position,
                            })
                        }
                        bounds="parent"
                        enableResizing={{
                            top: true,
                            right: true,
                            bottom: true,
                            left: true,
                            topRight: true,
                            bottomRight: true,
                            bottomLeft: true,
                            topLeft: true,
                        }}
                    >
                        <textarea
                            style={{
                                width: '100%',
                                height: '100%',
                                background: 'rgba(255,255,255,0.7)',
                                resize: 'none',
                                borderRadius: '8px',
                                padding: '8px',
                                fontSize: '1rem',
                                border: '1px solid #3B82F6',
                                boxSizing: 'border-box',
                            }}
                            value={box.text}
                            onChange={e =>
                                updateTextBox('left', idx, { text: e.target.value })
                            }
                            placeholder="Type here..."
                        />
                    </Rnd>
                ))}
                {leftTextBoxes.length === 0 && (
                    <div
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        style={{ zIndex: 2 }}
                        onClick={() => addTextBox('left')}
                    >
                        <span className="text-gray-400 text-xl font-semibold select-none">
                            Type here...
                        </span>
                    </div>
                )}
            </div>
            {/* Right side */}
            <div className="relative w-full md:w-1/2 h-[300px] md:h-full overflow-hidden">
                {rightTemplate && (
                    <img
                        src={rightTemplate.image}
                        alt={rightTemplate.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ zIndex: 0 }}
                    />
                )}
                {rightTextBoxes.map((box, idx) => (
                    <Rnd
                        key={idx}
                        size={{
                            width: box.width,
                            height: box.height,
                        }}
                        position={{
                            x: box.x,
                            y: box.y,
                        }}
                        onDragStop={(e, d) =>
                            updateTextBox('right', idx, { x: d.x, y: d.y })
                        }
                        onResizeStop={(e, direction, ref, delta, position) =>
                            updateTextBox('right', idx, {
                                width: ref.offsetWidth,
                                height: ref.offsetHeight,
                                ...position,
                            })
                        }
                        bounds="parent"
                        enableResizing={{
                            top: true,
                            right: true,
                            bottom: true,
                            left: true,
                            topRight: true,
                            bottomRight: true,
                            bottomLeft: true,
                            topLeft: true,
                        }}
                    >
                        <textarea
                            style={{
                                width: '100%',
                                height: '100%',
                                background: 'rgba(255,255,255,0.7)',
                                resize: 'none',
                                borderRadius: '8px',
                                padding: '8px',
                                fontSize: '1rem',
                                border: '1px solid #3B82F6',
                                boxSizing: 'border-box',
                            }}
                            value={box.text}
                            onChange={e =>
                                updateTextBox('right', idx, { text: e.target.value })
                            }
                            placeholder="Type here..."
                        />
                    </Rnd>
                ))}
                {rightTextBoxes.length === 0 && (
                    <div
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        style={{ zIndex: 2 }}
                        onClick={() => addTextBox('right')}
                    >
                        <span className="text-gray-400 text-xl font-semibold select-none">
                            Type here...
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaperTile;