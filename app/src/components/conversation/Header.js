import React from 'react';


const ConversationHeader = ({
    title, about, profilePhoto
}) => {
    return ( 
        <div className='conversation-header'>
            <div className='conversation-header-section profile-photo'>
                <img src={profilePhoto} alt='' />
            </div>
            <div className='conversation-header-section about-conversation'>
                
                <div className='conversation-header-left-info'>
                    <h3>{title}</h3>
                    <p>{about}</p>
                </div>

            </div>
            <div className='conversation-header-section conversation-action'>
                <div>
                    <button>
                        <i className="fas fa-video"></i>
                    </button>
                    <button>
                        <i className="fas fa-phone"></i>
                    </button>
                </div>
                <div>
                    <button>
                        <i className="fas fa-ellipsis-v"></i>
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default ConversationHeader;