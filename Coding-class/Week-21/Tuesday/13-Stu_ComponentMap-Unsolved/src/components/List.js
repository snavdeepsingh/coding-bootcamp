import React from "react";

const List = props => (
  <ul className="list-group">
    {props.groceries.map(item => <li className="list-group" 
                                      key={item.id}>
                                      {item.purchased === false ? (item.name) : ""}
                                    
                                      </li>
            )}

  </ul>
);

export default List;
