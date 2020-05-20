import React from "react";
import CollectionItem from "../collection-item/collection-item";
import { withRouter } from "react-router-dom";
import "./collection-preview.scss";

const CollectionPreview = ({ title, items, history, match }) => {
  return (
    <div
      className="collection-preview"
      onClick={() => history.push(`${match.url}${title.toLowerCase()}`)}
    >
      <h1 className="collection-title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
