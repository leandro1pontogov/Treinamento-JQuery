$(function () {
	let id = 0;
	$("#botao-adicionar").on("click", function () {
		if ($("#entrada").val() !== "") {
			id++;
			$("#lista").append("<li id='" + id + "'>" + $("#entrada").val() + "<button onclick=\"excluir(" + id + ")\">  X </button>" + "</li>");
		}
		$("#entrada").val("");
	});
});

$("#lista").on("click", "li", function () {
	$(this).toggleClass("mudar");
});

function excluir(id) {
	$("li#" + id).remove();
}

