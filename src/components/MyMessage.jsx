import React from 'react'

const MyMessage = ({ message }) => {

  //check if message sent was an image
  if(message?.attachments?.length > 0) {
    return(
      <img 
      src={message.attachments[0].file}
      alt="message-attachment"
      className="message-image"
      style={{ float: 'right'}}
      />
    )
  }

  return (
    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: 'blue'}}>
      {
      message.text
      }
    </div>
  )
}

export default MyMessage
