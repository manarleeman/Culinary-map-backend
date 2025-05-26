const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const commentRoutes = require('./routes/comments');
const subscribeRoutes = require('./routes/subscribe');
const recipeRoutes = require('./routes/shareRecipe');
const tipRoutes = require('./routes/shareTip');
const videoRoutes = require('./routes/shareVideo');

app.use('/api/comments', commentRoutes);
app.use('/api/subscribe', subscribeRoutes);
app.use('/api/share-recipe', recipeRoutes);
app.use('/api/share-tip', tipRoutes);
app.use('/api/share-video', videoRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log('Server is running and connected to MongoDB');
    });
  })
  .catch((error) => console.error(error));