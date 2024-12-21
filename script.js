async function productFetching() {
  
  try{
    let response=await fetch('https://fakestoreapi.com/products')
    return await response.json()
  }
  catch(error){
    document.getElementById("errormsg").textContent="something went error"
    return[];
  }
  
}
 async function itemSearching() {
  event.preventDefault()
  const userinput=document.getElementById("user-input").value.toLowerCase();
  const displayproducts=document.getElementById("displayproducts")
  const errordisplay=document.getElementById("errormsg")

  displayproducts.innerHTML=" ";
  errordisplay.textContent=" ";

  const products= await productFetching()

  if(products.length===0){
    errordisplay.textContent="no product found"
    return;
  }
  const matchProduct = products.find(products => products.title.toLowerCase().includes(userinput.toLowerCase()));

  if(matchProduct){
    displayproducts.innerHTML = `
    <div class="card">
    <img class="card-img-top" src="${matchProduct.image}" alt="${matchProduct.title}">
      <div>
        <h2 class="card-title">${matchProduct.title}</h2>
        <p class="price"><strong>Price:</strong> $${matchProduct.price}</p>  
        <p class="card-text">${matchProduct.description}</p>
        <button type="button" class="btn btn-warning">View product</button>
        <button type="button" class="btn btn-primary"> Add to cart</button>
      </div>
      
    </div>
  `;
} 
else {
  errordisplay.textContent = 'No product found with the given title.';
  }
  
 }
 
