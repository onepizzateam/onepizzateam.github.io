const toggle =
  document.getElementById("theme-toggle");

const savedTheme =
  localStorage.getItem("theme");

if(savedTheme){
  document.documentElement.setAttribute(
    "data-theme",
    savedTheme
  );
}

updateButton();

toggle.addEventListener("click",()=>{

  const current =
    document.documentElement.getAttribute(
      "data-theme"
    );

  const next =
    current === "dark"
      ? "light"
      : "dark";

  document.documentElement.setAttribute(
    "data-theme",
    next
  );

  localStorage.setItem(
    "theme",
    next
  );

  updateButton();
});

function updateButton(){

  const current =
    document.documentElement.getAttribute(
      "data-theme"
    );

  toggle.textContent =
    current === "dark"
      ? "light mode"
      : "dark mode";
}
