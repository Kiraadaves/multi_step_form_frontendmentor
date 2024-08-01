interface Recipe {
  id: number;
  favorite: boolean;
  src: string;
  text1: string;
  text2: string;
  meal: string;
  detailsHeading: string;
  name: string;
}

const recipe1: Recipe[] = [
  {
    id: 0,
    favorite: true,
    src: "/burger.svg",
    text1: "Big and Juicy Wagyu Beef",
    text2: "Cheeseburger",
    meal: "Snack",
    detailsHeading: "Big and Juicy Wagyu Beef",
    name: "wagyu-beef",
  },
  {
    id: 1,
    favorite: false,
    src: "/salmon.svg",
    text1: "Fresh Lime Roasted Salmon with",
    text2: "Ginger Sauce",
    meal: "Fish",
    detailsHeading: "Fresh Lime Roasted Salmon with Ginger Sauce",
    name: "roasted-salmon",
  },
  {
    id: 2,
    favorite: false,
    src: "/pancake.svg",
    text1: "Strawberry Oatmeal Pancake",
    text2: "with Honey Syrup",
    meal: "Breakfast",
    detailsHeading: "Strawberry Oatmeal Pancake",
    name: "oatmeal-pancake",
  },
  {
    id: 3,
    favorite: true,
    src: "/mayonnaise.svg",
    text1: "Fresh and Healthy Mixed",
    text2: "Mayonnaise Salad",
    meal: "Healthy",
    detailsHeading: "Fresh and Healthy Mayonnaise Salad",
    name: "mayonnaise-salad",
  },
  {
    id: 4,
    favorite: false,
    src: "/meatballs.svg",
    text1: "Chicken Meatballs with Cream",
    text2: "Cheese",
    meal: "Meat",
    detailsHeading: "Chicken Meatballs with Cream",
    name: "meatballs",
  },
  {
    id: 5,
    favorite: false,
    src: "/ads.svg",
    text1: "",
    text2: "",
    meal: "",
    detailsHeading: "",
    name: "",
  },
  {
    id: 6,
    favorite: true,
    src: "/pancake.svg",
    text1: "Fruity Pancake with Orange &",
    text2: "Blueberry",
    meal: "Sweet",
    detailsHeading: "Chicken Meatballs with Cream",
    name: "orange-pancakes",
  },
  {
    id: 7,
    favorite: false,
    src: "/chicken.svg",
    text1: "The Best Easy One Pot Chicken",
    text2: "and Rice",
    meal: "Snack",
    detailsHeading: " One Pot Chicken and Rice",
    name: "chicken-rice",
  },
  {
    id: 8,
    favorite: false,
    src: "/pasta.svg",
    text1: "The Creamiest Creamy Chicken",
    text2: "and Bacon Pasta",
    meal: "Noodles",
    detailsHeading: "Creamy Chicken and Bacon Pasta",
    name: "creamy-chicken-pasta",
  },
];

const recipe2: Recipe[] = [
  {
    id: 0,
    favorite: true,
    src: "/recipe1.svg",
    text1: "Mixed Tropical Fruit Salad with",
    text2: "Superfood Boosts",
    meal: "Health",
    detailsHeading: "Mixed Tropical Fruit Salad",
    name: "fruit-salad",
  },
  {
    id: 1,
    favorite: false,
    src: "/recipe2.svg",
    text1: "Big and Juicy Wagyu Beef",
    text2: "Cheeseburger",
    meal: "Western",
    detailsHeading: "Juicy Wagyu Beef Cheeseburger",
    name: "cheeseburger",
  },
  {
    id: 2,
    favorite: true,
    src: "/recipe3.svg",
    text1: "Healthy Japanese Fried Rice with",
    text2: "Asparagus",
    meal: "Healthy",
    detailsHeading: "Healthy Japanese Fried Rice",
    name: "japanese-fried-rice",
  },
  {
    id: 3,
    favorite: false,
    src: "/recipe4.svg",
    text1: "Cauliflower Walnut Vegeterian Taco Meat",
    text2: "",
    meal: "Eastern",
    detailsHeading: "Cauliflower Walnut Vegeterian Taco",
    name: "cauliflower-tacos",
  },
  {
    id: 4,
    favorite: true,
    src: "/recipe5.svg",
    text1: "Rainbow Chicken Salad with",
    text2: "Almond Honey Mustard Dressing",
    meal: "Healthy",
    detailsHeading: "Rainbow Chicken Salad",
    name: "rainbow-chicken-salad",
  },

  {
    id: 5,
    favorite: false,
    src: "/recipe6.svg",
    text1: "Barbecue Spicy Sandwiches",
    text2: "with Chips",
    meal: "Snack",
    detailsHeading: "Barbecue Spicy Sandwiches with Chips",
    name: "barbecue-sandwich",
  },
  {
    id: 6,
    favorite: false,
    src: "/recipe7.svg",
    text1: "Firecracker Vegan Lettuce Wraps-",
    text2: "Spicy!",
    meal: "Seafood",
    detailsHeading: "Firecracker Vegan Lettuce Wraps",
    name: "lettuce-wraps",
  },
  {
    id: 7,
    favorite: true,
    src: "/recipe8.svg",
    text1: "Chicken Ramen Soup with",
    text2: "Mushroom",
    meal: "Japanese",
    detailsHeading: "Chicken Ramen Soup with Mushroom",
    name: "ramen",
  },
];

export const combinedRecipes = [recipe1, recipe2];