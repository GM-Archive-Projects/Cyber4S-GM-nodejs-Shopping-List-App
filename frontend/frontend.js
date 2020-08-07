const productsList = document.querySelector("#productsList");
const productBuilder = () =>{
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
    return product;
}
const itemMaker = (product) =>{
    const li = document.createElement("li");
    li.innerHTML = `${product.name}: ${product.price}`;
    li.id = product.id;
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = deleating;
    li.appendChild(deleteButton);
    return li;
}

const listMaker = async() =>{
    const  {data}  = await axios.get(`http://localhost:3000/products`);
    data.forEach(product => {
        const li = itemMaker(product);
        li.id = product.id;
        productsList.appendChild(li);
    });
}

const editing = async() => {
    const product = productBuilder();
    debugger
    if(!product.id || !product.name || !product.price || !product.ammout){
        alert("please enter all of the parameters")
    }else{
        await axios.put(`http://localhost:3000/products/${product.id}`, product);
        debugger
        const oldItem = productsList.querySelector(`#${product.id}`);
        const newItem = itemMaker(product);
        productsList.replaceChild(newItem, oldItem);
    }
}

const adding = async() => {
    const product = productBuilder();
    if(!product.id || !product.name || !product.price || !product.ammout){
        alert("please enter all of the parameters")
    }
    else{
        await axios.post(`http://localhost:3000/products/`, product);
        const li =itemMaker(product);
        productsList.appendChild(li);
    }
}

const deleating = async() => {
    const li = event.target.parentElement;
    await axios.delete(`http://localhost:3000/products/${li.id}`);
    productsList.removeChild(li);
}

document.onload = listMaker();