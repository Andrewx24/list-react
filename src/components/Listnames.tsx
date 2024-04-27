import  { useState } from 'react';
const  Listnames =()  =>{
    const [names, setNames] = useState([]); // This state will hold the list of names
    const [newName, setNewName] = useState(''); // This state will hold the new name to be added
  
    const handleAddName = () => {
      if (newName) { // Check if the newName input is not empty
        setNames([...names, newName]); // Add the new name to the existing list
        setNewName(''); // Reset input field after adding
      }
    };
  
    const handleChange = (event) => {
      setNewName(event.target.value); // Update newName state as the input changes
    };
  
    // Style for the list items to include bullets
    const listStyle = {
      listStyleType: 'disc', // 'disc' for standard bullet points
      marginLeft: '20px' // Adjust spacing to make bullets visible
    };
  
    return (
      <div>
        <input
          type="text"
          value={newName}
          onChange={handleChange}
          placeholder="Enter a name"
        />
        <button onClick={handleAddName}>Add Name</button>
        <ul style={listStyle}>
          {names.map((name, index) => (
            <li key={index}>{name}</li> // Display each name with a bullet point
          ))}
        </ul>
      </div>
    );
  }
  
  export default Listnames;