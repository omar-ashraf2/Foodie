import { Ingredient } from "../types/Ingredient";

const baseUrl = import.meta.env.VITE_SALAD_API_URL;

export const baseIngredients: Ingredient[] = [
  { id: 1, name: "خس", category: "base", price: 5, image: `${baseUrl}Lettuce.svg` },
  { id: 2, name: "جرجير", category: "base", price: 8, image: `${baseUrl}Arugula.svg` },
  { id: 3, name: "مكرونة", category: "base", price: 12, image: `${baseUrl}Pasta.svg` },
];

export const ingredients: Ingredient[] = [
  { id: 4, name: "بطاطس", category: "ingredient", price: 10, image: `${baseUrl}Potato.svg` },
  { id: 5, name: "ذرة حلوة", category: "ingredient", price: 8, image: `${baseUrl}SweetCorn.svg` },
  { id: 6, name: "كوسة", category: "ingredient", price: 7, image: `${baseUrl}Zucchini.svg` },
  { id: 7, name: "بنجر", category: "ingredient", price: 6, image: `${baseUrl}Beet.svg` },
  { id: 8, name: "باذنجان", category: "ingredient", price: 9, image: `${baseUrl}Eggplant.svg` },
  { id: 9, name: "فلفل", category: "ingredient", price: 8, image: `${baseUrl}Pepper.svg` },
  { id: 10, name: "بروكلي", category: "ingredient", price: 15, image: `${baseUrl}Broccoli.svg` },
  { id: 11, name: "طماطم", category: "ingredient", price: 6, image: `${baseUrl}Tomato.svg` },
  { id: 12, name: "يقطين", category: "ingredient", price: 18, image: `${baseUrl}Pumpkin.svg`, extraPrice: 8 },
  { id: 13, name: "خيار", category: "ingredient", price: 5, image: `${baseUrl}Cucumber.svg` },
  { id: 14, name: "بصل", category: "ingredient", price: 4, image: `${baseUrl}Onion.svg` },
  { id: 15, name: "كرنب", category: "ingredient", price: 7, image: `${baseUrl}Cabbage.svg` },
  { id: 16, name: "بقدونس", category: "ingredient", price: 4, image: `${baseUrl}Parsley.svg` },
  { id: 17, name: "زنجبيل", category: "ingredient", price: 5, image: `${baseUrl}Ginger.svg` },
  { id: 18, name: "ملفوف بنفسجي", category: "ingredient", price: 9, image: `${baseUrl}RedCabbage.svg` },
  { id: 19, name: "جزر", category: "ingredient", price: 6, image: `${baseUrl}Carrot.svg` },
  { id: 20, name: "جبنة", category: "ingredient", price: 15, image: `${baseUrl}Cheese.svg` },
  { id: 21, name: "توست محمص", category: "ingredient", price: 8, image: `${baseUrl}Toast.svg` },
  { id: 22, name: "فول", category: "ingredient", price: 10, image: `${baseUrl}Beans.svg` },
  { id: 23, name: "مشروم", category: "ingredient", price: 20, image: `${baseUrl}Mushroom.svg`, extraPrice: 5},
  { id: 24, name: "قرنبيط", category: "ingredient", price: 15, image: `${baseUrl}Cauliflower.svg`, extraPrice: 8},
];

export const protein: Ingredient[] = [
  { id: 25, name: "بيض", category: "protein", price: 10, image: `${baseUrl}Eggs.svg` },
  { id: 26, name: "لحم", category: "protein", price: 20, image: `${baseUrl}Meat.svg` },
  { id: 27, name: "دجاج مشوي", category: "protein", price: 18, image: `${baseUrl}Chicken.svg` },
  { id: 28, name: "رنجة", category: "protein", price: 22, image: `${baseUrl}Renga.svg` },
];

export const sauce: Ingredient[] = [
  { id: 29, name: "رانش", category: "sauce", price: 6, image: `${baseUrl}Ranch.svg` },
  { id: 30, name: "إيطالي", category: "sauce", price: 8, image: `${baseUrl}Italian.svg` },
  { id: 31, name: "بيستو", category: "sauce", price: 12, image: `${baseUrl}Pesto.svg` },
  { id: 32, name: "ليمون", category: "sauce", price: 5, image: `${baseUrl}LemonSauce.svg` },
  { id: 33, name: "مستردة", category: "sauce", price: 7, image: `${baseUrl}Mustard.svg` },
  { id: 34, name: "سويت شيلي", category: "sauce", price: 9, image: `${baseUrl}SweetChili.svg` },
];
