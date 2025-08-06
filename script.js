$(function () {
	let id = 0;
	$("#botao-adicionar").on("click", function () {
		if ($("#entrada").val() !== "") {
			id++;
			var li = $("<li style='display: none' id='" + id + "'>" + $("#entrada").val() + "<button onclick=\"excluir(" + id + ")\">X</button>" + "</li>");

			$("#lista").append(li);
			li.fadeIn("slow");

			ordenarLista();

		} else {
			alert("Não é possivel adicionar um contato vazio");
		}
		$("#entrada").val("");
	});
});

$("#lista").on("click", "li", function () {
	$(this).toggleClass("mudar");
});

function ordenarLista(){
	const itens = $("#lista li").get();

	itens.sort(function(a, b){
		const textoA = $(a).text().toLowerCase();
		const textoB = $(b).text().toLowerCase();

		return textoA.localeCompare(textoB);
	});

	$.each(itens, function(index, item){
		$("#lista").append(item);
	});
}

$("#sumir").on("click", function () {
	$("#conteudo2").slideToggle("slow", function () {

	});

	var botao = $(this);

		if(botao.text() === 'Fechar'){
			botao.text('Abrir');
		}else{
			botao.text('Fechar');
		}
});

$("#botao-pesquisar").on("click", function () {
	var valor = $("#pesquisa").val().toLowerCase();
	var naoTem = false;
	$("li")
		.filter(function () {
			var texto = $(this).text().toLowerCase();

			if (texto.indexOf(valor) > -1) {
				$(this).show("slow");
				naoTem = true;
			} else {
				$(this).hide("slow");
			}
		});

	if (!naoTem) {
		alert("Voce nao possui nenhum contato com esse nome");
	}
});

function excluir(id) {
	$("li#" + id).fadeOut("slow", function () {
		$(this).remove();
		ordenarLista();
	});
}
