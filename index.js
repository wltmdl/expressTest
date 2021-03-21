const gettag= document.querySelector("a");

gettag.addEventListener("click", pop_up )

function pop_up(event) {
    window.alert("TEXT");
    event.preventDefault();
}

