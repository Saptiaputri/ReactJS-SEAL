import React, { useState } from "react";
import Button from "./Button";

const ListItem = ({tasklist}) => {
    return (
        <div>
        <ul>
          {tasklist.data.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
}

export default ListItem;