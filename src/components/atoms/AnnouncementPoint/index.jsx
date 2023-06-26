const AnnouncementPoint = (props) => {

  return (
    <div className='root' onClick={props.onClick} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      cursor: 'pointer',
      backgroundColor: 'red',
      color: '#000',
      fontSize: '20px',
    }}>
      !
    </div>
  )
}

export default AnnouncementPoint