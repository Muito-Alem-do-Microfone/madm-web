import React from 'react'

export default function AnnouncementCard(props) {

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      padding: '10px',
      margin: '10px'
    }}>
      <h3>{props.title}</h3>
      <h3>{props.description}</h3>
      <h3>{props.genre}</h3>
      <h3>User/Group Name</h3>
    </div>
  );
}