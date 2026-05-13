const form = document.querySelector("form")
const itemName =  document.getElementById("itemName")
const itemsList = document.querySelector("ul")

form.onsubmit = () => {
    event.preventDefault()
    const product = {
        id: new Date().getTime(),
        name: itemName.value
    }

    addToList(product)
    console.log(product.id)
}

function addToList (product) {

    try{
        // -- Creating the list element
        const item = document.createElement("li")
        item.classList.add("product")

        // --------------------------------
        // -- Creating the checkmark buttom
        const check = document.createElement("label")
        check.classList.add("check")

        // Creating the input how is hidden
        const checkInput = document.createElement("input")
        checkInput.setAttribute("type", "checkbox")
        checkInput.setAttribute("name", "done")
        // Creating the span for the buttom style
        const checkButtom = document.createElement("span")

        // Add the input and the span in the label
        check.append(checkInput, checkButtom)

        // -------------------------------
        // Creating the p how has the item name
        const itemTitle = document.createElement("p")
        itemTitle.textContent = product.name

        //-------------------------------
        // Creating the trash icon
        const remove = document.createElement("a")
        remove.setAttribute("href", "#")

        const removeIcon = document.createElement("img")
        removeIcon.setAttribute("src", "./assets/Trash.svg")
        removeIcon.setAttribute("alt", "icone de lixo para excluir elemento da lista.")
        removeIcon.classList.add("remove")

        remove.append(removeIcon)
    
        // Add all the elements in the li
        item.append(check, itemTitle, remove)
        // Add the li in the ul
        itemsList.append(item)

    } catch (error) {
        alert("Não foi possivel atualizar a lista de compras")
        console.log(error)
    }
}

itemsList.addEventListener("click", function(event){
    if (event.target.classList.contains("remove")){
        console.log(event)
        const trash = event.target.closest(".product")

        trash.remove()
    }
})