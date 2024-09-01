import{r as n,j as e}from"./index-DBOSAsQq.js";import{n as x,R as b,I as g,f as y,V as v,L as f,g as j,c as w,S as N,F as S}from"./index-CYZEigjK.js";import{H as C}from"./HeroSection-CLhr2DqG.js";const c="/assets/cybersecurity-CmRWbtx8.webp",T=()=>{const[s,d]=n.useState({name:"",phone:"",email:"",serviceType:"",serviceDeliveryMethod:"",problem:""}),[i,r]=n.useState(null),o=[{id:"malware-virus-protection",title:"Malware and Virus Protection",description:"Implementing robust antivirus and anti-malware solutions.",details:"Our Malware and Virus Protection services provide real-time protection, regular scans, automatic updates, safe browsing, and threat removal.",icon:e.jsx(x,{className:"mb-2 text-4xl text-blue-500"})},{id:"firewall-setup",title:"Firewall Setup",description:"Configuring firewalls to protect your network.",details:"Our Firewall Setup services include network monitoring, access control, intrusion prevention, packet filtering, and application gateway.",icon:e.jsx(b,{className:"mb-2 text-4xl text-blue-500"})},{id:"secure-wifi-configuration",title:"Secure Wi-Fi Configuration",description:"Ensuring your home network is secure from intrusions.",details:"Our Secure Wi-Fi Configuration services cover encryption setup, strong passwords, guest networks, network segmentation, and regular updates.",icon:e.jsx(g,{className:"mb-2 text-4xl text-blue-500"})},{id:"data-encryption",title:"Data Encryption",description:"Encrypting your data to prevent unauthorized access.",details:"Our Data Encryption services include encryption algorithms, key management, file encryption, disk encryption, and end-to-end encryption.",icon:e.jsx(y,{className:"mb-2 text-4xl text-blue-500"})},{id:"online-privacy-protection",title:"Online Privacy Protection",description:"Implementing measures to protect your online privacy.",details:"Our Online Privacy Protection services cover VPN usage, private browsing, ad blockers, tracking protection, and data minimization.",icon:e.jsx(v,{className:"mb-2 text-4xl text-blue-500"})},{id:"phishing-scam-protection",title:"Phishing and Scam Protection",description:"Educating and protecting against phishing and online scams.",details:"Our Phishing and Scam Protection services include email filters, training programs, secure browsing, real-time alerts, and incident response.",icon:e.jsx(f,{className:"mb-2 text-4xl text-blue-500"})},{id:"parental-controls",title:"Parental Controls",description:"Setting up controls to protect children online.",details:"Our Parental Controls services offer content filtering, usage monitoring, time limits, safe search, and app restrictions.",icon:e.jsx(j,{className:"mb-2 text-4xl text-blue-500"})},{id:"security-audits",title:"Security Audits",description:"Conducting security audits to identify vulnerabilities.",details:"Our Security Audits services include system scans, risk assessment, penetration testing, compliance checks, and actionable reports.",icon:e.jsx(w,{className:"mb-2 text-4xl text-blue-500"})},{id:"regular-updates-maintenance",title:"Regular Updates and Maintenance",description:"Keeping your systems updated with the latest security patches.",details:"Our Regular Updates and Maintenance services provide automated updates, patch management, system monitoring, performance tuning, and security enhancements.",icon:e.jsx(N,{className:"mb-2 text-4xl text-blue-500"})},{id:"consultation-support",title:"Consultation and Support",description:"Providing expert advice and ongoing support for cybersecurity.",details:"Our Consultation and Support services offer personalized consultations, 24/7 support, incident response, security planning, and ongoing education.",icon:e.jsx(S,{className:"mb-2 text-4xl text-blue-500"})}],u=t=>{r(t.id===(i==null?void 0:i.id)?null:t)},l=t=>{t.target.closest(".service-card")||r(null)};n.useEffect(()=>(document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}),[]);const a=t=>{const{name:p,value:h}=t.target;d({...s,[p]:h})},m=t=>{t.preventDefault(),console.log(s)};return e.jsxs("div",{children:[e.jsx(C,{title:"Cybersecurity for Home Users",image:c}),e.jsxs("div",{className:"container p-8 mx-auto",children:[e.jsx("h2",{className:"mb-4 text-3xl font-semibold",children:"Expert Cybersecurity Services for Home Users"}),e.jsx("p",{className:"mb-4",children:"At Best Computer Tech, we specialize in comprehensive cybersecurity services for home users to protect your personal information and devices from cyber threats. Our certified technicians provide reliable solutions to ensure your online safety and security."}),e.jsx("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",children:o.map(t=>e.jsxs("div",{className:"relative p-6 text-center bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-2xl service-card",onClick:()=>u(t),children:[t.icon,e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:t.title}),e.jsx("p",{className:"text-gray-700",children:t.description}),(i==null?void 0:i.id)===t.id&&e.jsx("div",{className:"absolute top-0 left-0 right-0 p-4 mt-2 text-white bg-blue-500 border-t-2 border-blue-500 rounded-b-lg shadow-lg",children:e.jsx("p",{className:"text-white",children:t.details})})]},t.id))}),e.jsxs("div",{className:"grid grid-cols-1 gap-10 mt-8 md:grid-cols-2",children:[e.jsxs("div",{className:"relative flex items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg",style:{backgroundImage:`url(${c})`,backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsx("div",{className:"absolute inset-0 bg-blue-500 rounded-lg opacity-75"}),e.jsxs("div",{className:"relative text-center text-white",children:[e.jsx("h3",{className:"mb-2 text-3xl font-semibold",children:"STARTING AT $95"}),e.jsx("p",{children:"Our Cybersecurity Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages."})]})]}),e.jsxs("div",{className:"p-6 bg-blue-100 rounded-lg shadow-lg",children:[e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:"Tell Us About Your Cybersecurity Needs"}),e.jsxs("form",{onSubmit:m,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"name",children:"Name"}),e.jsx("input",{type:"text",name:"name",value:s.name,onChange:a,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"phone",children:"Phone No."}),e.jsx("input",{type:"text",name:"phone",value:s.phone,onChange:a,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"email",children:"Email"}),e.jsx("input",{type:"email",name:"email",value:s.email,onChange:a,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"serviceType",children:"Type of Service"}),e.jsxs("select",{name:"serviceType",value:s.serviceType,onChange:a,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0,children:[e.jsx("option",{value:"",disabled:!0,children:"Select a service type"}),o.map(t=>e.jsx("option",{value:t.id,children:t.title},t.id))]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"serviceDeliveryMethod",children:"Service Delivery Method"}),e.jsxs("select",{name:"serviceDeliveryMethod",value:s.serviceDeliveryMethod,onChange:a,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0,children:[e.jsx("option",{value:"",children:"Select a delivery method"}),e.jsx("option",{value:"remote-service",children:"Remote Service"}),e.jsx("option",{value:"onsite-service",children:"Onsite Service"})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"problem",children:"Explanation of Your Cybersecurity Needs"}),e.jsx("textarea",{name:"problem",value:s.problem,onChange:a,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsx("button",{type:"submit",className:"px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline",children:"Submit"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-8 mt-8 md:grid-cols-2",children:[e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg",children:[e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:"Providing Cybersecurity Services to Palm Bay, Melbourne, the Space Coast of Florida, and Across the USA"}),e.jsx("p",{className:"mb-4",children:"For more than two decades, Best Computer Tech has resolved over 10,000 IT issues, enabling businesses to focus on growth rather than IT concerns. Proudly serving Palm Bay, Melbourne, the Space Coast of Florida, and across the USA, our team of IT experts is well-acquainted with the needs of our clients. Our experienced technicians understand the unique requirements of local businesses. We deliver personalized and efficient managed IT services to ensure smooth and uninterrupted operations, allowing you to stay focused on your core business objectives. Choose Best Computer Tech for reliable IT support and expert solutions tailored to your business."})]}),e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg",children:[e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:"Steps to Secure Your Home Network"}),e.jsxs("ol",{className:"mb-4 list-decimal list-inside",children:[e.jsx("li",{children:"Contact Us: Reach out to our support team via phone or email."}),e.jsx("li",{children:"Describe Your Needs: Provide details about the cybersecurity services you're seeking."}),e.jsx("li",{children:"Get a Quote: Receive an estimated cost for the services."}),e.jsx("li",{children:"Schedule a Service: Set up an appointment for our technicians to visit."}),e.jsx("li",{children:"Implementation Process: Our technicians will provide the necessary security solutions."}),e.jsx("li",{children:"Ongoing Support: Receive follow-up support and maintenance as needed."})]})]})]}),e.jsxs("div",{className:"p-6 mt-8 text-center text-white bg-blue-500 rounded-lg shadow-lg",children:[e.jsx("h5",{className:"mb-2 text-xl font-semibold",children:"Proudly headquartered and staffed in the USA"}),e.jsx("h3",{className:"text-3xl font-semibold",children:"Your Trusted IT Partner Across Florida and the USA"})]})]})]})};export{T as default};
