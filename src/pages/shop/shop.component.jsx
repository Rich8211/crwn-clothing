import React, { useState } from "react";
import ShopData from "../../crwn-clothing_sct6_local_images/shop.data";
import CollectionPreview from "../../components/preview-collection/collection-preview";

const ShopPage = () => {
  const [collections, setCollections] = useState(ShopData);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
