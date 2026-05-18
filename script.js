const products=[

{
id:1,
name:"Gaming Laptop",
price:85000,
image:"https://picsum.photos/300?1"
},

{
id:2,
name:"iPhone 15",
price:79000,
image:"https://picsum.photos/300?2"
},

{
id:3,
name:"Samsung S24",
price:68000,
image:"https://picsum.photos/300?3"
},

{
id:4,
name:"Smart Watch",
price:6500,
image:"https://picsum.photos/300?4"
},

{
id:5,
name:"Headphones",
price:4500,
image:"https://picsum.photos/300?5"
},

{
id:6,
name:"Bluetooth Speaker",
price:2500,
image:"https://picsum.photos/300?6"
},

{
id:7,
name:"DSLR Camera",
price:55000,
image:"https://picsum.photos/300?7"
},

{
id:8,
name:"Keyboard",
price:1500,
image:"https://picsum.photos/300?8"
},

{
id:9,
name:"Mouse",
price:800,
image:"https://picsum.photos/300?9"
},

{
id:10,
name:"Monitor",
price:12000,
image:"https://picsum.photos/300?10"
},

{
id:11,
name:"Printer",
price:9000,
image:"https://picsum.photos/300?11"
},

{
id:12,
name:"Tablet",
price:25000,
image:"https://picsum.photos/300?12"
},

{
id:13,
name:"Power Bank",
price:1200,
image:"https://picsum.photos/300?13"
},

{
id:14,
name:"Smart TV",
price:45000,
image:"https://picsum.photos/300?14"
},

{
id:15,
name:"Earbuds",
price:2500,
image:"https://picsum.photos/300?15"
},

{
id:16,
name:"Router",
price:3000,
image:"https://picsum.photos/300?16"
},

{
id:17,
name:"SSD",
price:4500,
image:"https://picsum.photos/300?17"
},

{
id:18,
name:"Pendrive",
price:800,
image:"https://picsum.photos/300?18"
},

{
id:19,
name:"Projector",
price:30000,
image:"https://picsum.photos/300?19"
},

{
id:20,
name:"Drone",
price:45000,
image:"https://picsum.photos/300?20"
},

{
id:21,
name:"VR Headset",
price:35000,
image:"https://picsum.photos/300?21"
},

{
id:22,
name:"Microphone",
price:2500,
image:"https://picsum.photos/300?22"
},

{
id:23,
name:"Gaming Chair",
price:12000,
image:"https://picsum.photos/300?23"
},

{
id:24,
name:"Webcam",
price:3000,
image:"https://picsum.photos/300?24"
},

{
id:25,
name:"CPU Cabinet",
price:7000,
image:"https://picsum.photos/300?25"
}

];

let cart=0;

function displayProducts(list){

const container=
document.getElementById(
"products"
);

container.innerHTML="";

list.forEach(product=>{

container.innerHTML+=`

<div class="card">

<img src=
"${product.image}">

<h3>

${product.name}

</h3>

<div class="price">

₹${product.price}

</div>

<button onclick=
"addToCart()">

Add To Cart

</button>

</div>

`;

});

}

function addToCart(){

cart++;

document.getElementById(
"count"
).innerText=cart;

}

function searchProducts(){

let value=

document
.getElementById(
"search"
)
.value
.toLowerCase();

let filtered=

products.filter(

product=>

product.name
.toLowerCase()
.includes(value)

);

displayProducts(
filtered
);

}

displayProducts(
products
);