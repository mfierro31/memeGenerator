const form = document.querySelector("#meme-form");
const imgInput = document.querySelector("#img-link");
const txtTopInput = document.querySelector("#top-text");
const txtBtmInput = document.querySelector("#bottom-text");
const parentDiv = document.querySelector("#parent-div");

form.addEventListener("submit", function(e) {
  if(imgInput.value === "" || txtTopInput.value === "" || txtBtmInput.value === "") {
    alert("You have to fill out all fields!");
    return;
  } else {
    e.preventDefault();

    const div = document.createElement("div");
    div.classList.add("container-div");

    const img = document.createElement("img");
    const txtTop = document.createElement("div");
    const txtBtm = document.createElement("div");
    const removeBtn = document.createElement("button");

    removeBtn.innerText = "Remove";
    removeBtn.classList.add("remove-btn");

    txtTop.innerText = txtTopInput.value.toUpperCase();
    txtBtm.innerText = txtBtmInput.value.toUpperCase();

    txtTop.classList.add("top-text-div");
    txtBtm.classList.add("btm-text-div");

    img.src = imgInput.value;
    img.classList.add("resize-img");

    div.append(img);
    div.append(txtTop);
    div.append(txtBtm);
    div.append(removeBtn);

    removeBtn.addEventListener("click", function(e) {
      e.target.parentElement.remove();
    });

    parentDiv.append(div);

    imgInput.value = "";
    txtTopInput.value = "";
    txtBtmInput.value = "";
  }
});
