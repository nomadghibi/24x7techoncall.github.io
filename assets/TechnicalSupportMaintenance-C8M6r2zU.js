import{r as i,j as e}from"./index-ZYBAOPRB.js";import{F as x,a as f,n as b,b as g,c as v,$ as y,U as j,f as w,t as N}from"./index-DmV7JgmL.js";import{H as S}from"./HeroSection-DtvANrTv.js";import{e as k}from"./index-DpmFZVTh.js";import{p as d}from"./businessservices-B1848YW5.js";const O=()=>{const[s,u]=i.useState({name:"",phone:"",email:"",serviceType:"",serviceDeliveryMethod:"",problem:""}),[o,n]=i.useState(null),l=[{id:"hardware-repairs",title:"Hardware Repairs",description:"Fixing broken screens, malfunctioning keyboards, and other hardware issues.",details:"Our hardware repair services include fixing broken screens, malfunctioning keyboards, and other hardware issues to ensure your devices are functioning properly.",icon:e.jsx(x,{className:"mb-2 text-4xl text-blue-500"})},{id:"software-troubleshooting",title:"Software Troubleshooting",description:"Resolving operating system errors, application crashes, and software installation issues.",details:"We provide software troubleshooting services to resolve operating system errors, application crashes, and software installation issues, ensuring your software runs smoothly.",icon:e.jsx(f,{className:"mb-2 text-4xl text-blue-500"})},{id:"virus-malware-removal",title:"Virus and Malware Removal",description:"Protecting your computer from harmful viruses and ensuring your data is safe.",details:"Our virus and malware removal services protect your computer from harmful viruses and ensure your data is safe and secure.",icon:e.jsx(b,{className:"mb-2 text-4xl text-blue-500"})},{id:"network-setup-support",title:"Network Setup and Support",description:"Setting up and maintaining secure and efficient home or office networks.",details:"We provide network setup and support services to set up and maintain secure and efficient home or office networks, ensuring seamless connectivity.",icon:e.jsx(g,{className:"mb-2 text-4xl text-blue-500"})},{id:"data-recovery",title:"Data Recovery",description:"Retrieving lost or corrupted data from hard drives and other storage devices.",details:"Our data recovery services retrieve lost or corrupted data from hard drives and other storage devices, helping you recover important information.",icon:e.jsx(v,{className:"mb-2 text-4xl text-blue-500"})},{id:"remote-computer-support",title:"Remote Computer Support",description:"Providing professional support for your computer issues without the need for a technician visit.",details:"We offer remote computer support services to provide professional assistance for your computer issues without the need for a technician visit.",icon:e.jsx(y,{className:"mb-2 text-4xl text-blue-500"})},{id:"computer-training",title:"Computer Training",description:"Learn how to use your computer more effectively with our professional training sessions.",details:"Our computer training services offer professional sessions to help you learn how to use your computer more effectively, enhancing your skills and productivity.",icon:e.jsx(j,{className:"mb-2 text-4xl text-blue-500"})},{id:"cloud-consulting",title:"Cloud Consulting",description:"Get expert cloud support from the comfort of your home.",details:"We provide cloud consulting services to help you leverage cloud solutions from the comfort of your home, improving flexibility and scalability.",icon:e.jsx(w,{className:"mb-2 text-4xl text-blue-500"})},{id:"security-camera-installation",title:"Security Camera and Network Cabling Installation",description:"Professional installation of security cameras and network cabling for your home or office.",details:"Our security camera and network cabling installation services offer professional setup to ensure the security and connectivity of your home or office.",icon:e.jsx(N,{className:"mb-2 text-4xl text-blue-500"})}],m=t=>{n(t.id===(o==null?void 0:o.id)?null:t)},c=t=>{t.target.closest(".service-card")||n(null)};i.useEffect(()=>(document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}),[]);const r=t=>{const{name:a,value:p}=t.target;u({...s,[a]:p})},h=t=>{t.preventDefault(),k.send("service_rjpfye6","template_k76wxi8",t.target,"RRqk9bqjxlo8Agwvr").then(a=>{console.log("SUCCESS!",a.status,a.text),alert("Your message has been sent successfully!")},a=>{console.error("FAILED...",a),alert("Failed to send your message. Please try again later.")})};return e.jsxs("div",{children:[e.jsx(S,{title:"Technical Support & Maintenance",image:d}),e.jsxs("div",{className:"container p-8 mx-auto",children:[e.jsx("h2",{className:"mb-4 text-3xl font-semibold",children:"Comprehensive Technical Support and Maintenance"}),e.jsx("p",{className:"mb-4",children:"At Best Computer Tech, we provide comprehensive technical support and maintenance services to ensure your technology runs smoothly and efficiently. Our certified technicians offer a range of services tailored to meet the unique needs of your business and home."}),e.jsx("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",children:l.map(t=>e.jsxs("div",{className:"relative p-6 text-center bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-2xl service-card",onClick:()=>m(t),children:[t.icon,e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:t.title}),e.jsx("p",{className:"text-gray-700",children:t.description}),(o==null?void 0:o.id)===t.id&&e.jsx("div",{className:"absolute top-0 left-0 right-0 p-4 mt-2 text-white bg-blue-500 border-t-2 border-blue-500 rounded-b-lg shadow-lg",children:e.jsx("p",{className:"text-white",children:t.details})})]},t.id))}),e.jsxs("div",{className:"grid grid-cols-1 gap-10 mt-8 md:grid-cols-2",children:[e.jsxs("div",{className:"relative flex items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg",style:{backgroundImage:`url(${d})`,backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsx("div",{className:"absolute inset-0 bg-blue-500 rounded-lg opacity-75"}),e.jsxs("div",{className:"relative text-center text-white",children:[e.jsx("h3",{className:"mb-2 text-3xl font-semibold",children:"STARTING AT $95"}),e.jsx("p",{children:"Our Technical Support and Maintenance services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages."})]})]}),e.jsxs("div",{className:"p-6 bg-blue-100 rounded-lg shadow-lg",children:[e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:"Tell Us About Your Technical Support Needs"}),e.jsxs("form",{onSubmit:h,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"name",children:"Name"}),e.jsx("input",{type:"text",name:"name",value:s.name,onChange:r,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"phone",children:"Phone No."}),e.jsx("input",{type:"text",name:"phone",value:s.phone,onChange:r,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"email",children:"Email"}),e.jsx("input",{type:"email",name:"email",value:s.email,onChange:r,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"serviceType",children:"Type of Service"}),e.jsxs("select",{name:"serviceType",value:s.serviceType,onChange:r,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0,children:[e.jsx("option",{value:"",children:"Select a service type"}),l.map(t=>e.jsx("option",{value:t.id,children:t.title},t.id)),e.jsx("option",{value:"other",children:"Other"})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"serviceDeliveryMethod",children:"Service Delivery Method"}),e.jsxs("select",{name:"serviceDeliveryMethod",value:s.serviceDeliveryMethod,onChange:r,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0,children:[e.jsx("option",{value:"",children:"Select a delivery method"}),e.jsx("option",{value:"remote-service",children:"Remote Service"}),e.jsx("option",{value:"onsite-service",children:"Onsite Service"})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"problem",children:"Explanation of Your Technical Support Needs"}),e.jsx("textarea",{name:"problem",value:s.problem,onChange:r,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsx("button",{type:"submit",className:"px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline",children:"Submit"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-8 mt-8 md:grid-cols-2",children:[e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg",children:[e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:"Providing IT Services to Palm Bay, Melbourne, the Space Coast of Florida, and Across the USA"}),e.jsx("p",{className:"mb-4",children:"For more than two decades, Best Computer Tech has resolved over 10,000 IT issues, enabling businesses to focus on growth rather than IT concerns. Proudly serving Palm Bay, Melbourne, the Space Coast of Florida, and across the USA, our team of IT experts is well-acquainted with the needs of our clients. Our experienced technicians understand the unique requirements of local businesses. We deliver personalized and efficient managed IT services to ensure smooth and uninterrupted operations, allowing you to stay focused on your core business objectives. Choose Best Computer Tech for reliable IT support and expert solutions tailored to your business."})]}),e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg",children:[e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:"Steps to Optimize Your Business IT"}),e.jsxs("ol",{className:"mb-4 list-decimal list-inside",children:[e.jsx("li",{children:"Contact Us: Reach out to our support team via phone or email."}),e.jsx("li",{children:"Describe Your Needs: Provide details about the managed IT services you're seeking."}),e.jsx("li",{children:"Get a Quote: Receive an estimated cost for the services."}),e.jsx("li",{children:"Schedule a Service: Set up an appointment for our technicians to visit."}),e.jsx("li",{children:"Implementation Process: Our technicians will provide the necessary IT solutions."}),e.jsx("li",{children:"Ongoing Support: Receive follow-up support and maintenance as needed."})]})]})]}),e.jsxs("div",{className:"p-6 mt-8 text-center text-white bg-blue-500 rounded-lg shadow-lg",children:[e.jsx("h5",{className:"mb-2 text-xl font-semibold",children:"Proudly headquartered and staffed in the USA"}),e.jsx("h3",{className:"text-3xl font-semibold",children:"Your Trusted IT Partner Across Florida and the USA"})]})]})]})};export{O as default};
