import{r as o,j as e}from"./index-DBOSAsQq.js";import{w as x,x as b,y as f,z as c,A as y,c as v,B as w,n as j,C as N,r as S,m as k}from"./index-CYZEigjK.js";import{H as C}from"./HeroSection-CLhr2DqG.js";const d="/assets/SoftwareTroubleshooting-Dx1_YLIq.webp",E=()=>{const[s,u]=o.useState({name:"",phone:"",email:"",serviceType:"",problem:""}),[a,n]=o.useState(null),r=[{id:"operating-system-errors",title:"Operating System Errors",description:"Diagnosing and fixing OS-related issues.",details:"Our Operating System Errors services include diagnosing and fixing BSOD, system crashes, boot errors, update failures, and performance issues.",icon:e.jsx(x,{className:"mb-2 text-4xl text-blue-500"})},{id:"application-crashes",title:"Application Crashes",description:"Resolving frequent application crashes.",details:"Our Application Crashes services include fixing unresponsive applications, unexpected shutdowns, error messages, compatibility problems, and performance degradation.",icon:e.jsx(b,{className:"mb-2 text-4xl text-blue-500"})},{id:"software-installation",title:"Software Installation",description:"Installing and configuring software applications.",details:"Our Software Installation services include new software setup, configuration and customization, license management, compatibility checks, and update/upgrade installation.",icon:e.jsx(f,{className:"mb-2 text-4xl text-blue-500"})},{id:"driver-issues",title:"Driver Issues",description:"Updating and fixing driver-related problems.",details:"Our Driver Issues services include driver installation, compatibility checks, performance tuning, driver conflicts resolution, and automatic updates.",icon:e.jsx(c,{className:"mb-2 text-4xl text-blue-500"})},{id:"system-performance",title:"System Performance",description:"Enhancing system performance and speed.",details:"Our System Performance services include performance optimization, system cleanup, startup management, resource allocation, and speed enhancements.",icon:e.jsx(y,{className:"mb-2 text-4xl text-blue-500"})},{id:"registry-errors",title:"Registry Errors",description:"Cleaning and fixing registry issues.",details:"Our Registry Errors services include registry cleaning, error resolution, performance improvements, registry backup, and registry optimization.",icon:e.jsx(v,{className:"mb-2 text-4xl text-blue-500"})},{id:"compatibility-issues",title:"Compatibility Issues",description:"Ensuring software compatibility with your system.",details:"Our Compatibility Issues services include software compatibility checks, OS compatibility, hardware compatibility, application testing, and performance tuning.",icon:e.jsx(w,{className:"mb-2 text-4xl text-blue-500"})},{id:"security-vulnerabilities",title:"Security Vulnerabilities",description:"Patching and securing software vulnerabilities.",details:"Our Security Vulnerabilities services include vulnerability scanning, patching and updates, security audits, malware protection, and system hardening.",icon:e.jsx(j,{className:"mb-2 text-4xl text-blue-500"})},{id:"updates-upgrades",title:"Updates and Upgrades",description:"Managing software updates and upgrades.",details:"Our Updates and Upgrades services include update management, upgrade planning, compatibility checks, license management, and post-upgrade support.",icon:e.jsx(N,{className:"mb-2 text-4xl text-blue-500"})},{id:"data-backup",title:"Data Backup",description:"Ensuring data backup before troubleshooting.",details:"Our Data Backup services include full system backup, incremental backup, cloud backup solutions, data restoration, and disaster recovery planning.",icon:e.jsx(S,{className:"mb-2 text-4xl text-blue-500"})},{id:"remote-support",title:"Remote Support",description:"Providing remote support for software issues.",details:"Our Remote Support services include remote diagnosis, live assistance, remote configuration, software troubleshooting, and technical guidance.",icon:e.jsx(k,{className:"mb-2 text-4xl text-blue-500"})},{id:"custom-software-solutions",title:"Custom Software Solutions",description:"Developing custom software solutions for your needs.",details:"Our Custom Software Solutions services include custom development, software integration, feature enhancements, maintenance and support, and scalability solutions.",icon:e.jsx(c,{className:"mb-2 text-4xl text-blue-500"})}],m=t=>{n(t.id===(a==null?void 0:a.id)?null:t)},l=t=>{t.target.closest(".service-card")||n(null)};o.useEffect(()=>(document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}),[]);const i=t=>{const{name:h,value:g}=t.target;u({...s,[h]:g})},p=t=>{t.preventDefault(),console.log(s)};return e.jsxs("div",{children:[e.jsx(C,{title:"Software Troubleshooting",image:d}),e.jsxs("div",{className:"container p-8 mx-auto",children:[e.jsx("h2",{className:"mb-4 text-3xl font-semibold",children:"Expert Software Troubleshooting"}),e.jsx("p",{className:"mb-4",children:"At Best Computer Tech, we specialize in comprehensive software troubleshooting services to ensure your applications and systems run smoothly. Our certified technicians are experienced in diagnosing and resolving a wide range of software issues, ensuring your device operates at its best."}),e.jsx("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",children:r.map(t=>e.jsxs("div",{className:"relative p-6 text-center bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-2xl service-card",onClick:()=>m(t),children:[t.icon,e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:t.title}),e.jsx("p",{className:"text-gray-700",children:t.description}),(a==null?void 0:a.id)===t.id&&e.jsx("div",{className:"absolute top-0 left-0 right-0 p-4 mt-2 text-white bg-blue-500 border-t-2 border-blue-500 rounded-b-lg shadow-lg",children:e.jsx("p",{className:"text-white",children:t.details})})]},t.id))}),e.jsxs("div",{className:"grid grid-cols-1 gap-10 mt-8 md:grid-cols-2",children:[e.jsxs("div",{className:"relative flex items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg",style:{backgroundImage:`url(${d})`,backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsx("div",{className:"absolute inset-0 bg-blue-500 rounded-lg opacity-75"}),e.jsxs("div",{className:"relative text-center text-white",children:[e.jsx("h3",{className:"mb-2 text-3xl font-semibold",children:"STARTING AT $95"}),e.jsx("p",{children:"Our Software Troubleshooting Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages."})]})]}),e.jsxs("div",{className:"p-6 bg-blue-100 rounded-lg shadow-lg",children:[e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:"Tell Us About Your Problem"}),e.jsxs("form",{onSubmit:p,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"name",children:"Name"}),e.jsx("input",{type:"text",name:"name",value:s.name,onChange:i,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"phone",children:"Phone No."}),e.jsx("input",{type:"text",name:"phone",value:s.phone,onChange:i,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"email",children:"Email"}),e.jsx("input",{type:"email",name:"email",value:s.email,onChange:i,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"serviceType",children:"Type of Service"}),e.jsxs("select",{name:"serviceType",value:s.serviceType,onChange:i,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0,children:[e.jsx("option",{value:"",disabled:!0,children:"Select a service type"}),r.map(t=>e.jsx("option",{value:t.id,children:t.title},t.id))]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"problem",children:"Explanation of the Problem"}),e.jsx("textarea",{name:"problem",value:s.problem,onChange:i,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsx("button",{type:"submit",className:"px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline",children:"Submit"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-8 mt-8 md:grid-cols-2",children:[e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg",children:[e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:"Serving Palm Bay, Melbourne, and Space Coast of Florida"}),e.jsx("p",{className:"mb-4",children:"Best Computer Tech proudly serves the local communities of Palm Bay, Melbourne, and the Space Coast of Florida. Our technicians are well-acquainted with the needs of our local customers, providing personalized and efficient software troubleshooting services to keep your devices running smoothly."}),e.jsx("p",{className:"mb-4",children:"We offer both onsite and remote services for Palm Bay, Melbourne, and the Space Coast of Florida, ensuring that you get the help you need, wherever you are. Additionally, we provide remote services across the USA, bringing our expertise to you no matter the distance."})]}),e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg",children:[e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:"Steps to Get Your Software Troubleshooted"}),e.jsxs("ol",{className:"mb-4 list-decimal list-inside",children:[e.jsx("li",{children:"Contact Us: Reach out to our support team via phone or email."}),e.jsx("li",{children:"Describe the Issue: Provide details about the problem you're facing."}),e.jsx("li",{children:"Get a Quote: Receive an estimated cost for the troubleshooting."}),e.jsx("li",{children:"Schedule a Service: Set up an appointment to bring in your device."}),e.jsx("li",{children:"Service Process: Our technicians will diagnose and fix your software issues."}),e.jsx("li",{children:"Pick Up: Once the service is complete, you can pick up your device."})]})]})]})]})]})};export{E as default};
