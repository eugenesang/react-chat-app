import React from 'react';

const ConversationCard = ({
    title, lastMessage, id, date, onlineState, chatThumbnail, title
}) => {
    return ( <article className='conversation-card'>
        <div className='chat-card-right'>
            <img src={chatThumbnail} alt="chat-thumbnail" />
        </div>
        <div className="chat-card-left" >
            <div className='top'>
                <h5>{title}</h5>
            </div>
        </div>
    </article> );
}
 
export default ConversationCard;