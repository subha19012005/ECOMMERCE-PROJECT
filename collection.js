function filterProducts(){
    var input=document.getElementById("searchinput").value.toLowerCase();
    var products=document.querySelectorAll(".product-box");
    for(var i=0;i<products.length;i++){
        let product=products[i];
        let productName=product.querySelector('p').textContent.toLowerCase();
        if(productName.includes(input)){
            product.style.display='';
            found=true;
        }
        else{
            product.style.display='none'
        }
    }
}
document.getElementById("input").addEventListener("input",filterProducts);
