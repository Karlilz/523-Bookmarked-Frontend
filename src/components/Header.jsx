import React from 'react'

const Header = () => {
  const headerStyle = {display: 'flex',alignItems: 'center'};
  const iconStyle = {width: '90px', height: '90px'};
  return (
    <div style={headerStyle}>
      <img style={iconStyle} src="/images/Bookmark-Icon.png" alt="DevNav Icon" />
      <h1 style={{ textAlign: 'left', fontSize: '45px', textTransform: 'uppercase', marginLeft: '10px' }}>DevNav</h1>
    </div>
  );
};



export default Header