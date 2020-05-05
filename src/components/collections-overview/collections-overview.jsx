import React from "react";

import { useSelector } from "react-redux";

import CollectionPreview from "../../components/collection-preview/collection-preview";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import "./collections-overview.scss";

const CollectionsOverview = () => {
  const collections = useSelector((state) =>
    selectCollectionsForPreview(state)
  );

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
