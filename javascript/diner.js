
const QuantityElement = document.getElementById("product_text");
        
        function increaseQuantity(params) {
            let Quantity = parseInt(QuantityElement.innerText);
            if (Quantity < 10) {
            QuantityElement.innerText = ++Quantity;
            }
            else{
            alert("You odered more than 10 items")
            }
        }
    
        function decreaseQuantity(params) {
            let Quantity = parseInt(QuantityElement.innerText);
           if (Quantity > 1) {
            QuantityElement.innerText = --Quantity;
            }
            else{
            alert("You can't add less than 1 item")
            }
        }