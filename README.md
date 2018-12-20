# NASAAPOD

An example use of the NASA Astronomy Picture of the Day API with React and Redux.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

A PWA version of this app is live on [Firebase](https://nasa-apod-c1984.firebaseapp.com/). It has been tested using Google Chrome's Lighthouse extension (a screengrab which can be seen below).

To get this project up and running on a localhost, follow these steps:

1) cd NASAAPOD
2) npm install
3) Create a keys.js file in the 'config' folder, with the module.export 'nasaAPI' and an API key from [NASA's API page](https://api.nasa.gov/).
4) npm start

To run the build version, follow these steps: 

1) cd NASAAPOD
2) npm install
3) Create a keys.js file in the 'config' folder, with the module.export 'nasaAPI' and an API key from [NASA's API page](https://api.nasa.gov/).
4) npm run build
5) npm install -g serve
6) serve -s build


![screen shot 2018-12-20 at 17 08 55](https://user-images.githubusercontent.com/25869284/50299718-3a2c1700-047a-11e9-9105-d8dea18a7b70.png)

An example image from the NASA APOD API.


![screen shot 2018-12-20 at 17 11 54](https://user-images.githubusercontent.com/25869284/50299782-647dd480-047a-11e9-8d47-e695091a9949.png)

The Google Chrome Lighthouse PWA report.