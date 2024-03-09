import React from 'react';

const ReadIcon = ({ readStatus }) => {
    if (readStatus === "sent") {
        return <i className='fas fa-check' />;
    } else if (readStatus === 'delivered') {
        return <i className='fas fa-check-double' />;
    } else if (readStatus === 'read') {
        return <i className='fas fa-check-double read' />;
    }
}

const FromMe = ({
    text,
    timestamp,
    readStatus
}) => {

    return (
        <div className="message-row me">
            <div className='message-content'>
                <div>
                    <p>{text}</p>
                </div>
                <div>
                    <p>{timestamp}</p>

                    <p>
                        <ReadIcon readStatus={readStatus} />
                    </p>
                </div>
            </div>
        </div>
    );
}

const FromOther = ({
    text,
    timestamp
}) => {
    return (
        <div className="message-row">
            <div className='message-content'>
                <div>
                    <p>{text}</p>
                </div>
                <div>
                    <p>{timestamp}</p>
                </div>
            </div>
        </div>
    );
}

const Message = ({
    sender,
    text,
    timestamp,
    readStatus
}) => {
    if (sender === 'me') {
        return <FromMe text={text} timestamp={timestamp} readStatus={readStatus} />
    } else {
        return <FromOther text={text} timestamp={timestamp} />
    }
}

export default Message;