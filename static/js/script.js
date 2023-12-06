// Fonction qui s'execute lorsque le document est charge

document.addEventListener('DOMContentLoaded', function() {
	
	// EVENEMENTS DE CLIC
	// Ajoute un evenement de clic au lien "Accueil"
	var homeLink = document.querySelector('nav ul li a[href="/"]');
	homeLink.addEventListener('click', function(event) {
		event.preventDefault();
		alert('Vous êtes sur la page d\'accueil');
	});

	// Ajoute un evenement de clic au lien "Recherche"
	var searchLink = document.querySelector('nav ul li a[href="/recherche"]');
	searchLink.addEventListener('click', function(event) {
		event.preventDefault();
		alert('Vous êtes sur la page de recherche');
	});

	// Ajoute un evenement de clic au lien "Ajouter un produit"
	var addProductLink = document.querySelector('nav ul li a[href="/ajouter"]');
	addProductLink.addEventListener('click', function(event) {
		event.preventDefault();
		alert('Vous êtes sur la page pour ajouter un produit');
	});
	
	// DATE COURRANTE DYNAMIQUE
	// Sélectionne l'élément HTML avec l'ID "currentDate"
	var currentDateElement = document.getElementById('currentDate');

	// Fonction pour obtenir la date courante au format "dd/mm/yyyy"
	function getCurrentDate() {
		var currentDate = new Date();
		var day = currentDate.getDate();
		var month = currentDate.getMonth() + 1; // Les mois commencent à partir de 0
		var year = currentDate.getFullYear();

		// Ajoute un zéro devant le jour et le mois si nécessaire
		if (day < 10) {
			day = '0' + day;
		}
		if (month < 10) {
			month = '0' + month;
		}

		return day + '/' + month + '/' + year;
	}

	// Met à jour l'élément HTML avec la date courante
	currentDateElement.textContent = getCurrentDate();
});
