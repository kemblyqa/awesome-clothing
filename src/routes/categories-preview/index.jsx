import React, { Fragment, useContext } from "react";

import { CategoryPreview } from "../../components/CategoryPreview";
import { CategoriesContext } from "../../contexts/CategoriesContext";

export const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          products={categoriesMap[title]}
        />
      ))}
    </Fragment>
  );
};
