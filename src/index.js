// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import getData from './module/getData.js';
import logo from './logo.png';

// Add the image to our existing div.
const myIcon = new Image();
myIcon.src = logo;

getData();
