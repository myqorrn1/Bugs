const topMenu = document.getElementsByClassName("top-menu");

function handleClick(e) {
  console.log(e.target);
  console.log(e.target.classList);

  if (e.target.classList[1] === "clicked") {
    e.target.classList.remove("clicked");
  } else {
    for (let i = 0; i < topMenu.length; i++) {
      topMenu[i].classList.remove("clicked");
    }
    e.target.classList.add("clicked");
  }
}

function init() {
  for (let i = 0; i < topMenu.length; i++) {
    topMenu[i].addEventListener("click", handleClick);
  }
}

init();

