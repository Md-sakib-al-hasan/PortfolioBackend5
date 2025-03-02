import { allarrayobject } from "./project.interface";

export const updateArrayItems = (array: allarrayobject[], newItems: allarrayobject[]): allarrayobject[] => {
    // Iterate over each new item
    newItems.forEach((newItem) => {
      const existingIndex = array.findIndex((item) => item.title === newItem.title);
  
      if (existingIndex !== -1) {
        // Item exists, update it
        array[existingIndex] = newItem;
      } else {
        // Item doesn't exist, add it to the array
        array.push(newItem);
      }
    });
  
    return array;
  };
