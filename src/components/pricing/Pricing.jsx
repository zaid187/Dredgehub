import React, { useState } from 'react';

export const Pricing = () => {
  // Define inline styles
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto',
  };

  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    padding: '10px 0',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    alignSelf: 'center',
  };

  // State for form inputs
  const [formData, setFormData] = useState({
    destination: '',
    transportType: '',
    duration: '',
  });

  // State for error handling and success
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    setSuccessMessage(null);  // Reset success message on new submission
    setError(null);  // Reset previous error

    try {
      // Send POST request to the backend to save the item and send email
      const response = await fetch('http://localhost:5000/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),  // Send the form data as JSON
      });

      const responseData = await response.json();

      if (response.ok) {
        setSuccessMessage('Item added successfully!');  // Set success message
        setFormData({ destination: '', transportType: '', duration: '' });  // Clear form fields
      } else {
        setError(responseData.error || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while submitting the form. Please try again.');
    }
  };

  return (
    <div>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div style={boxStyle}>
          <label>Destination</label>
          <input
            type="text"
            name="destination"
            placeholder="Enter a location (e.g., Paris)"
            value={formData.destination}
            onChange={handleChange}
          />
        </div>
        <div style={boxStyle}>
          <label>Transport Type</label>
          <input
            type="text"
            name="transportType"
            placeholder="e.g., Car, Train, Plane"
            value={formData.transportType}
            onChange={handleChange}
          />
        </div>
        <div style={boxStyle}>
          <label>Duration</label>
          <input
            type="text"
            name="duration"
            placeholder="e.g., 2 hours, 5 hours"
            value={formData.duration}
            onChange={handleChange}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          <i className="fa fa-search" style={{ marginRight: '5px' }}></i> Submit
        </button>
      </form>

      {/* Display success or error message */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};