import React, { useState } from "react"
import { featured } from "../../data/Data"
import Itemlist from "../../itemlist/Itemlist"; // Correct relative path


const FeaturedCard = () => {
  const [selectedItem, setSelectedItem] = useState(null) // State to track selected item

  const handleCardClick = (name) => {
    setSelectedItem(name) // Set the selected item name
  }

  if (selectedItem) {
    // If an item is selected, show the ItemList component
    return <Itemlist selectedItem={selectedItem} />
  }

  return (
    <div className='content grid5 mtop'>
      {featured.map((items, index) => (
        <div
          className='box'
          key={index}
          onClick={() => handleCardClick(items.name)} // Set the clicked item's name
        >
          <img src={items.cover} alt={items.name} />
          <h4>{items.name}</h4>
          <label>{items.total}</label>
        </div>
      ))}
    </div>
  )
}

export default FeaturedCard
