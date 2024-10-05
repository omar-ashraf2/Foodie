import { Ingredient } from "../types/Ingredient";

export const categoryTitles: { [key in Ingredient["category"]]: string } = {
  base: "القاعدة الرئيسية",
  ingredient: "المكونات",
  protein: "البروتين",
  sauce: "الصوص",
};

export const sizeMessages = {
  small: "قم باختيار مكونات السلطة ( 5 مكونات )",
  medium: "قم باختيار مكونات السلطة ( 6 مكونات )",
  large: "قم باختيار مكونات السلطة ( 8 مكونات )",
};

export const validationMessages = {
  size: "قم باختيار حجم السلطة",
  base: "قم باختيار قاعدة السلطة الرئيسية (مكونين على الأكثر)",
  ingredient: sizeMessages,
  protein: "قم باختيار بروتين واحد للسلطة الخاصة بك",
  sauce: "قم باختيار صوص واحد للسلطة الخاصة بك",
};
