const form = document.querySelector("form");
const input = document.querySelector("form input");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const footerRemoveButton = document.querySelector("footer button");

form.onsubmit = (event) => {
  event.preventDefault();

  if (input.value !== "") {
    //criando div e input:checkbox e depois colocando o input dentro da div
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const divCheckbox = document.createElement("div");
    divCheckbox.append(checkbox);
    divCheckbox.classList.add("checkbox");

    //criando span e adicionando o input dentro
    const mainText = document.createElement("span");
    mainText.textContent = input.value;
    input.value = ""; //clear

    const button = document.createElement("button");
    button.type = "button";
    const divButton = document.createElement("div");
    divButton.append(button);
    divButton.classList.add("removeButton");

    const div = document.createElement("div");
    const divParent = document.createElement("div");

    div.append(divCheckbox, mainText, divButton);
    divParent.append(div);

    main.append(divParent);

    checkbox.addEventListener('click', function() {
      mainText.classList.toggle("line-through");
    });

    button.addEventListener('click', () => {
      main.removeChild(divParent);
      footer.classList.remove("hidden");
    });
  }
};

footerRemoveButton.addEventListener("click", () => {
  footer.classList.add("hidden");
});


