const chnageColor = document.getElementById("chnageColor");
const addChild = document.getElementById("addChild");
const removeChild = document.getElementById("removeChild");
const container = document.getElementsByClassName("container")[0];

//ONCLICK OF CHANGE COLOR
let flag = true;
chnageColor.addEventListener("click", () => {
    if (flag) {
        container.style.backgroundColor = "purple"
        flag = false;
    } else {
        container.style.backgroundColor = "lightgrey"
        flag = true;
    }

})

//ONCLICK ADD CHILD CONTAINER
addChild.addEventListener("click", () => {
    let childEle = document.createElement("div");
    childEle.className = "box";
    container.appendChild(childEle)
})

removeChild.addEventListener("click", () => {
    container.removeChild(container.lastChild)

})
