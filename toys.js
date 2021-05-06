const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}


import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://amazon-product-reviews-keywords.p.rapidapi.com/product/reviews',
  params: {asin: 'B07XQXZXJC', country: 'US', variants: '1', top: '0'},
  headers: {
    'x-rapidapi-key': '85b41c49e7msh15d7722915937e6p134ab0jsnf9615f398a61',
    'x-rapidapi-host': 'amazon-product-reviews-keywords.p.rapidapi.com'
  }
};





const form = document.querySelector('#searchForm');
const button = document.getElementById("#new-toys");

import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://amazon-product-reviews-keywords.p.rapidapi.com/product/search',
  params: {keyword: 'toys', country: 'US', category: 'aps'},
  headers: {
    'x-rapidapi-key': '85b41c49e7msh15d7722915937e6p134ab0jsnf9615f398a61',
    'x-rapidapi-host': 'amazon-product-reviews-keywords.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});