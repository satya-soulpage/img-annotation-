function handleImageUpload() {
  const image_url = document.getElementById("image-url");
  console.log(image_url);
  if (image_url) {
    IMAGE.url = image_url.value;

    ReactDOM.render(
      React.createElement(Component, IMAGE),
      document.getElementById("card")
    );
    renderInputSelectedOptions();
  }
}

let selectInput = document.getElementById("select-option");

let selectOptionsArray = ["HUMAN"];

selectInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    handleInputSelectedOptions();
  }
});

function handleInputSelectedOptions() {
  const value = selectInput.value;
  if (value) {
    selectOptionsArray.push(value);
    selectInput.value = "";
    renderInputSelectedOptions();
  }
}

function renderInputSelectedOptions() {
  const flex_container = document.querySelector(".flex-container");
  flex_container.innerHTML = "";

  const select = document.querySelector("select");
  select.innerHTML = "";

  selectOptionsArray.map((option, optionIndex) => {
    const flex_item = document.createElement("div");
    flex_item.setAttribute("class", "flex-item");

    const flex_content = document.createElement("div");
    flex_content.setAttribute("class", "content");
    flex_content.innerHTML = option;

    const flex_icon = document.createElement("div");
    flex_icon.setAttribute("class", "icon");
    flex_icon.setAttribute("id", option);
    flex_icon.innerHTML = "x";
    flex_icon.addEventListener("click", removeInputSelectedOptions);

    flex_item.appendChild(flex_content);
    flex_item.appendChild(flex_icon);
    flex_container.appendChild(flex_item);

    const select_option = document.createElement("option");
    select_option.setAttribute("value", option);
    select_option.innerHTML = option;
    select.appendChild(select_option);
  });
}

function removeInputSelectedOptions(e) {
  console.log(e.target.id);
  const index = selectOptionsArray.findIndex((array) => {
    return array === e.target.id;
  });
  if (selectOptionsArray.length > 1) {
    selectOptionsArray.splice(index, 1);
    renderInputSelectedOptions();
  }
}
