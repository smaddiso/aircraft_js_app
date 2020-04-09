const handleFormSubmit = function (submitEvent) {
  submitEvent.preventDefault();

  const manufacturer = submitEvent.target.manufacturer.value;
  const model = submitEvent.target.model.value;
  const family = submitEvent.target.family.value;
  const seats = submitEvent.target.seats.value;
  const range = submitEvent.target.range.value;
  const length = submitEvent.target.length.value;
  const wingspan = submitEvent.target.wingspan.value;
  const height = submitEvent.target.height.value;
  const engineModel = submitEvent.target.engineModel.value;
  const engines = submitEvent.target.engines.value;
  const manufacturing = submitEvent.target.manufacturing.value;

  const newListItem = document.createElement("li");
  newListItem.textContent = `Manufacturer: ${manufacturer}; Model: ${model}; Family: ${family}; Seats: ${seats}; Range: ${range}; Length: ${length}; Wingspan: ${wingspan}; Height: ${height}; Engine: ${engineModel}; Engines: ${engines}; Manufacturing: ${manufacturing}`;

  const list = document.querySelector("#aircraftList");
  list.appendChild(newListItem);
  document.querySelector("#aircraft-details-form").reset();

  // const aircraftList = document.querySelector("#aircraftList");

  submitEvent.target.reset();
};

const handleButtonClick = function () {
  document.querySelector("#aircraftList").innerHTML = "";
};

document.addEventListener("DOMContentLoaded", () => {

  const aircraftDetailsForm = document.querySelector("#aircraft-details-form");
  aircraftDetailsForm.addEventListener("submit", handleFormSubmit);

  const button = document.querySelector("#delete_all");
    button.addEventListener("click", handleButtonClick)

});
