import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    };

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
        props.showAlert("Extra spaces removed!", "success");
    };

    const [text, setText] = useState('');

    return (
        <>
            <div
                className="container py-4"
                style={{
                    color: props.mode === 'dark' ? 'white' : '#042743',
                    backgroundColor: props.mode === 'dark' ? '#343a40' : '#f8f9fa',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                <h1 className="text-center mb-4">{props.heading}</h1>
                <textarea
                    className="form-control mb-3"
                    value={text}
                    onChange={handleOnChange}
                    style={{
                        backgroundColor: props.mode === 'dark' ? '#495057' : '#fff',
                        color: props.mode === 'dark' ? 'white' : '#042743',
                        border: '2px solid #ced4da',
                        borderRadius: '8px',
                    }}
                    id="myBox"
                    rows="8"
                ></textarea>
                <div className="d-flex justify-content-center flex-wrap">
                    <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Uppercase</button>
                    <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Lowercase</button>
                    <button className="btn btn-danger mx-2 my-1" onClick={handleClearClick}>Clear</button>
                    <button className="btn btn-success mx-2 my-1" onClick={handleCopy}>Copy</button>
                    <button className="btn btn-warning mx-2 my-1" onClick={handleExtraSpaces}>Remove Spaces</button>
                </div>
            </div>
            <div className="container my-3 text-center" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your Text Summary</h2>
                <p>
                    {text.split(/\s+/).filter((word) => word).length} words and {text.length} characters
                </p>
                <p>Approximately {0.008 * text.split(/\s+/).filter((word) => word).length} minutes to read</p>
                <h2>Preview</h2>
                <p className="p-2" style={{ fontStyle: 'italic' }}>
                    {text.length > 0 ? text : "Enter text above to preview it here"}
                </p>
            </div>
        </>
    );
}
