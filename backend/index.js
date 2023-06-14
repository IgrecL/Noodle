const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Set up middleware
app.use(bodyParser.json());

// Activer le middleware CORS
app.use(cors());

// Connect to MongoDB
mongoose
    .connect('mongodb+srv://YL:Noodle1234@noodle-cluster.15iq5bd.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Create a model based on the schema
const CourseModel = require('./models/Course');
const Course = require('./models/Course');

const LinkModel = require('./models/Link');
const Link = require('./models/Link');

// Define a route to retrieve all items from the database
app.get('/courses', (req, res) => {
  CourseModel.find({})
    .then((courses) => {
      res.json(courses);
    })
    .catch((error) => {
      console.error('Error retrieving items:', error);
      res.status(500).send('Error retrieving items');
    });
});

// Define a route to add a new item to the database
app.post('/courses', async (req, res) => {
  try {
    const { title, shortTitle, semester, UE, image, description, authors } = req.body;

    const newCourse = new CourseModel({
      title,
      shortTitle,
      semester,
      UE,
      image,
      description,
      authors,
    });

    await newCourse.save();
    res.send('Item saved successfully');
  } catch (error) {
    console.error('Error saving item:', error);
    res.status(500).send('Error saving item');
  }
});

// Search by value of UE
app.get('/courses/:ue', async (req, res) => {
  try {
    const ue = req.params.ue;
    const courses = await Course.find({ UE: ue });
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des objets.' });
  }
});

// Search query for search bar
app.get('/search/:shortTitle', async (req, res) => {
  try {
    const shortTitle = req.params.shortTitle;
    const courses = await Course.find({ shortTitle: shortTitle });
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "L'objet recherché n'existe pas."});
  }
});

// Add new links
app.post('/links', async (req, res) => {
  try {
    const { link, main, shortTitle } = req.body;

    const newLink = new LinkModel({
      link,
      main,
      shortTitle,
    });

    await newLink.save();
    res.send('Item saved successfully');
  } catch (error) {
    console.error('Error saving item:', error);
    res.status(500).send('Error saving item');
  }
});

// Search links by subject
app.get('/links/:subject', async (req, res) => {
  try {
    const subject = req.params.subject;
    const links = await Link.find({ shortTitle: subject });
    res.json(links);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des objets.' });
  }
});

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});