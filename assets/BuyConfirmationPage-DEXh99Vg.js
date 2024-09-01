import{b as l,j as e}from"./index-D6gqMyFK.js";const r=()=>{const t=l(),{orderNumber:n,orderDetails:s}=t.state||{};return e.jsxs("div",{className:"container p-8 mx-auto text-center",children:[e.jsx("h1",{className:"mb-4 text-4xl font-bold text-green-600",children:"Thank You for Your Order!"}),e.jsxs("p",{className:"mb-8 text-lg",children:["Your order ",e.jsx("strong",{children:n})," has been successfully placed."]}),e.jsxs("div",{className:"p-6 mb-8 bg-white rounded-md shadow-md",children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"Order Summary"}),e.jsxs("ul",{className:"mb-4 text-left",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Item:"})," ",s==null?void 0:s.item]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Total:"})," $",s==null?void 0:s.total.toFixed(2)]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Payment Method:"})," ",s==null?void 0:s.paymentMethod]})]}),e.jsx("p",{children:"We’ve sent a confirmation email to your provided email address."}),e.jsxs("p",{children:["If you have any questions, feel free to ",e.jsx("a",{href:"/contact",className:"text-blue-500 underline",children:"contact us"}),"."]})]}),e.jsx("a",{href:"/",className:"px-6 py-3 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700",children:"Continue Shopping"})]})};export{r as default};