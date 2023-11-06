

const boxes = document.querySelectorAll(".box")
//box.classList.add("circle")

/*skapa en klass för spelet med alla "rutor" i en array som property.
funktion för att kontrollera om rutan finns.
funktion om den har värde 0(tom),1(spelare 1),2(spelare 2).
funktion för att loopa igenom spelbrädet/arrayn och se om där är någon som har fått 3 i rad

steg 1: skapa rutnätet i html
steg 2: klassen i js
steg 3: uppdatera arrayn med rätt index
steg 4: varje lyckat klick ska kontrollera om någon har 3 i rad, räkna antalet rundor 
och byta användare */

// for each button in buttons


for (const box of boxes) {
  box.addEventListener("click", (event) => {
    console.log(event.currentTarget.dataset.index)

  });
}