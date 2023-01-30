const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Vinyl Record',
      description:
        "Pink Ranger's newest realease. 100% vinyl, 100% awesome.",
      image: 'pinkrangervinyl.png',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Pin',
      description:
        'Pink Ranger pin. 100% metal, 100% awesome.',
      image: 'pinkranger.jpeg',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Trucker Hat',
      category: categories[1]._id,
      description:
        'Pink Ranger Trucker Hat. 100% cotton, 100% awesome.',
      image: 'pinkrangerhat.jpeg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Concert Ticket',
      category: categories[1]._id,
      description:
        'Fee-free ticket to see Pink Ranger at Globe Hall in Denver, CO.',
      image: 'pinkticket.png',
      price: 3.99,
      quantity: 50
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
