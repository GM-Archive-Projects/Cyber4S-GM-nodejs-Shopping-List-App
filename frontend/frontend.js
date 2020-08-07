const productsList = document.querySelector("#productsList");

const itemMaker = (product) =>{
    const li = document.createElement("li");
    li.innerHTML = `${product.name}: ${product.price}`;
    li.id = product.id;
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    deleteButton.innerHTML = "Delete";
    
}

const listMaker = async() =>{
    const  {data}  = await axios.get(`http://localhost:3000/products`);
    data.forEach(product => {
        const li = listMaker(product);
        productsList.appendChild(li);
    });
}

const editing = async(product) => {
    await axios.put(`http://localhost:3000/products/${product.id}`, product);
    listMaker();
}

const adding = async(product) => {
    const response = await axios.post(`http://localhost:3000/products/`, product);
    const li =itemMaker(response);
    productsList.appendChild(li);
}

const deleating = async(product) => {
    await axios.delete(`http://localhost:3000/products/${product.id}`, product);
    listMaker();
}

document.onload = listMaker();