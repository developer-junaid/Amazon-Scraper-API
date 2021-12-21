// API
const express = require("express");
const request = require("request-promise");
const {
  PRODUCT_DETAILS,
  PRODUCT_REVIEWS,
  PRODUCT_OFFERS,
  PRODUCT_SEARCH,
  ROOT,
} = require("./routes/routes");

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Allow app to parse json

const returnScraperApiUrl = (apiKey) =>
  `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

// Routes

// Base Route
app.get(ROOT, (req, res) => {
  res.send("Welcome to Amazon Scraper API from Junaid.");
});

// Get Product Details
app.get(PRODUCT_DETAILS, async (req, res) => {
  // Get Id from params
  const { productId } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(
      `${returnScraperApiUrl(
        api_key
      )}&url=https://www.amazon.com/dp/${productId}`
    );

    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error);
  }
});

// Get Product Reviews
app.get(PRODUCT_REVIEWS, async (req, res) => {
  // Get Id from params
  const { productId } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(
      `${generateScraperUrl(
        api_key
      )}&url=https://www.amazon.com/product-reviews/${productId}`
    );

    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error);
  }
});

// Get Product Offers
app.get(PRODUCT_OFFERS, async (req, res) => {
  // Get Id from params
  const { productId } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(
      `${returnScraperApiUrl(
        api_key
      )}&url=https://www.amazon.com/gp/offer-listing/${productId}`
    );

    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error);
  }
});

// Get Search Results
app.get(PRODUCT_SEARCH, async (req, res) => {
  // Get Id from params
  const { searchQuery } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(
      `${returnScraperApiUrl(
        api_key
      )}&url=https://www.amazon.com/s?k=${searchQuery}`
    );

    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error);
  }
});

// Start
app.listen(PORT, () => {
  // After app is run
  console.log(`Server running on PORT : ${PORT}`);
});
