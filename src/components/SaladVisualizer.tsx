import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import SaladImage from "../assets/salad.png";
import {
  baseIngredients,
  ingredients,
  protein,
  sauce,
} from "../constants/ingredients";
import { useSaladContext } from "../contexts/SaladContext";
import { Ingredient } from "../types/Ingredient";
import { prefetchImages } from "../utils/prefetchImages";

const allIngredients: Ingredient[] = [
  ...baseIngredients,
  ...ingredients,
  ...protein,
  ...sauce,
];

const categoryMapping = {
  base: { title: "قاعدة السلطة", ingredients: baseIngredients },
  ingredient: { title: "المحتويات", ingredients: ingredients },
  protein: { title: "البروتين", ingredients: protein },
  sauce: { title: "الصوص", ingredients: sauce },
};

const SaladVisualizer: React.FC = () => {
  const { state } = useSaladContext();

  useEffect(() => {
    const imageUrls = allIngredients.map((ingredient) => ingredient.image);
    prefetchImages(imageUrls);
  }, []);

  const getIngredientDetails = (id: number) =>
    allIngredients.find((item) => item.id === id);

  const SaladListPlaceholder = () => (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <Box width="192px" height="176px" mb={2}>
        <img
          src={SaladImage}
          alt="Salad Bowl"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>
      <Typography variant="h5" align="center">
        ابدأ بتحضير طبق <br /> السلطة الخاص بك!
      </Typography>
    </Box>
  );

  const SaladList = () =>
    Object.entries(categoryMapping).map(([category, details]) => {
      const ingredientsInCategory = state.ingredients.filter(
        (ingredient) => ingredient.category === category
      );
      if (ingredientsInCategory.length === 0) return null;
      return (
        <Box
          key={category}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          mb={2}
          width="100%"
        >
          <Typography
            variant="h6"
            component="h2"
            mb={2}
            fontWeight="medium"
            width="100%"
            fontSize="16px"
          >
            {details.title}
          </Typography>
          <Box
            display="flex"
            flexWrap="wrap"
            gap="16px"
            justifyContent="flex-start"
          >
            {ingredientsInCategory.map((ingredient) => {
              const ingredientDetails = getIngredientDetails(ingredient.id);
              return ingredientDetails ? (
                <Box key={ingredientDetails.id}>
                  <img
                    src={ingredientDetails.image}
                    alt={ingredientDetails.name}
                    width={156}
                    height={120}
                  />
                </Box>
              ) : null;
            })}
          </Box>
        </Box>
      );
    });

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
        <SaladList />
      )}
    </Box>
  );
};

export default SaladVisualizer;
