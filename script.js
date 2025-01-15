// console.log('====================================');
// console.log("Connected");
// console.log('====================================');

// // const data = fetch("https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889").then((res)=>(res.json())).then((out)=>(out.items.map((curr)=>(console.log(curr.image,curr.price,curr.title,curr.quantity)))));

// const data = fetch("https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889").then((res)=>(res.json())).then((out)=>(out));
// data.items.map((curr)=>(console.log(curr)))
// console.log(data)

// Fetch the data and populate the HTML
fetch(
  "https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889"
)
  .then((res) => res.json())
  .then((data) => {
    const cartItemsContainer = document.getElementById("cart-items");
    
    data.items.forEach((item) => {
      // Create HTML structure for each item
      let total_amount=item.price*item.quantity;
      const itemElement = document.createElement("div");
      itemElement.classList.add("item-details__container");
      itemElement.innerHTML = `
      <div class="product-details__container" data-role="product-details">
        <div class="product-image-wrapper"><img src="${item.image}" alt="${item.title}" ></div>
        <p class="item-title">${item.title}</p>
      </div>
      <p class="item-price" data-role="price">Rs. ${item.price}</p>
      <p class="item-quantity" data-role="quantity"><span>${item.quantity}</span></p>
      <p class="item-total-amount" data-role="total-amount">Rs. ${total_amount}</p>
        
      <button class="button svg-wrapper" data-role="order-action"><svg  viewBox="0 0 22 22" fill="none" ><path d="M20.625 4h-3.5V1.813c0-.966-.785-1.75-1.75-1.75h-8.75c-.965 0-1.75.784-1.75 1.75V4h-3.5a.874.874 0 0 0-.875.875v.875c0 .12.098.219.219.219H2.37l.676 14.3a1.75 1.75 0 0 0 1.747 1.669h12.414c.935 0 1.703-.733 1.747-1.668l.676-14.301h1.651a.22.22 0 0 0 .219-.219v-.875A.874.874 0 0 0 20.625 4m-5.469 0H6.844V2.031h8.312z" fill="#B88E2F"/></svg></button>
      `;
      cartItemsContainer.appendChild(itemElement);
    });
  })
  .catch((err) => console.error("Error fetching data:", err));
