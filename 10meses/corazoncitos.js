const boton = document.getElementById("botonCorazon");
function lanzarCorazones() {  
    for (let i = 0; i < 28; i++) {    
        const s = document.createElement("span");    
        s.className = "sparkle";    
        s.textContent = ["💖","💗","💘","✨","❤️"][Math.floor(Math.random() * 5)];    
        s.style.left = Math.random() * 100 + "vw";    
        s.style.top = (55 + Math.random() * 35) + "vh";   
         s.style.fontSize = (14 + Math.random() * 22) + "px";    
         s.style.animationDuration = (1100 + Math.random() * 900) + "ms";    
        document.body.appendChild(s);   
        setTimeout(() => s.remove(), 2200); 
    }
}
boton.addEventListener("click", lanzarCorazone)