// import React from "react";
// import { v4 as uuid } from "uuid";

// function ItemForm(props) {
//   return (
//     <form className="NewItem">
//       <label>
//         Name:
//         <input type="text" name="name" />
//       </label>

//       <label>
//         Category:
//         <select name="category">
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </label>

//       <button type="submit">Add to List</button>
//     </form>
//   );
// }

// export default ItemForm;

import React, { useState } from "react";
import { v4 as uuid } from "uuid"; // Import uuid for generating unique IDs

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce"); // Initial value "Produce"

  function handleNameChange(e) {
    setItemName(e.target.value);
  }

  function handleCategoryChange(e) {
    setItemCategory(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Validate input if needed
    if (!itemName.trim()) {
      alert("Please enter an item name");
      return;
    }

    const newItem = {
      id: uuid(), // Generate unique ID using uuid
      name: itemName,
      category: itemCategory,
    };

    // Pass new item object to parent component via callback prop
    onItemFormSubmit(newItem);

    // Clear input fields after form submission
    setItemName("");
    setItemCategory("Produce"); // Reset category to initial value
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={itemName}
          onChange={handleNameChange}
          placeholder="Enter item name"
          required // HTML5 validation: required field
          aria-label="Item Name" // Accessibility: label for screen readers
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={itemCategory}
          onChange={handleCategoryChange}
          aria-label="Item Category" // Accessibility: label for screen readers
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;


