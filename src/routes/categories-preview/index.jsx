import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { CategoryPreview } from "../../components/CategoryPreview";
import { selectCategoriesMap } from "../../store/categories/selector";

export const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

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
