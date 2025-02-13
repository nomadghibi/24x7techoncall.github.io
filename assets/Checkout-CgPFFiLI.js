import{b as N,u as j,r as i,j as e}from"./index-D6gqMyFK.js";const v=()=>{var u;const p=N(),o=j(),t=(u=p.state)==null?void 0:u.service;if(!t)return o("/"),null;const m=(t==null?void 0:t.isProduct)||!1,[a,b]=i.useState({item:(t==null?void 0:t.title)||"Default Service",price:parseFloat(t==null?void 0:t.price.replace("$",""))||0,shipping:"Free shipping",tax:0,total:parseFloat(t==null?void 0:t.price.replace("$",""))||0});i.useEffect(()=>{if(m){const s=a.price*.07;b(l=>({...l,tax:s,total:l.price+s}))}},[m,a.price]);const[r,h]=i.useState({firstName:"",lastName:"",streetAddress:"",apartment:"",city:"",state:"",zip:"",country:"United States"}),[c,g]=i.useState(""),d=s=>{const{name:l,value:n}=s.target;h(x=>({...x,[l]:n}))};return i.useEffect(()=>{const s=document.createElement("script");return s.src="https://www.paypal.com/sdk/js?client-id=AU7xP5heE34hNJdS6nkH-9elJjzlpTyh3VbaXgm7SaGgbLwcXLslaw9BRkFJKZhu7HEku-9PuZl34gMm",s.addEventListener("load",()=>{window.paypal.Buttons({createOrder:(l,n)=>n.order.create({purchase_units:[{amount:{value:a.total.toFixed(2)},description:a.item}]}),onApprove:async(l,n)=>n.order.capture().then(x=>{const y=Math.floor(Math.random()*1e6);o("/buy-confirmation",{state:{orderNumber:y,orderDetails:{item:a.item,total:a.total,paymentMethod:"PayPal",billingDetails:r}}})}),onError:l=>{g("Payment processing failed. Please try again."),console.error("PayPal Checkout onError",l)}}).render("#paypal-button-container")}),document.body.appendChild(s),()=>{s.removeEventListener("load",null),document.body.removeChild(s)}},[a,r,o]),e.jsxs("div",{className:"max-w-4xl p-6 mx-auto",children:[e.jsx("h1",{className:"mb-8 text-3xl font-bold text-center",children:"Checkout"}),e.jsxs("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2",children:[e.jsxs("div",{className:"p-6 bg-white rounded-md shadow-md",children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"Billing Details"}),e.jsxs("form",{children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"First Name"}),e.jsx("input",{type:"text",name:"firstName",value:r.firstName,onChange:d,required:!0,className:"w-full p-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Last Name"}),e.jsx("input",{type:"text",name:"lastName",value:r.lastName,onChange:d,required:!0,className:"w-full p-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Street Address"}),e.jsx("input",{type:"text",name:"streetAddress",value:r.streetAddress,onChange:d,placeholder:"House number and street name",required:!0,className:"w-full p-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"Apartment, Suite, Unit, etc. (optional)"}),e.jsx("input",{type:"text",name:"apartment",value:r.apartment,onChange:d,className:"w-full p-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"City"}),e.jsx("input",{type:"text",name:"city",value:r.city,onChange:d,required:!0,className:"w-full p-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"State"}),e.jsx("input",{type:"text",name:"state",value:r.state,onChange:d,required:!0,className:"w-full p-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:"ZIP / Postal Code"}),e.jsx("input",{type:"text",name:"zip",value:r.zip,onChange:d,required:!0,className:"w-full p-2 border border-gray-300 rounded-md"})]})]})]})]}),e.jsxs("div",{className:"p-6 bg-white rounded-md shadow-md",children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"Your Order"}),e.jsxs("ul",{className:"mb-6",children:[e.jsx("li",{className:"mb-2 text-lg",children:a.item}),e.jsxs("li",{className:"mb-1 text-gray-700",children:["Subtotal: $",a.price.toFixed(2)]}),e.jsx("li",{className:"mb-1 text-gray-700",children:a.shipping}),m&&e.jsxs("li",{className:"mb-1 text-gray-700",children:["Tax: $",a.tax.toFixed(2)]}),e.jsxs("li",{className:"text-xl font-semibold",children:["Total: $",a.total.toFixed(2)]})]}),e.jsx("div",{id:"paypal-button-container"}),c&&e.jsx("p",{className:"mb-4 text-red-500",children:c})]})]})]})};export{v as default};
