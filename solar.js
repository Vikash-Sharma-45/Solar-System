function createStars() {
    const container = document.querySelector("body");
    for (let i = 0; i < 1000; i++) {
      // Increase the number of stars to 1000
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = ".1px";
      star.style.height = ".1px";
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      container.appendChild(star);
    }
  }
  createStars();
  

  const toggleButton = document.createElement("div");
toggleButton.className = "navbar-toggle";
toggleButton.innerText = "☰";
document.querySelector(".navbar").appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
    const menu = document.querySelector(".navbar-menu");
    menu.classList.toggle("active");
});
