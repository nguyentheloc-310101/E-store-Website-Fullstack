import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'The Loc',
      email: 'theloc@gmail.com',
      password: bcrypt.hashSync('123456', 8),
      isAdmin: true,
    },
    {
      name: 'Customer 1',
      email: 'customer1@gmail.com',
      password: bcrypt.hashSync('123456', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Drew on smile',
      category: 'Shirts',
      image: '/images/JB.jpg',
      price: 120,
      countInStock: 0,
      brand: 'Drew',
      rating: 4,
      numReviews: 10,
      description: 'high quality product',
    },

    {
      name: 'Adidas CRD',
      category: 'Shirts',
      image: '/images/addi.jpg',
      price: 200,
      countInStock: 20,
      brand: 'Adidas',
      rating: 3,
      numReviews: 10,
      description: 'high quality product',
    },

    {
      name: 'Off_white Mid-Season',
      category: 'Shirts',
      image: '/images/off.jpg',
      price: 250,
      countInStock: 30,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },

    {
      name: 'Balenciaga Revenue',
      category: 'Shirts',
      image: '/images/off.jpg',
      price: 120,
      countInStock: 21,
      brand: 'Balenciaga',
      rating: 4,
      numReviews: 10,
      description: 'high quality product',
    },

    {
      name: 'Givenchy kinychi',
      category: 'Shirts',
      image: '/images/JB.jpg',
      price: 260,
      countInStock: 28,
      brand: 'Givenhcy',
      rating: 4.5,
      numReviews: 12,
      description: 'high quality product',
    },

    {
      name: 'Basic Stussy  2018',
      category: 'Shirts',
      image: '/images/addi.jpg',
      price: 230,
      countInStock: 32,
      brand: 'Stussy',
      rating: 4.5,
      numReviews: 20,
      description: 'high quality product',
    },
  ],
};
export default data;
