import React from "react";
const ListGroup = (props) => {
  const { items, valueProperty, onItemSelect, selectedItems, textProperty } = props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={item === selectedItems ? "list-group-item active" : "list-group-item"}>
          {item[textProperty]}
          </li>
      ))}
      </ul>
  );
};
ListGroup.defaultProps = {
   textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
