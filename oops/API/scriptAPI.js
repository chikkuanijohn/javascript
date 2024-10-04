// fetch('https://dummyjson.com/products').then(response=>response.json()).then(data=>{
//     data.products.forEach(element => {
//          console.log(element.title);
//        const row = document.querySelector(".row")
//        const col = document.createElement("div")
//         col.classList.add('col-lg-3')
//         col.innerHTML=`
//         <img src="${element.images}" width="100%">
//         <h3>${element.title}</h3>
//         <h6>${element.price}</h6>         `
//          row.appendChild(col)        

        
        
//      });
// })






fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {
    data.products.forEach(element => {
      console.log(element.title);
      const row = document.querySelector(".row")
      const col = document.createElement("div")
      col.classList.add('col-lg-3')
      col.innerHTML = `
        <div class="card h-100">
          <img src="${element.images[0]}" class="card-img-top" alt="${element.title}">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.description}</p>
            <a href="#" class="btn btn-primary see-more-btn" data-id="${element.id}" data-bs-toggle="modal" data-bs-target="#productModal">See More</a>
          </div>
        </div>`
      row.appendChild(col)
    });
    // using querySelectorAll to collect all the instances were see-more button was clicked 
    document.querySelectorAll('.see-more-btn').forEach(btn =>{
        // using foreach since  there are multiple 
        btn.addEventListener('click',(e)=>{
            const productId=e.target.getAttribute('data-id');
            const product=data.products.find(p=> p.id==productId);
            if(product){
                // adding product detalis to the modal 
                document.getElementById('modalImage').src = product.thumbnail;
                document.getElementById('modalTitle').textContent = product.title;
                document.getElementById('modalDescription').textContent = product.description;
                document.getElementById('modalPrice').textContent = `Price:${product.price}`;
                
            }
        })
    })
  })
    
    


