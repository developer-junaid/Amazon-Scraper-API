# Amazon Data Scraper API with ScraperAPI

#### Learned from JavaScript Mastery: https://youtu.be/be9sHQ7xqo0

## Steps

- Initialize package.json `npm init -y`
- change "test" script to "start": "node index.js" script
- install dependencies `express request request-promise nodemon`
- add "dev": "nodemon index.js" script for nodemon

- Signup and make account on "scraperapi"
- copy api key and paste in apiKey variable

- setup baseUrl and pass the api key
- create route for getting product details
- use request to fetch details of the product by passing the productId
- return the response
- parse the response
