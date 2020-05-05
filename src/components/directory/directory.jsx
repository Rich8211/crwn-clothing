import React, { useState } from "react";
import { useSelector } from "react-redux";

import MenuItem from "../menu-item/menu-item";

import { selectDirectorySections } from "../../redux/directory/directory.selector";
import "./directory.scss";

const Directory = () => {
  const sections = useSelector((state) => selectDirectorySections(state));
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
