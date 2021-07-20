
		var aOfPersonnes = [];
		aOfPersonnes[0] = [];
		aOfPersonnes[0]["prenom"] = "Obi-wan";
		aOfPersonnes[0]["nom"] = "Kenobie";
		aOfPersonnes[0]["classe"] = "Maitre jedi";
		aOfPersonnes[0]["espece"] = "Humain";
		aOfPersonnes[0]["positionnement"] = "Lumineux";

		aOfPersonnes[1] = [];
		aOfPersonnes[1]["prenom"] = "Anakin";
		aOfPersonnes[1]["nom"] = "Skywalker";
		aOfPersonnes[1]["classe"] = "Seigneur";
		aOfPersonnes[1]["espece"] = "Humain/Cyborg";
		aOfPersonnes[1]["positionnement"] = "Obscur";

		aOfPersonnes[2] = [];
		aOfPersonnes[2]["prenom"] = "Yoda";
		aOfPersonnes[2]["nom"] = "inconnu";
		aOfPersonnes[2]["classe"] = "Grand maitre de l'ordre";
		aOfPersonnes[2]["espece"] = "Inconnu";
		aOfPersonnes[2]["positionnement"] = "Lumineux";

		aOfPersonnes[3] = [];
		aOfPersonnes[3]["prenom"] = "Valkorion";
		aOfPersonnes[3]["nom"] = "Inconnu";
		aOfPersonnes[3]["classe"] = "Empereur";
		aOfPersonnes[3]["espece"] = "Humain";
		aOfPersonnes[3]["positionnement"] = "Obscur";

		aOfPersonnes[4] = [];
		aOfPersonnes[4]["prenom"] = "Tenebrae";
		aOfPersonnes[4]["nom"] = "Inconnu";
		aOfPersonnes[4]["classe"] = "Empereur";
		aOfPersonnes[4]["espece"] = "Sith au sang pur";
		aOfPersonnes[4]["positionnement"] = "Obscur";

		aOfPersonnes[5] = [];
		aOfPersonnes[5]["prenom"] = "Malgus";
		aOfPersonnes[5]["nom"] = "Veradun";
		aOfPersonnes[5]["classe"] = "Seigneur sith";
		aOfPersonnes[5]["espece"] = "Humain";
		aOfPersonnes[5]["positionnement"] = "Obscur";


		function constructTable() {
			var sHTML = "<thead>";
			sHTML += "<tr>";
			sHTML += "<td>Prénom</td>";
			sHTML += "<td>Nom</td>";
			sHTML += "<td>Classe</td>";
			sHTML += "<td>Espece</td>";
			sHTML += "<td>Positionnement</td>";
			sHTML += "<td>Editer</td>";
			sHTML += "<td>Supprimer</td>";
			sHTML += "</tr>";
			sHTML += "</thead>";
			sHTML += "<tbody>";
			for (var i = 0; i < aOfPersonnes.length; i++) {
				sHTML += "<tr>";
				sHTML += "<td>" + aOfPersonnes[i]["prenom"] + "</td>";
				sHTML += "<td>" + aOfPersonnes[i]["nom"] + "</td>";
				sHTML += "<td>" + aOfPersonnes[i]["classe"] + "</td>";
				sHTML += "<td>" + aOfPersonnes[i]["espece"] + "</td>";
				sHTML += "<td>" + aOfPersonnes[i]["positionnement"] + "</td>";
				sHTML += "<td class=\"editP\" onClick=\"editPersonne(" + i + ")\">EDIT</td>";
				sHTML += "<td class=\"supprP\" onClick=\"SupprPersonne(" + i + ")\">SUPPRIMER</td>";
				sHTML += "</tr>";
			}
			sHTML += "</tbody>";
			$('#table_personnes').html(sHTML);
		}


		function ajoutPersonne() {
			var iNew = aOfPersonnes.length;
			aOfPersonnes[iNew] = [];
			aOfPersonnes[iNew]["prenom"] = $('#prenom').val();
			aOfPersonnes[iNew]["nom"] = $('#nom').val();
			aOfPersonnes[iNew]["classe"] = $('#classe').val();
			aOfPersonnes[iNew]["espece"] = $('#espece').val();
			aOfPersonnes[iNew]["positionnement"] = $('#positionnement').val();

			tables.clear();
			tables.destroy();
			constructTable();
			tables = $('#table_personnes').DataTable(configuration);
		}

		var iIndiceEditionToKeep;

		function editPersonne(iIndiceEdition) {
			
			iIndiceEditionToKeep = iIndiceEdition;
			$("#btn_ajouter").hide();
			$("#btn_modifier").show();
			$("#btn_annuler").show();

			$('#prenom').val(aOfPersonnes[iIndiceEdition]["prenom"]);
			$('#nom').val(aOfPersonnes[iIndiceEdition]["nom"]);
			$('#classe').val(aOfPersonnes[iIndiceEdition]["classe"]);
			$('#espece').val(aOfPersonnes[iIndiceEdition]["espece"]);
			$('#positionnement').val(aOfPersonnes[iIndiceEdition]["positionnement"]);
		}

		function modifPersonne(iIndiceEditionToKeep){
			aOfPersonnes[iIndiceEditionToKeep]["prenom"] = $("#prenom").val();
			aOfPersonnes[iIndiceEditionToKeep]["nom"] = $("#nom").val(); 
			aOfPersonnes[iIndiceEditionToKeep]["classe"] = $("#classe").val();
			aOfPersonnes[iIndiceEditionToKeep]["espece"] = $("#espece").val();
			aOfPersonnes[iIndiceEditionToKeep]["positionnement"] = $("#positionnement").val();

			tables.clear();
			tables.destroy();
			constructTable();
			tables = $('#table_personnes').DataTable(configuration);
			$('#prenom').val("");
			$('#nom').val("");
			$('#classe').val("");
			$('#espece').val("");
			$('#positionnement').val("");

		}

		function annulPersonne(){
			$('#prenom').val("");
			$('#nom').val("");
			$('#classe').val("");
			$('#espece').val("");
			$('#positionnement').val("");

			$("#btn_ajouter").show();
			$("#btn_modifier").hide();
			$("#btn_annuler").hide();

		}

		function SupprPersonne(iSuppr){
			aOfPersonnes.splice(iSuppr,1);
			tables.clear();
			tables.destroy();
			constructTable();
			tables = $('#table_personnes').DataTable(configuration);

		}

		// CONFIGURATION DATATABLE
		const configuration = {
			"stateSave": false,
			"order": [
				[1, "asc"]
			],
			"pagingType": "simple_numbers",
			"searching": true,
			"lengthMenu": [
				[10, 25, 50, 100, -1],
				["Dix", "Vingt cinq", "Cinquante", "Cent", "Ze total stp"]
			],
			"language": {
				"info": "Utilisateurs _START_ à _END_ sur _TOTAL_ sélectionnées",
				"emptyTable": "Aucun utilisateur",
				"lengthMenu": "_MENU_ Utilisateurs par page",
				"search": "Rechercher : ",
				"zeroRecords": "Aucun résultat de recherche",
				"paginate": {
					"previous": "Précédent",
					"next": "Suivant"
				},
				"sInfoFiltered": "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
				"sInfoEmpty": "Utilisateurs 0 à 0 sur 0 sélectionnée",
			},
			"columns": [{
					"orderable": true
				},
				{
					"orderable": true
				},
				{
					"orderable": true
				},
				{
					"orderable": true
				},
				{
					"orderable": true
				},
				{
					"orderable": false
				},
				{
					"orderable": false
				}
			],
			'retrieve': true
		};

		var tables;
		$(document).ready(function () {
			constructTable();
			// INIT DATATABLE
			tables = $('#table_personnes').DataTable(configuration);
		});
