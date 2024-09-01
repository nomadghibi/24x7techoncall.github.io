import{r as l,j as e}from"./index-DBOSAsQq.js";import{f as x,E as b,n as g,S as f,v,F as y}from"./index-CYZEigjK.js";import{H as j}from"./HeroSection-CLhr2DqG.js";const d="/assets/cloudsolutions-R1Ym3J_E.webp",C=()=>{const[t,c]=l.useState({name:"",phone:"",email:"",serviceType:"",serviceDeliveryMethod:"",problem:""}),[s,n]=l.useState(null),a=[{id:"cloud-consulting",title:"Cloud Consulting",description:"Expert advice on cloud strategy and implementation.",details:"Our cloud consulting services help you determine the best cloud strategy for your business, ensuring seamless migration and optimization.",icon:e.jsx(x,{className:"mb-2 text-4xl text-blue-500"})},{id:"cloud-migration",title:"Cloud Migration",description:"Seamlessly migrate your existing infrastructure to the cloud.",details:"We provide comprehensive cloud migration services, ensuring a smooth transition with minimal disruption to your business operations.",icon:e.jsx(b,{className:"mb-2 text-4xl text-blue-500"})},{id:"cloud-security",title:"Cloud Security",description:"Implementing robust security measures for cloud environments.",details:"Our cloud security services include threat detection, data encryption, and continuous monitoring to protect your cloud infrastructure.",icon:e.jsx(g,{className:"mb-2 text-4xl text-blue-500"})},{id:"cloud-backup-recovery",title:"Cloud Backup and Recovery",description:"Ensuring your data is safely backed up and recoverable.",details:"We offer reliable cloud backup and disaster recovery solutions to protect your critical business data.",icon:e.jsx(f,{className:"mb-2 text-4xl text-blue-500"})},{id:"cloud-monitoring",title:"Cloud Monitoring",description:"Continuous monitoring of your cloud infrastructure.",details:"Our cloud monitoring services provide real-time insights and alerts to ensure optimal performance and security of your cloud environment.",icon:e.jsx(v,{className:"mb-2 text-4xl text-blue-500"})},{id:"cloud-optimization",title:"Cloud Optimization",description:"Maximizing efficiency and cost-effectiveness of your cloud services.",details:"We help optimize your cloud resources to improve performance and reduce costs, ensuring you get the most out of your cloud investment.",icon:e.jsx(y,{className:"mb-2 text-4xl text-blue-500"})}],u=o=>{n(o.id===(s==null?void 0:s.id)?null:o)},r=o=>{o.target.closest(".service-card")||n(null)};l.useEffect(()=>(document.addEventListener("click",r),()=>{document.removeEventListener("click",r)}),[]);const i=o=>{const{name:h,value:p}=o.target;c({...t,[h]:p})},m=o=>{o.preventDefault(),console.log(t)};return e.jsxs("div",{children:[e.jsx(j,{title:"Cloud Solutions",image:d}),e.jsxs("div",{className:"container p-8 mx-auto",children:[e.jsx("h2",{className:"mb-4 text-3xl font-semibold",children:"Expert Cloud Solutions for Small to Medium Businesses"}),e.jsx("p",{className:"mb-4",children:"At Best Computer Tech, we specialize in providing comprehensive cloud solutions to help small and medium businesses leverage the power of cloud technology. Our certified experts offer tailored solutions to ensure seamless cloud adoption, security, and optimization."}),e.jsx("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",children:a.map(o=>e.jsxs("div",{className:"relative p-6 text-center bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-2xl service-card",onClick:()=>u(o),children:[o.icon,e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:o.title}),e.jsx("p",{className:"text-gray-700",children:o.description}),(s==null?void 0:s.id)===o.id&&e.jsx("div",{className:"absolute top-0 left-0 right-0 p-4 mt-2 text-white bg-blue-500 border-t-2 border-blue-500 rounded-b-lg shadow-lg",children:e.jsx("p",{className:"text-white",children:o.details})})]},o.id))}),e.jsxs("div",{className:"grid grid-cols-1 gap-10 mt-8 md:grid-cols-2",children:[e.jsxs("div",{className:"relative flex items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg",style:{backgroundImage:`url(${d})`,backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsx("div",{className:"absolute inset-0 bg-blue-500 rounded-lg opacity-75"}),e.jsxs("div",{className:"relative text-center text-white",children:[e.jsx("h3",{className:"mb-2 text-3xl font-semibold",children:"STARTING AT $95"}),e.jsx("p",{children:"Our Cloud Solutions are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages."})]})]}),e.jsxs("div",{className:"p-6 bg-blue-100 rounded-lg shadow-lg",children:[e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:"Tell Us About Your Cloud Solution Needs"}),e.jsxs("form",{onSubmit:m,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"name",children:"Name"}),e.jsx("input",{type:"text",name:"name",value:t.name,onChange:i,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"phone",children:"Phone No."}),e.jsx("input",{type:"text",name:"phone",value:t.phone,onChange:i,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"email",children:"Email"}),e.jsx("input",{type:"email",name:"email",value:t.email,onChange:i,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"serviceType",children:"Type of Service"}),e.jsxs("select",{name:"serviceType",value:t.serviceType,onChange:i,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0,children:[e.jsx("option",{value:"",disabled:!0,children:"Select a service"}),a.map(o=>e.jsx("option",{value:o.id,children:o.title},o.id))]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"serviceDeliveryMethod",children:"Service Delivery Method"}),e.jsxs("select",{name:"serviceDeliveryMethod",value:t.serviceDeliveryMethod,onChange:i,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0,children:[e.jsx("option",{value:"",children:"Select a delivery method"}),e.jsx("option",{value:"remote-service",children:"Remote Service"}),e.jsx("option",{value:"onsite-service",children:"Onsite Service"})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"problem",children:"Explanation of Your Cloud Solution Needs"}),e.jsx("textarea",{name:"problem",value:t.problem,onChange:i,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsx("button",{type:"submit",className:"px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline",children:"Submit"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-8 mt-8 md:grid-cols-2",children:[e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg",children:[e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:"Providing Cloud Solutions to Palm Bay, Melbourne, the Space Coast of Florida, and Across the USA"}),e.jsx("p",{className:"mb-4",children:"For more than two decades, Best Computer Tech has resolved over 10,000 IT issues, enabling businesses to focus on growth rather than IT concerns. Proudly serving Palm Bay, Melbourne, the Space Coast of Florida, and across the USA, our team of cloud experts understands the unique requirements of local businesses. We deliver personalized and efficient cloud solutions to ensure smooth and uninterrupted operations, allowing you to stay focused on your core business objectives. Choose Best Computer Tech for reliable cloud support and expert solutions tailored to your business."})]}),e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg",children:[e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:"Steps to Optimize Your Cloud Infrastructure"}),e.jsxs("ol",{className:"mb-4 list-decimal list-inside",children:[e.jsx("li",{children:"Contact Us: Reach out to our support team via phone or email."}),e.jsx("li",{children:"Describe Your Needs: Provide details about the cloud solutions you're seeking."}),e.jsx("li",{children:"Get a Quote: Receive an estimated cost for the services."}),e.jsx("li",{children:"Schedule a Service: Set up an appointment for our technicians to visit."}),e.jsx("li",{children:"Implementation Process: Our technicians will provide the necessary cloud solutions."}),e.jsx("li",{children:"Ongoing Support: Receive follow-up support and maintenance as needed."})]})]})]}),e.jsxs("div",{className:"p-6 mt-8 text-center text-white bg-blue-500 rounded-lg shadow-lg",children:[e.jsx("h5",{className:"mb-2 text-xl font-semibold",children:"Proudly headquartered and staffed in the USA"}),e.jsx("h3",{className:"text-3xl font-semibold",children:"Your Trusted Cloud Solutions Partner Across Florida and the USA"})]})]})]})};export{C as default};
