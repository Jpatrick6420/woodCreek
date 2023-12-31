const rawProducts = [
  {
    id: 1,
    name: "Carolina Reaper  Turkey ",
    size: "3oz",
    price: 9.99,
    salePrice: 8.99,
    isOnSale: false,
    image:
      "https://woodcreekbbq.com/wp-content/uploads/2020/11/carolina-reaper-turkey-jerky.jpg",
    isInStock: true,
    rating: null,
    releaseDate: new Date(2020, 10, 20),
    type: "turkey jerky",
    typeIcon: "🦃",
    glutenFree: true,
  },
  {
    id: 2,
    name: "Korean BBQ  Turkey ",
    size: "3oz",
    price: 9.99,
    salePrice: 8.99,
    isOnSale: false,
    image:
      "https://woodcreekbbq.com/wp-content/uploads/2020/11/korean-bbq-turkey-jerky.jpg",
    isInStock: true,
    rating: null,
    releaseDate: new Date(2020, 10, 20),
    type: "turkey jerky",
    typeIcon: "🦃",
    glutenFree: true,
  },
  {
    id: 3,
    name: "Southwest BBQ Style  Turkey ",
    size: "3oz",
    price: 9.99,
    salePrice: 8.99,
    isOnSale: false,
    image:
      "https://woodcreekbbq.com/wp-content/uploads/2020/11/southwest-bbq-turkey-jerky.jpg",
    isInStock: false,
    rating: null,
    releaseDate: new Date(2021, 10, 20),
    type: "turkey jerky",
    typeIcon: "🦃",
    glutenFree: true,
  },
  {
    id: 4,
    name: "Spicy Sweet  Turkey ",
    size: "3oz",
    price: 9.99,
    salePrice: 8.99,
    isOnSale: false,
    image:
      "https://woodcreekbbq.com/wp-content/uploads/2020/11/spicy-sweet-turkey-jerky-1.jpg",
    isInStock: true,
    rating: null,
    releaseDate: new Date(2023, 11, 1),
    type: "turkey jerky",
    typeIcon: "🐄",
    glutenFree: true,
  },
  {
    id: 5,
    name: "Teriaki Turkey ",
    size: "3oz",
    price: 9.99,
    salePrice: 8.99,
    isOnSale: false,
    image:
      "https://woodcreekbbq.com/wp-content/uploads/2020/11/teriyaki-turkey-jerky.jpg",
    isInStock: true,
    rating: null,
    releaseDate: new Date(2022, 10, 20),
    type: "turkey jerky",
    typeIcon: "🐖",
    glutenFree: true,
  },
  {
    id: 6,
    name: "Boysenberry  Briskett ",
    size: "3oz",
    price: 9.99,
    salePrice: 8.99,
    isOnSale: false,
    image:
      "https://woodcreekbbq.com/wp-content/uploads/2020/11/boysenberrybeefjerky.png",
    isInStock: true,
    rating: null,
    releaseDate: new Date(2022, 10, 20),
    type: "beef jerky",
    typeIcon: "🐄",
    glutenFree: true,
  },
  {
    id: 7,
    name: "Carolina Reaper  Brisket ",
    size: "3oz",
    price: 9.99,
    salePrice: 8.99,
    isOnSale: false,
    image:
      "https://woodcreekbbq.com/wp-content/uploads/2020/11/carolina-reaper-beef-jerky.jpg",
    isInStock: true,
    rating: null,
    releaseDate: new Date(2022, 10, 20),
    type: "beef jerky",
    typeIcon: "🐄",
    glutenFree: true,
  },
  {
    id: 8,
    name: "Dill Pickle  Brisket",
    size: "3oz",
    price: 9.99,
    salePrice: 8.99,
    isOnSale: false,
    image:
      "https://woodcreekbbq.com/wp-content/uploads/2020/11/dill-pickle-beef-jerky.jpg",
    isInStock: true,
    rating: null,
    releaseDate: new Date(2022, 10, 20),
    type: "beef jerky",
    typeIcon: "🐄",
    glutenFree: true,
  },
  {
    id: 9,
    name: "Applewood  Smoked  Bacon",
    size: "3oz",
    price: 9.99,
    salePrice: 8.99,
    isOnSale: true,
    image:
      "https://woodcreekbbq.com/wp-content/uploads/2020/11/applewood-smoke-bacon-jerky.jpg",
    isInStock: true,
    rating: null,
    releaseDate: new Date(2022, 10, 20),
    type: "bacon jerky",
    typeIcon: "🐖",
    glutenFree: true,
  },
  {
    id: 10,
    name: "Honey and Pepper  Bacon",
    size: "3oz",
    price: 9.99,
    salePrice: 8.99,
    isOnSale: false,
    image:
      "https://woodcreekbbq.com/wp-content/uploads/2020/11/honey-and-pepper-bacon-jerky.jpg",
    isInStock: true,
    rating: null,
    releaseDate: new Date(2022, 10, 20),
    type: "bacon jerky",
    typeIcon: "🐖",
    glutenFree: true,
  },
  {
    id: 11,
    name: "Teriaki Beef Brisket",
    size: "3oz",
    price: 9.99,
    salePrice: 8.99,
    isOnSale: false,
    image:
      "https://woodcreekbbq.com/wp-content/uploads/2020/11/teriyaki-beef-jerky.jpg",
    isInStock: true,
    rating: null,
    releaseDate: new Date(2022, 10, 20),
    type: "beef jerky",
    typeIcon: "🐄",
    glutenFree: true,
  },
  {
    id: 12,
    name: "Western BBQ",
    size: "3oz",
    price: 9.99,
    salePrice: 8.99,
    isOnSale: false,
    image:
      "https://woodcreekbbq.com/wp-content/uploads/2020/11/western-bbq-bacon-jerky.jpg",
    isInStock: true,
    rating: null,
    releaseDate: new Date(2022, 10, 20),
    type: "beef jerky",
    typeIcon: "🐄",
    glutenFree: true,
  },
];

const products = rawProducts.map((product) => ({
  ...product,
  releaseDate: product.releaseDate.toString(),
}));

export default products;
