const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Vinyl' },
    { name: 'Pin' },
    { name: 'Hat' },
    { name: 'Ticket' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Vinyl Record',
      description:
        "Pink Ranger's newest realease. Vinyl, hand numbered original run.",
      image: 'pinkrangervinyl.png',
      category: categories[0]._id,
      price: 35.00,
      quantity: 50
    },
    {
      name: 'Pin',
      description:
        'Pink Ranger pin. 100% metal, pink 2" diameter.',
      image: 'pinkranger.jpeg',
      category: categories[1]._id,
      price: 2.99,
      quantity: 100
    },
    {
      name: 'Trucker Hat',
      category: categories[2]._id,
      description:
        'Pink Ranger Trucker Hat. Snapback, pink bill, white front panel, pink mesh.',
      image: 'pinkrangerhat.jpeg',
      price: 20.00,
      quantity: 30
    },
    {
      name: 'Concert Ticket',
      category: categories[3]._id,
      description:
        'Fee-free ticket to see Pink Ranger at Globe Hall in Denver, CO.',
      image: 'pinkticket.png',
      price: 20.00,
      quantity: 50
    },
    {
      name: 'Vinyl Record',
      description:
        "ChitChat's self titled CHITCHAT. Vinyl, White Edition.",
      image: 'chitchatvinyl.png',
      category: categories[0]._id,
      price: 35.00,
      quantity: 50
    },
    {
      name: 'Pin',
      description:
        'ChitChat pin. 100% metal, yellow 1" diameter.',
      image: 'chitchatpin.jpeg',
      category: categories[1]._id,
      price: 1.99,
      quantity: 100
    },
    {
      name: 'Trucker Hat',
      category: categories[2]._id,
      description:
        'ChitChat Trucker Hat. Snapback, red bill white front panel, blue mesh.',
      image: 'chitchathatjpeg.jpeg',
      price: 18.00,
      quantity: 50
    },
    {
      name: 'Concert Ticket',
      category: categories[3]._id,
      description:
        'Fee-free ticket to see ChitChat at The Gothic Theater in Denver, CO.',
      image: 'chitchatticket.png',
      price: 30.00,
      quantity: 50
    },
    {
      name: 'Vinyl Record',
      description:
        "Amzy's Beast in the Bottle Limited Edition Vinyl.",
      image: 'amzyvinyl.png',
      category: categories[0]._id,
      price: 35.00,
      quantity: 50
    },
    {
      name: 'Pin',
      description:
        'Amzy pin. 100% metal, White 1.5" diameter.',
      image: 'amzypin.jpeg',
      category: categories[1]._id,
      price: 1.99,
      quantity: 100
    },
    {
      name: 'Trucker Hat',
      category: categories[2]._id,
      description:
        'Amzy Trucker Hat. Snapback, black bill, white front panel, black mesh.',
      image: 'amzyhat.png',
      price: 18.00,
      quantity: 20
    },
    {
      name: 'Concert Ticket',
      category: categories[3]._id,
      description:
        'Fee-free ticket to see Amzy at the Blue Bird Theater in Denver, CO.',
      image: 'amzyticket.png',
      price: 25.00,
      quantity: 50
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    username: 'pwashington',
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
    username: 'eholt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
