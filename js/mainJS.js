var one__cars = {
    brand: null,
    model: null,
    engine: null
};
var two__cars = {
    brand: null,
    model: null,
    engine: null
};
var three__cars = {
    brand: null,
    model: null,
    engine: null
};
var four__cars = {
    brand: null,
    model: null,
    engine: null
};
var five__cars = {
    brand: null,
    model: null,
    engine: null
};

var carsArrey = [one__cars, two__cars,  three__cars, four__cars, five__cars];
var newCarsArrey = [];
var i = 0;
var count = 5;

function getValue() {
    var brand = document.getElementById("brand").value;
    var model = document.getElementById("model").value;
    var engine = document.getElementById("engine").value;

    if (i === 5){
        alert("Масив заповенено!! Ви можете ввести тільки 5 авто!!")
    }else {
        if (brand|model|engine !== null && brand|model|engine !== ""){
            for (i; i < carsArrey.length; i++) {
                carsArrey[i].brand = brand;
                carsArrey[i].model = model;
                carsArrey[i].engine = engine;
                alert("Авто доданно в масив!! Лишилось " + count + " авто!!");
                --count;
                break;
            }
        }
        else{
            alert("Заповніть всі поля!!!")
        }
        if (carsArrey[i].brand !== null && carsArrey[i].brand !=="" && carsArrey[i].brand !==undefined){
            i++;
        }

    }
}

function getNamber() {
    if (i >= 3) {
        var engineNumb = document.getElementById("number").value;
        var userContainer = document.getElementById("userContainer");

        for (var j=0; j < carsArrey.length; j++) {
            if (carsArrey[j].engine >= engineNumb) {
                newCarsArrey[j] = carsArrey[j];
             }
        }

        newCarsArrey = newCarsArrey.filter(String);
        if (newCarsArrey.length !== 0){
            for (var l=0; l < newCarsArrey.length; l++){
                var currentUserObj = newCarsArrey[l];

                var title__name = document.getElementById("title__name");
                var title = document.getElementById("title");
                title.innerHTML = "Авто з об'ємом більшим за " + engineNumb + " : ";
                title__name.appendChild(title);

                var  wrapper = document.createElement("div");
                wrapper.innerHTML = "";
                userContainer.appendChild(wrapper);

                var currentElement = document.createElement("p");
                currentElement.innerHTML = "Марка : " + currentUserObj.brand;
                wrapper.appendChild(currentElement);

                var currentElement1 = document.createElement("p");
                currentElement1.innerHTML = "Модель : " + currentUserObj.model;
                wrapper.appendChild(currentElement1);

                var currentElement2 = document.createElement("p");
                currentElement2.innerHTML = "Об'єм двигуна : " + currentUserObj.engine;
                wrapper.appendChild(currentElement2);

                var haryLine = document.createElement("hr");
                currentElement2.appendChild(haryLine);
            }
        }else {
            alert("У масиві немає авто з об'ємом двигуна більшим за " + engineNumb + " !!!")
        }
    }else {
        alert("Заповніть масив хочаб трьома обєктами!!")
    }
}
