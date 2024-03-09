import React, { useState } from 'react';

const ChatInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleEmojiClick = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    const handleFileChange = (event) => {
        // Implement logic to handle file selection (e.g., upload)
        const file = event.target.files[0];
        // Handle the file object (upload, preview, etc.)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="chat-input-container">
                <button type="button" className="chat-emoji-button" onClick={handleEmojiClick}>
                    <i className="fas fa-smile"></i>
                </button>
                {showEmojiPicker && (
                    <div className="chat-emoji-picker">
                        Emojis here
                    </div>
                )}
                <input
                    type="text"
                    value={message}
                    onChange={handleChange}
                    placeholder="Type a message..."
                    className="chat-input-field"
                />
                <label htmlFor="file-upload">
                    <input
                        type="file"
                        id="file-upload"
                        onChange={handleFileChange}
                        className="chat-file-input"
                        hidden
                    />
                    <i className="fas fa-paperclip"></i>
                </label>
                <button type="submit" className="chat-send-button">
                    <i className="fas fa-paper-plane"></i>
                </button>
            </div>
        </form>
    );
};

export default ChatInput;