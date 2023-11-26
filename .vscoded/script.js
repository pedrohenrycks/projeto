function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");
  
    const img = document.querySelector("#profile img");
  
    if (html.classList.contains("light")) {
      img.setAttribute("src", "/assets/pedro insta.png");
    } else {
      img.setAttribute("src", "/assets/pedro png.png");
    }
  }
  
  // Adiciona dinamicamente o botão do modo escuro
  const switchElement = document.getElementById("switch");
  switchElement.innerHTML = `
    <button></button>
    <span></span>
  `;