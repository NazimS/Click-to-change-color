
    // color button event
    let btns = document.getElementsByClassName("btn");

    for (let i=0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
        
            let buttonStyle = getComputedStyle(this);
            let buttonBgColor = buttonStyle["backgroundColor"];
            document.body.style.backgroundColor = buttonBgColor;
            document.getElementById("title").style.color = "white";
            document.getElementById("clear").style.backgroundColor = "white";
  
        });
    }

    //reset button event
        const clear = document.getElementById("clear");
        
        clear.addEventListener("click", function onClick(event) {

            const title = document.getElementById("title");
            title.style.color = "black";

        });



