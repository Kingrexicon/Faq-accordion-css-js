
var header = document.getElementsByClassName("header");
var i;

for (i = 0; i < header.length; i++) {
  header[i].addEventListener("click", function () {
    // this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var toggleBtn = this.lastElementChild

    if (panel.style.display === "block") {
      toggleBtn.innerHTML = "<img src='assets/images/icon-plus.svg' alt=''>"
      panel.style.cssText = "  display:none;";
    } else {
      panel.style.cssText = " display:block;";
      toggleBtn.innerHTML = "<img src='assets/images/icon-minus.svg' alt=''>"
    }
  });
}

