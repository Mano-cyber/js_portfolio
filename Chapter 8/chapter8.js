var dreamCar = {
    make: "",
    model: "VW",
    color: "green",
    year: 2005,
    bodyStyle: "Luxury Car",
    price: 10000
};
document.getElementById("pricetag")
    .innerHTML = dreamCar.price;

document.getElementById("modelyear")
    .innerHTML = dreamCar.year;

document.getElementById("body")
    .style.backgroundColor = dreamCar.color;

document.getElementById("body")
    .innerHTML = dreamCar.make + " " + dreamCar.model;