AOS.init();

new Typed("#typing", {
  strings:["Frontend Developer","Web Designer","Problem Solver"],
  typeSpeed:50,
  backSpeed:30,
  loop:true
});

function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}

/* FIX: CLOSE MENU AFTER CLICK */
document.querySelectorAll(".nav-links a").forEach(link=>{
  link.addEventListener("click",()=>{
    document.getElementById("navLinks").classList.remove("active");
  });
});

/* DARK MODE */
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("light");
};