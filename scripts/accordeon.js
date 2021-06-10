var acc = document.getElementsByClassName("accordeon_page");
var i;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		this.classList.toggle("note"); 
	});
}