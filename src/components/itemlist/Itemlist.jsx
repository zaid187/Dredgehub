import React from "react"
import "./itemlist.css" // Import the CSS file
import { list } from '../data/Data.js';

const Itemlist = ({ selectedItem }) => {
  // Filter the data based on the selected type
  const filteredItems = list.filter(item => item.type === selectedItem)

  return (
    <div className="itemlist-container">
      <h1 className="itemlist-title">{selectedItem}</h1> {/* Display the selected category */}
      {filteredItems.length > 0 ? (
        <ul className="itemlist">
          {filteredItems.map((item) => (
            <li key={item.id} className="itemlist-item">
              <div className="itemlist-details">
                <img src={item.cover} alt={item.name} className="itemlist-image" />
                <div>
                  <h2>{item.name}</h2>
                  <p>Location: {item.location}</p>
                  <p>Price: {item.price}</p>
                  <p>Category: {item.category}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items found for {selectedItem}</p>
      )}
    </div>
  )
}

export default Itemlist
