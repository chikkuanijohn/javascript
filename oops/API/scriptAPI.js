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
      const row = document.querySelector(".row");
      const col = document.createElement("div");
      col.classList.add('col-lg-3');
      col.innerHTML = `
        <div class="card h-100">
          <img src="${element.images[0]}" class="card-img-top" alt="${element.title}">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <h6 class="card-text">$${element.price}</h6>
          </div>
        </div>`;
      row.appendChild(col);
    });
  });