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
    const newItem = {
      id: uuid(), // Generate unique ID using uuid
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem); // Pass new item object to parent component
    setItemName(""); // Clear input fields after form submission
    setItemCategory("Produce"); // Reset category to initial value
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleNameChange}
          placeholder="Enter item name"required/>
      </label>

      <label>
        Category:
        <select
          name="category"
          value={itemCategory}
          onChange={handleCategoryChange} >
            
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

