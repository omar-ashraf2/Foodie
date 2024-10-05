// SaladVisualizer.tsx
import { Box } from "@mui/material";
import React, { useEffect, useMemo } from "react";

import {
  baseIngredients,
  ingredients,
  protein,
  sauce,
} from "../../constants/ingredients";
import { useSaladContext } from "../../contexts/SaladContext";
import { prefetchImages } from "../../utils/prefetchImages";
import SaladList from "./SaladList";
import SaladListPlaceholder from "./SaladListPlaceholder";

const SaladVisualizer: React.FC = () => {
  const { state } = useSaladContext();

  const allIngredients = useMemo(
    () => [...baseIngredients, ...ingredients, ...protein, ...sauce],
    []
  );

  const categoryMapping = useMemo(
    () => ({
      base: { title: "قاعدة السلطة", ingredients: baseIngredients },
      ingredient: { title: "المحتويات", ingredients },
      protein: { title: "البروتين", ingredients: protein },
      sauce: { title: "الصوص", ingredients: sauce },
    }),
    []
  );

  useEffect(() => {
    const imageUrls = allIngredients.map((ingredient) => ingredient.image);
    prefetchImages(imageUrls);
  }, [allIngredients]);

  const getIngredientDetails = (id: number) =>
    allIngredients.find((item) => item.id === id);

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="70%"
      height="100%"
      p={4}
      overflow="auto"
    >
      {state.ingredients.length === 0 ? (
        <SaladListPlaceholder />
      ) : (
        <SaladList
          categoryMapping={categoryMapping}
          getIngredientDetails={getIngredientDetails}
        />
      )}
    </Box>
  );
};

export default SaladVisualizer;
