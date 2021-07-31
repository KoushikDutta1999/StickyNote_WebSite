var two = document.getElementsByClassName("two")[0];
var three = document.getElementsByClassName("three")[0];
var save = document.getElementsByClassName("save")[0];
var cancel = document.getElementsByClassName("cancel")[0];

cancel.addEventListener("click", function(){
    addnote();
})

save.addEventListener("click", function(){
    save1();
})

function addnote() {
    if (two.style.display == "none") {
        two.style.display = "block";
    }
    else {
        two.style.display = "none";
    }
}

function save1() {
    var node0 = document.createElement("div");
    node0.innerHTML = document.getElementById("text").value;
    document.body.appendChild(node0);
    node0.setAttribute("style","width:700px;height:100px;font-size:25px;padding:10px 5px 5px 5px;margin-top:10px;background-color:rgb(255, 255, 143);overflow:hidden;box-shadow:10px 10px 10px 0px rgb(0, 0, 0.5);")
    three.insertAdjacentElement("beforeend",node0);

    node0.style.background = color();
    
    node0.addEventListener("dblclick", function(){
        node0.remove();
      })
    document.getElementById("text").value = "";

}

function color(){
    var color = ["#ffff8f"];
}



//localStorage.clear();