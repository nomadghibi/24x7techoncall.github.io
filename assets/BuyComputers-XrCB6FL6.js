import{u as n,j as e}from"./index-D6gqMyFK.js";import{H as m}from"./Helmet-CuxuLgP6.js";import{c as i}from"./computers-BQcwtrXF.js";const h=()=>{const a=n(),l=[{title:"BCT 17.3” HP Bundle",specs:["17.3 inch brightview touch screen","AMD Ryzen 5500 Processor","12 GB Memory","1 TB Hard Drive"],services:["Operating System Installation and Software Setup","Data Migration Service","Performance Optimization","Security Setup","Warranty and Customer Support"],price:"$930.00",image:i,isProduct:!0},{title:"BCT 15.6” Dell Bundle",specs:["15.6 inch FHD display","Intel i7 11th Gen Processor","16 GB Memory","512 GB SSD"],services:["Operating System Installation and Software Setup","Data Migration Service","Performance Optimization","Security Setup","Warranty and Customer Support"],price:"$850.00",image:i,isProduct:!0},{title:"BCT 13.3” MacBook Bundle",specs:["13.3 inch Retina display","Apple M1 Processor","8 GB Memory","256 GB SSD"],services:["Operating System Installation and Software Setup","Data Migration Service","Performance Optimization","Security Setup","Warranty and Customer Support"],price:"$1200.00",image:i,isProduct:!0}],c=s=>{a("/checkout",{state:{service:s}})};return e.jsxs("div",{className:"container p-8 mx-auto",children:[e.jsxs(m,{children:[e.jsx("title",{children:"Buy Computers - Best Computer Tech"}),e.jsx("link",{rel:"canonical",href:"https://bestcomputertec.com/buy-computers"})]}),e.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"Buy Computers"}),l.map((s,o)=>e.jsxs("div",{className:"mb-12",children:[e.jsx("h2",{className:"mb-4 text-3xl font-bold",children:s.title}),e.jsxs("div",{className:"flex flex-col lg:flex-row",children:[e.jsx("div",{className:"flex-1",children:e.jsx("img",{src:s.image,alt:s.title,className:"w-full h-auto lg:max-w-md"})}),e.jsxs("div",{className:"flex-1 lg:ml-8",children:[e.jsx("ul",{className:"mb-4 list-disc list-inside",children:s.specs.map((t,r)=>e.jsx("li",{children:t},r))}),e.jsx("h3",{className:"mb-4 text-2xl font-bold",children:"Seamless Transition Package:"}),e.jsx("p",{className:"mb-4",children:"Every computer purchased from Best Computer Tech LLC comes with an all-inclusive data transfer service. This service ensures that all your files are seamlessly transferred from your old computer to your new one. Plus, it also includes:"}),e.jsx("ul",{className:"mb-4 list-disc list-inside",children:s.services.map((t,r)=>e.jsx("li",{children:t},r))}),e.jsxs("h3",{className:"mb-4 text-2xl font-bold",children:["Total: ",s.price]}),e.jsxs("button",{onClick:()=>c(s),className:"px-6 py-3 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700",children:["PURCHASE ",s.title.split(" ")[2].toUpperCase()," BUNDLE"]})]})]})]},o))]})};export{h as default};