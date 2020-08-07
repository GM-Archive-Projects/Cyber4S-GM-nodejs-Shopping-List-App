const productsList = document.querySelector("#productsList");

const itemMaker = (product) =>{
    const li = document.createElement("li");
    li.innerHTML = `${product.name}: ${product.price}`;
    li.id = product.id;
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    deleteButton.innerHTML = "Delete";
    return li;
}

const listMaker = async() =>{
    const  {data}  = await axios.get(`http://localhost:3000/products`);
    data.forEach(product => {
        const li = itemMaker(product);
        productsList.appendChild(li);
    });
}

const editing = async(product) => {
    await axios.put(`http://localhost:3000/products/${product.id}`, product);
    listMaker();
}

const adding = async() => {
    const inputId = document.querySelector("#inputId");
    const inputName = document.querySelector("#inputName");
    const inputPrice = document.querySelector("#inputPrice");
    const inputStock = document.querySelector("#inputStock");
    const product = {
        id: inputId.value,
        name: inputName.value,
        price: inputPrice.value,
        ammout: inputStock.value,
    }
    if(!product.id || !product.name || !product.price || !product.ammout){
        alert("please enter all of the parameters")
    }
    else{
        await axios.post(`http://localhost:3000/products/`, product);
        const li =itemMaker(product);
        productsList.appendChild(li);
    }
}

const deleating = async(product) => {
    await axios.delete(`http://localhost:3000/products/${product.id}`, product);
    listMaker();
}

document.onload = listMaker();