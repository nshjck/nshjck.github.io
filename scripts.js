var el = document.getElementById(':3');
el.onclick = myFunction;

function myFunction() {
    var element = document.getElementById('main');
    element.classList.toggle('new-theme');
    cursor()
}

//thanks bee for the cursor :3
function cursor() {
    window.addEventListener("load", (event) => {
      new cursoreffects.fairyDustCursor({
      colors: ["#D60270", "#9B4F96", "#0038A8"],
    });
    new cursoreffects.rainbowCursor({
      colors: ["#D60270", "#9B4F96", "#0038A8"],
      length: "35",
      size: "5  ",
    })
    });
}