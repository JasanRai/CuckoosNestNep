import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Jasan",
      email: "cuckoosadmin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Rai",
      email: "rai@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "Black & Grey Checkered Shirt",
      category: "Shirts",
      image: "/images/checkeredShirt.jpg",
      price: 120,
      brand: "Checkered",
      rating: 4.5,
      countInStock: 10,
      numReviews: 10,
      description: "high quality products",
    },
    {
      name: "Grey Checkered Shirt",
      category: "Shirts",
      image: "/images/checkeredShirt.jpg",
      price: 120,
      brand: "Checkered",
      countInStock: 20,
      rating: 4.5,
      numReviews: 10,
      description: "high quality products",
    },
    {
      name: "Black Checkered Shirt",
      category: "Shirts",
      image: "/images/checkeredShirt.jpg",
      price: 120,
      brand: "Checkered",
      countInStock: 0,
      rating: 4.5,
      numReviews: 10,
      description: "high quality products",
    },
    {
      name: "Orange Jacket",
      category: "Jacket",
      image: "/images/OrangeJacket.jpg",
      price: 150,
      brand: "Nike",
      countInStock: 25,
      rating: 4.0,
      numReviews: 10,
      description: "high quality products",
    },
    {
      name: "Dark Blue Denim Jacket",
      category: "Jacket",
      image: "/images/DenimJacket.jpg",
      price: 180,
      brand: "Denim",
      countInStock: 50,
      rating: 4.5,
      numReviews: 10,
      description: "high quality products",
    },
  ],
};
export default data;
