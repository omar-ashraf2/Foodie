// SaladList.tsx
import { Box, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import { useSaladContext } from "../../contexts/saladContext";
import { Ingredient } from "../../types/Ingredient";

type SaladListProps = {
  categoryMapping: {
    [key: string]: { title: string; ingredients: Ingredient[] };
  };
  getIngredientDetails: (id: number) => Ingredient | undefined;
};

const SaladList: React.FC<SaladListProps> = ({
  categoryMapping,
  getIngredientDetails,
}) => {
  const { state } = useSaladContext();

  const [loadingStatus, setLoadingStatus] = useState<{
    [key: number]: boolean;
  }>({});

  const handleImageLoad = (id: number) => {
    setLoadingStatus((prevStatus) => ({
      ...prevStatus,
      [id]: false,
    }));
  };

  const handleImageError = (id: number) => {
    setLoadingStatus((prevStatus) => ({
      ...prevStatus,
      [id]: false,
    }));
  };

  return (
    <>
      {Object.entries(categoryMapping).map(([category, details]) => {
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
                  <Box
                    key={ingredientDetails.id}
                    position="relative"
                    width={156}
                    height={120}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {loadingStatus[ingredientDetails.id] !== false && (
                      <CircularProgress
                        size={24}
                        sx={{ position: "absolute" }}
                      />
                    )}
                    <img
                      src={ingredientDetails.image}
                      alt={ingredientDetails.name}
                      width={156}
                      height={120}
                      onLoad={() => handleImageLoad(ingredientDetails.id)}
                      onError={() => handleImageError(ingredientDetails.id)}
                      style={{
                        display:
                          loadingStatus[ingredientDetails.id] !== false
                            ? "none"
                            : "block",
                      }}
                    />
                  </Box>
                ) : null;
              })}
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default SaladList;
