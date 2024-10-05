let span = document.querySelector("#res");
let p = document.querySelector("#counter");
let input = document.querySelector("input");

let count = 10;
        
input.addEventListener("keyup", function game(event){
    
    if (count > 0) {
        
        if (event.code == "KeyT") {
                span.innerText = "You Won! 🎉";
                span.classList.add("won");
                input.disabled = true; 

            } else {
                    span.innerText = "Try Again ";
                    span.classList.remove("won");
                    count--;
                    p.innerText = `${count}`;

                    if (count === 0) {
                        span.innerText = "Game Over! ";
                        span.classList.add("lost");
                        input.disabled = true; 
                    }
                }
            }
        });
