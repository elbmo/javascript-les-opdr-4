const cars = ['Toyota', 'Ford', 'Test', 'Audi', 'BMW', 'Test', 'Mazda', 'Mercedes']
const list = document.querySelector('ul');

for(i = 0, i < cars.length; i++){
    if(cars[i] !== 'Test'){
        showClass(classes[i])};
}

function showClass(autoClass){
    list.innerHTML += '<li>' + autoClass + '</li>';
}