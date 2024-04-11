const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Intégrer le code html des images et des bullets points dans le slider
	// Compter le nombre de slides
	var nbslides = slides.length;
	// Définir le premier élément du slider
	var reper = document.getElementById('tagline');
	// Insérer le code html
	for (let i = 0; i < nbslides; i++) {
		imgnum = i+1;
		var img = document.createElement('img');
		var imgsrc = slides[i]['image'];
		img.setAttribute('src', './assets/images/slideshow/'+imgsrc+'');
		img.setAttribute('alt', 'Banner Print-it');
		img.setAttribute('class', 'banner-img');
		img.setAttribute('id', 'img-'+imgnum+'');
		// Mettre les images en premier élément du slider
		divbanner = document.getElementById("banner");
		divbanner.insertBefore(img, reper);
		// Créer les bullets points
		document.getElementById('bulletspoints').innerHTML += '<span class="dot" onclick="changeSlide('+i+')"></span>';
	  }

// Définir les variables
var imgs = document.querySelectorAll('.banner-img');
var dots = document.querySelectorAll('.dot');
var textslide = document.getElementById('tagline');
var currentImg = 0;
var maxImages = imgs.length-1;
const interval = 3000; // Délai de défilement du slide (1000 = 1 seconde)

// Fonction du slider - changer les images, les textes et le style des bullets points
function changeSlide(n) {
	// Reset - masquer toutes les images et désactiver tous les bullets points
	for (var i = 0; i <= maxImages; i++) {
	  imgs[i].style.opacity = 0;
	  dots[i].className = dots[i].className.replace(' dot_selected', '');
	}

	//Si nous n'avons pas spécifié une image
    if (!n && n != 0){ 
		if(currentImg < maxImages){// Si l'image n'est pas la dernière, on avance d'une image
			currentImg++;
		}
		else{//Si l'image est la dernière, on reviens au début
			currentImg = 0;
		}
			// Reset du timer et appel de la fonction après interval
			clearInterval(timer);
		  	timer = setInterval(changeSlide, interval);
	  }

	// Si une action flèche ou bullets points pour demander une image précise
	else {
		if(n > maxImages){//Si on demande une image après la dernière, on revient à la première
			currentImg = 0;
		}
		else if(n < 0){ //Si on demande une image avant la première, on vas à la dernière image
			currentImg = maxImages;
		}
		else{
			currentImg = n; // Sinon, on va à l'image demandée.
		}
			// Reset du timer et appel de la fonction après interval
			clearInterval(timer);
			timer = setInterval(changeSlide, interval);
	}
	  // Afficher l'image, le texte et activer le bullet point
	  	imgs[currentImg].style.transition = 'opacity 2s';
	 	imgs[currentImg].style.opacity = 1;
		dots[currentImg].className += ' dot_selected';
		textslide.innerHTML = slides[currentImg]['tagLine'];
  }

  
  // Action flèche gauche
let flecheg = document.getElementById("flechegauche");
flecheg.addEventListener("click", function () {
	changeSlide(currentImg-1);
});

// Action flèche droite
let fleched = document.getElementById("flechedroite");
fleched.addEventListener("click", function () {
	changeSlide(currentImg+1);
});

// Charger la première image à l'ouverture
currentImg = 0;
timer = setInterval(changeSlide, interval);
	// Reset
	for (var i = 0; i <= maxImages; i++) {
		imgs[i].style.opacity = 0;
		dots[i].className = dots[i].className.replace(' dot_selected', '');
	  }
imgs[currentImg].style.transition = 'opacity 2s';
imgs[currentImg].style.opacity = 1;
dots[currentImg].className += ' dot_selected';
textslide.innerHTML = slides[currentImg]['tagLine'];