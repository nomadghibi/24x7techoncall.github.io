import{r as a,j as e}from"./index-DBOSAsQq.js";import{Q as d,a0 as c,b as v,R as y,f as u,S as f,c as j,g as w,n as N}from"./index-CYZEigjK.js";import{H as T}from"./HeroSection-CLhr2DqG.js";import{h as m}from"./ITsolution-BLgG5gtO.js";const O=()=>{const[t,g]=a.useState({name:"",phone:"",email:"",serviceType:"",serviceDeliveryMethod:"",problem:""}),[i,o]=a.useState(null),r=[{id:"technology-assessment",title:"Technology Assessment",description:"Evaluating your current IT infrastructure and identifying areas for improvement.",details:"Our Technology Assessment service involves a thorough evaluation of your existing IT infrastructure, including hardware, software, and network systems. We identify strengths, weaknesses, and opportunities for improvement, and provide you with a detailed report and recommendations.",icon:e.jsx(d,{className:"mb-2 text-4xl text-blue-500"})},{id:"strategic-planning",title:"Strategic Planning",description:"Developing long-term IT strategies aligned with your business goals.",details:"Our Strategic Planning service involves analyzing your current IT infrastructure and aligning it with your business objectives. We create a strategic plan that ensures your IT investments support your long-term goals.",icon:e.jsx(c,{className:"mb-2 text-4xl text-blue-500"})},{id:"network-design",title:"Network Design and Implementation",description:"Creating robust and scalable network solutions.",details:"With Network Design and Implementation, we assess your current IT setup and recommend changes that improve performance, reduce costs, and increase efficiency. This includes server consolidation, virtualization, and cloud migration strategies.",icon:e.jsx(v,{className:"mb-2 text-4xl text-blue-500"})},{id:"cybersecurity-solutions",title:"Cybersecurity Solutions",description:"Implementing security measures to protect your business from cyber threats.",details:"Our Cybersecurity Solutions service involves implementing security measures to protect your business from cyber threats. This includes firewall setup, antivirus software installation, and regular security audits.",icon:e.jsx(y,{className:"mb-2 text-4xl text-blue-500"})},{id:"cloud-solutions",title:"Cloud Solutions",description:"Advising on and implementing cloud-based services.",details:"Our Cloud Solutions service involves advising on and implementing cloud-based services. This includes cloud storage setup, cloud-based software installation, and cloud migration strategies.",icon:e.jsx(u,{className:"mb-2 text-4xl text-blue-500"})},{id:"disaster-recovery",title:"Disaster Recovery Planning",description:"Preparing for data loss and ensuring business continuity.",details:"Our Disaster Recovery Planning service involves preparing for data loss and ensuring business continuity. This includes data backup setup, disaster recovery plan development, and regular disaster recovery drills.",icon:e.jsx(f,{className:"mb-2 text-4xl text-blue-500"})},{id:"compliance-risk",title:"Compliance and Risk Management",description:"Ensuring your IT systems comply with industry regulations.",details:"Our Compliance and Risk Management service involves ensuring your IT systems comply with industry regulations. This includes regular compliance audits, risk assessments, and compliance training for your staff.",icon:e.jsx(c,{className:"mb-2 text-4xl text-blue-500"})},{id:"infrastructure-upgrades",title:"IT Infrastructure Upgrades",description:"Recommending and implementing hardware and software upgrades.",details:"Our IT Infrastructure Upgrades service involves recommending and implementing hardware and software upgrades. This includes server upgrades, software updates, and network improvements.",icon:e.jsx(d,{className:"mb-2 text-4xl text-blue-500"})},{id:"data-management",title:"Data Management and Analytics",description:"Optimizing data storage and leveraging analytics for business insights.",details:"Our Data Management and Analytics service involves optimizing data storage and leveraging analytics for business insights. This includes data warehousing, business intelligence software installation, and data analysis services.",icon:e.jsx(j,{className:"mb-2 text-4xl text-blue-500"})},{id:"training-support",title:"Training and Support",description:"Providing training for your staff and ongoing IT support.",details:"Our Training and Support service involves providing training for your staff and ongoing IT support. This includes IT training sessions, help desk support, and regular IT maintenance services.",icon:e.jsx(w,{className:"mb-2 text-4xl text-blue-500"})},{id:"business-continuity",title:"Business Continuity Planning",description:"Ensuring your business can continue to operate during and after a disaster.",details:"Our business continuity planning services help you develop strategies to ensure your business can continue to operate during and after a disaster, minimizing downtime and data loss.",icon:e.jsx(N,{className:"mb-2 text-4xl text-blue-500"})},{id:"virtualization",title:"Virtualization Solutions",description:"Optimizing your IT infrastructure through virtualization technologies.",details:"We provide virtualization solutions to help you optimize your IT infrastructure, improve resource utilization, and reduce costs through server, storage, and network virtualization.",icon:e.jsx(u,{className:"mb-2 text-4xl text-blue-500"})}],p=s=>{o(s.id===(i==null?void 0:i.id)?null:s)},l=s=>{s.target.closest(".service-card")||o(null)};a.useEffect(()=>(document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}),[]);const n=s=>{const{name:x,value:b}=s.target;g({...t,[x]:b})},h=s=>{s.preventDefault(),console.log(t)};return e.jsxs("div",{children:[e.jsx(T,{title:"IT Consulting",image:m}),e.jsxs("div",{className:"container p-8 mx-auto",children:[e.jsx("h2",{className:"mb-4 text-3xl font-semibold",children:"Expert IT Consulting Services"}),e.jsx("p",{className:"mb-4",children:"At Best Computer Tech, we specialize in comprehensive IT consulting services to help your business leverage technology for growth and efficiency. Our certified consultants provide expert advice and customized solutions to meet your specific business needs."}),e.jsx("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",children:r.map(s=>e.jsxs("div",{className:"relative p-6 text-center bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-2xl service-card",onClick:()=>p(s),children:[s.icon,e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:s.title}),e.jsx("p",{className:"text-gray-700",children:s.description}),(i==null?void 0:i.id)===s.id&&e.jsx("div",{className:"absolute top-0 left-0 right-0 p-4 mt-2 text-white bg-blue-500 border-t-2 border-blue-500 rounded-b-lg shadow-lg",children:e.jsx("p",{className:"text-white",children:s.details})})]},s.id))}),e.jsxs("div",{className:"grid grid-cols-1 gap-10 mt-8 md:grid-cols-2",children:[e.jsxs("div",{className:"relative flex items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg",style:{backgroundImage:`url(${m})`,backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsx("div",{className:"absolute inset-0 bg-blue-500 rounded-lg opacity-75"}),e.jsxs("div",{className:"relative text-center text-white",children:[e.jsx("h3",{className:"mb-2 text-3xl font-semibold",children:"STARTING AT $95"}),e.jsx("p",{children:"Our Managed IT Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages."})]})]}),e.jsxs("div",{className:"p-6 bg-blue-100 rounded-lg shadow-lg",children:[e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:"Tell Us About Your IT Consulting Needs"}),e.jsxs("form",{onSubmit:h,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"name",children:"Name"}),e.jsx("input",{type:"text",name:"name",value:t.name,onChange:n,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"phone",children:"Phone No."}),e.jsx("input",{type:"text",name:"phone",value:t.phone,onChange:n,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"email",children:"Email"}),e.jsx("input",{type:"email",name:"email",value:t.email,onChange:n,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"serviceType",children:"Type of Service"}),e.jsxs("select",{name:"serviceType",value:t.serviceType,onChange:n,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0,children:[e.jsx("option",{value:"",children:"Select a service type"}),r.map(s=>e.jsx("option",{value:s.id,children:s.title},s.id)),e.jsx("option",{value:"other",children:"Other"})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"serviceDeliveryMethod",children:"Service Delivery Method"}),e.jsxs("select",{name:"serviceDeliveryMethod",value:t.serviceDeliveryMethod,onChange:n,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0,children:[e.jsx("option",{value:"",children:"Select a delivery method"}),e.jsx("option",{value:"remote-service",children:"Remote Service"}),e.jsx("option",{value:"onsite-service",children:"Onsite Service"})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"problem",children:"Explanation of Your IT Consulting Needs"}),e.jsx("textarea",{name:"problem",value:t.problem,onChange:n,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsx("button",{type:"submit",className:"px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline",children:"Submit"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-8 mt-8 md:grid-cols-2",children:[e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg",children:[e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:"Providing IT Services to Palm Bay, Melbourne, the Space Coast of Florida, and Across the USA"}),e.jsx("p",{className:"mb-4",children:"For more than two decades, Best Computer Tech has resolved over 10,000 IT issues, enabling businesses to focus on growth rather than IT concerns. Proudly serving Palm Bay, Melbourne, the Space Coast of Florida, and across the USA, our team of IT experts is well-acquainted with the needs of our clients. Our experienced technicians understand the unique requirements of local businesses. We deliver personalized and efficient managed IT services to ensure smooth and uninterrupted operations, allowing you to stay focused on your core business objectives. Choose Best Computer Tech for reliable IT support and expert solutions tailored to your business."})]}),e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg",children:[e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:"Steps to Optimize Your Business IT"}),e.jsxs("ol",{className:"mb-4 list-decimal list-inside",children:[e.jsx("li",{children:"Contact Us: Reach out to our support team via phone or email."}),e.jsx("li",{children:"Describe Your Needs: Provide details about the IT consulting services you're seeking."}),e.jsx("li",{children:"Get a Quote: Receive an estimated cost for the services."}),e.jsx("li",{children:"Schedule a Service: Set up an appointment for our consultants to visit."}),e.jsx("li",{children:"Implementation Process: Our consultants will provide the necessary IT solutions."}),e.jsx("li",{children:"Ongoing Support: Receive follow-up support and maintenance as needed."})]})]})]}),e.jsxs("div",{className:"p-6 mt-8 text-center text-white bg-blue-500 rounded-lg shadow-lg",children:[e.jsx("h5",{className:"mb-2 text-xl font-semibold",children:"Proudly headquartered and staffed in the USA"}),e.jsx("h3",{className:"text-3xl font-semibold",children:"Your Trusted IT Partner Across Florida and the USA"})]})]})]})};export{O as default};
