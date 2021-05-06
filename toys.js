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



fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt1375666", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "85b41c49e7msh15d7722915937e6p134ab0jsnf9615f398a61",
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
	}
})
.then(response => response.json()) 
.then(response => {
	console.log(response);
	console.log(response.title);
})
.catch(err => {
	console.error(err);
});


