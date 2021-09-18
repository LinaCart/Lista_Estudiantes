let itemList = []

function addItem() {
    //Obteniendo Datos de los Imput 
    let name = document.getElementById("name").value
    let genre = document.getElementById("genre").value
    let size = document.getElementById("size").value
    let contextur = document.getElementById("contextur").value
    document.getElementById("name").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("size").value = "";
    document.getElementById("contextur").value = "";

    // Agregando datos al array
    if (name && genre && size && contextur) {
        itemList.push({
            name,
            genre,
            size,
            contextur

        })
    }

    // Agregando datos al HTML
    let html = ""
    itemList.forEach((i, index) => {
        html += `<div class="row">  
        <div class="col"> ${i.name} </div> 
        <div class="col"> ${i.genre} </div> 
        <div class="col"> ${i.size} </div> 
        <div class="col"> ${i.contextur} </div> 
        <div class="col"> <button class="btn btn-danger btn-sm" onclick="DeleteItem(${index})"> X </button> </div> </div> `
    })
    document.getElementById("showItemList").innerHTML = html

    // Agregar datos al localStorage
    localStorage.setItem("students", JSON.stringify(itemList))
}

function DeleteItem(index) {
    // Eliminando el dato del array
    itemList.splice(index, 1);

    // Actualizacion HTML
    let html = ""
    itemList.forEach((i, index) => {
        html += `<div class="row">  
        <div class="col"> ${i.name} </div> 
        <div class="col"> ${i.genre} </div> 
        <div class="col"> ${i.size} </div> 
        <div class="col"> ${i.contextur} </div> 
        <div class="col"> <button class="btn btn-danger btn-sm" onclick="DeleteItem(${index})"> X </button> </div> </div> `
    })
    document.getElementById("showItemList").innerHTML = html

    // Borrando datos del local storage
    localStorage.setItem("students", JSON.stringify(itemList))
}

// Filtrar datos
function filtrar() {
    let datofil = document.getElementById("helpItem").value
    let FiltroFinal = itemList.filter((item, index) => {
        if (datofil.length > 0) {
            return item.contextur === datofil || item.name === datofil || item.genre === datofil || item.size === datofil
        } else {
            return true
        }
    })
    console.log(datofil, FiltroFinal)
    let html = ""
    FiltroFinal.forEach((i, index) => {
        html += `<div class="row">  
        <div class="col"> ${i.name} </div> 
        <div class="col"> ${i.genre} </div> 
        <div class="col"> ${i.size} </div> 
        <div class="col"> ${i.contextur} </div> 
        <div class="col"> <button class="btn btn-danger btn-sm" onclick="DeleteItem(${index})"> X </button> </div> </div> `
    })

    document.getElementById("showItemList").innerHTML = html
}

let input = document.getElementById('helpItem');
input.addEventListener('input', filtrar);

function loadData() {
    // Obteniendo datos del LocalStorage
    localStorage.getItem("students")
    itemList = localStorage.getItem("students")
    if (itemList) {
        itemList = JSON.parse(itemList)
    } else {
        itemList = []
    }

    // Actualizacion HTML
    let html = ""
    itemList.forEach((i, index) => {
        html += `<div class="row">  
    <div class="col"> ${i.name} </div> 
    <div class="col"> ${i.genre} </div> 
    <div class="col"> ${i.size} </div> 
    <div class="col"> ${i.contextur} </div> 
    <div class="col"> <button class="btn btn-danger btn-sm" onclick="DeleteItem(${index})"> X </button> </div> </div> `
    })
    document.getElementById("showItemList").innerHTML = html

}

loadData()


