function themes (btn, select) {
  let darkMode = localStorage.getItem("darkMode");
  const $btn = document.querySelector(btn),
    $select = document.querySelectorAll(select),
    moon = "🌕",
    sun = "🔆";

    const dark = () => {
      $btn.textContent = sun;
      $select.forEach(el => el.classList.add("darktheme"));
      localStorage.setItem("darkMode", "true");
    }
    const light = () => {
      $btn.textContent = moon;
      $select.forEach(el => el.classList.remove("darktheme"));
      localStorage.setItem("darkMode", "false");
    }
    if(darkMode === "true"){
      dark();
    }
    document.addEventListener("click", e => {
      darkMode = localStorage.getItem("darkMode");
      if (e.target.matches(btn)) {
        if ($btn.textContent === moon) {
          dark();
        }else{
          light();
        }
      }})
}
export {themes}; 