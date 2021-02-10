function showCity() {
			// 1. Récupérer la valeur courante du menu 
			// Pour ça on va faire :
			let VilleSelectionnee = document.getElementById("Ville").value
			

			// 2. Récupérer la liste de toutes les div correspondant à une div de météo 
			// Pour ça on va faire :
			let cities = document.getElementsByClassName("city");

			// 3. Parcourir la liste des div et cacher celles qui ne sont pas sélectionnées.
			// TODO : definir l : la taille max de votre tableau cities
			let l = cities.length;
			for (let i=0; i<l; i++) {
				if (cities[i].id == VilleSelectionnee) {
			// garder l'element visible -> 
					cities[i].style.display = "";
					
			} else {
			// cacher l'element -> 
					cities[i].style.display = "none";
					}
				
				
			}
}