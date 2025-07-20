const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/images', express.static('images'));

const products = [
  { id: 1, name:'Double Crunch' , description:'6 pieces of fried chicken without wings + 2 medium basmati rice + 2 medium salad + 2 bread' , price:'350.00 EGP' ,image: "http://localhost:5000/images/img1.png" },
  { id: 2, name: 'BoomBox Single' ,description:'Pan Chicken Burger Single Sandwich or Beef Burger Single + Chicken Piece + Medium Coleslaw + Drink + Cup of Rice' , price:'155.00 EGP' ,   image: "http://localhost:5000/images/img2.png" },
  { id: 3, name: 'Hormone Elsada ( 2 pieces)' ,description: '2 pieces of fried chicken without wings + rice + coleslaw bread' , price:'140.00 EGP' , image: "http://localhost:5000/images/img3.png" },
  { id: 4,name: ' Happiness Rocket 2' ,description: '2 burger or chicken wrap sandwiches with 2 drinks and 2 fries' , price:'250.00 EGP' , image: "http://localhost:5000/images/img4.png" },
  { id: 5,name: ' Offer Fatah' ,description: 'Broast fattah + boneless fattah + fattah strips + 3 sauce' , price:'360.00 EGP' , image: "http://localhost:5000/images/img5.png" },
  { id: 6,name: 'Offer Koshary' ,description: '3 koshary' , price:'320.00 EGP' , image: "http://localhost:5000/images/img6.png" },
];

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.length + 1;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});
