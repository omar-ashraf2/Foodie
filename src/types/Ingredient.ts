export type Ingredient = {
  id: number;
  name: string;
  category: "base" | "ingredient" | "protein" | "sauce";
  price: number;
  image: string;
  extraPrice?: number;
};
