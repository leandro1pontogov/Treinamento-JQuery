$(function () {
	let id = 0;
	$("#botao-adicionar").on("click", function () {
		if ($("#entrada").val() !== "") {
			id++;
			var li = $("<li style='display: none' id='" + id + "'>" +  $("#entrada").val() + "<button onclick=\"excluir(" + id + ")\">  X </button>" + "</li>");

			$("#lista").append(li);
			li.fadeIn("fast");
		} else {
			alert("Não é possivel adicionar um contato vazio");
		}
		$("#entrada").val("");
	});
});

$("#lista").on("click", "li", function () {
	$(this).toggleClass("mudar");
});

function excluir(id) {
	$("li#" + id).fadeOut("slow", function(){
		$(this).remove();
	});
}

$("#sumir").on("click", function () {
	$("#conteudo2").slideToggle("slow", function () {

	});
});

$("#botao-pesquisar").on("click", function () {
	var valor = $("#pesquisa").val().toLowerCase();
	$("li")
		.filter(function () {
		var texto = $(this).text().toLowerCase();

        if (texto.indexOf(valor) > -1) {
            $(this).show("slow");
        } else {
            $(this).hide("slow");
        }
		});
});

