const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    title: "Pick-up",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    title: "Soft Drinks",
  },
  {
    image: require("../assets/images/bread.png"),
    title: "Bakery Items",
  },
  {
    image: require("../assets/images/fast-food.png"),
    title: "Fast Foods",
  },
  {
    image: require("../assets/images/deals.png"),
    title: "Deals",
  },
  {
    image: require("../assets/images/coffee.png"),
    title: "Coffee & Tea",
  },
  {
    image: require("../assets/images/desserts.png"),
    title: "Desserts",
  },
];

const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian"],
    price: "$",
    reviews: 700,
    rating: 4.9,
  },
];

const tabs = [
  {
    icon: "home",
    text: "Home",
  },
  {
    icon: "search",
    text: "Browse",
  },
  {
    icon: "shopping-bag",
    text: "Grocery",
  },
  {
    icon: "receipt",
    text: "Orders",
  },
  {
    icon: "user",
    text: "Account",
  },
];

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Tandoori Chicken",
    description:
      "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
    price: "$19.20",
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
  {
    title: "Chilaquiles",
    description:
      "Chilaquiles with cheese and sauce. A delicious Mexican dish 🇲🇽",
    price: "$14.50",
    image:
      "https://assets.epicurious.com/photos/5a9ecb6a9d7f7965083147b4/4:3/w_4444,h_3333,c_limit/eggshop-chilaquiles-recipe-HC-030618.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
    price: "$21.50",
    image:
      "https://healthyfitnessmeals.com/wp-content/uploads/2020/05/instagram-In-Stream_Square___Low-carb-Caesar-salad-4.jpg",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
];

export { items, localRestaurants, tabs, foods };
