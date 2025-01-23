import React from 'react';

export const Pricing = () => {
  // Define inline styles as JavaScript objects
  const formStyle = {
    display: 'flex',
    flexDirection: 'column', // Set form to vertical layout
    gap: '15px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px', // Optional: Limit the width
    margin: '0 auto', // Center horizontally
  };

  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    padding: '10px 0', // Adjust padding for vertical alignment
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    alignSelf: 'center', // Center the button horizontally
  };

  const iconStyle = {
    marginRight: '5px',
  };

  return (
    <div>
      <form style={formStyle}>
        <div style={boxStyle}>
          <label>Destination</label>
          <input type="text" placeholder="Location" />
        </div>
        <div style={boxStyle}>
          <label>Transport Type</label>
          <input type="text" placeholder="e.g.waterways" />
        </div>
        <div style={boxStyle}>
          <label>Time Duration</label>
          <input type="text" placeholder="In days" />
        </div>
        <div style={boxStyle}>
          <h4>Advanced Filter</h4>
        </div>
        <button style={buttonStyle}>
          <i className="fa fa-search" style={iconStyle}></i> Search
        </button>
      </form>
    </div>
  );
};
