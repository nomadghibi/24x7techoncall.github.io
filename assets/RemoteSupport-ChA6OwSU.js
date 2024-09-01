import{r as a,j as e}from"./index-ZYBAOPRB.js";import{H as x}from"./Helmet-CTLIMjjl.js";import{F as b,a as g,K as f,b as v,N as y,O as w,c as j,n as N,y as S,e as k}from"./index-DmV7JgmL.js";import{H as F}from"./HeroSection-DtvANrTv.js";import{c}from"./computers-BQcwtrXF.js";const E=()=>{const[s,d]=a.useState({name:"",phone:"",email:"",serviceType:"",problem:""}),[i,r]=a.useState(null),n=[{id:"software-troubleshooting",title:"Software Troubleshooting",description:"Diagnosing and fixing software issues remotely.",details:"Our Software Troubleshooting services include system crashes, application errors, software updates, compatibility issues, and performance problems.",icon:e.jsx(b,{className:"mb-2 text-4xl text-blue-500"})},{id:"virus-malware-removal",title:"Virus and Malware Removal",description:"Removing malicious software from your system.",details:"Our Virus and Malware Removal services include virus removal, malware cleanup, spyware protection, adware removal, and system security.",icon:e.jsx(g,{className:"mb-2 text-4xl text-blue-500"})},{id:"system-optimization",title:"System Optimization",description:"Improving the performance of your device.",details:"Our System Optimization services include speed enhancement, disk cleanup, memory optimization, startup management, and system tune-up.",icon:e.jsx(f,{className:"mb-2 text-4xl text-blue-500"})},{id:"network-support",title:"Network Support",description:"Resolving network connectivity issues.",details:"Our Network Support services include Wi-Fi troubleshooting, router configuration, network security, LAN setup, and internet speed issues.",icon:e.jsx(v,{className:"mb-2 text-4xl text-blue-500"})},{id:"printer-setup-troubleshooting",title:"Printer Setup and Troubleshooting",description:"Assisting with printer installation and issues.",details:"Our Printer Setup and Troubleshooting services include printer installation, driver updates, connectivity issues, print quality problems, and wireless printing setup.",icon:e.jsx(y,{className:"mb-2 text-4xl text-blue-500"})},{id:"email-configuration",title:"Email Configuration",description:"Setting up and troubleshooting email accounts.",details:"Our Email Configuration services include email setup, account recovery, spam filtering, email sync issues, and security configuration.",icon:e.jsx(w,{className:"mb-2 text-4xl text-blue-500"})},{id:"data-backup-recovery",title:"Data Backup and Recovery",description:"Ensuring your data is backed up and recoverable.",details:"Our Data Backup and Recovery services include cloud backup, local backup solutions, data restoration, disaster recovery planning, and data migration.",icon:e.jsx(j,{className:"mb-2 text-4xl text-blue-500"})},{id:"security-setup",title:"Security Setup",description:"Implementing security measures to protect your device.",details:"Our Security Setup services include firewall configuration, antivirus installation, security audits, password management, and encryption services.",icon:e.jsx(N,{className:"mb-2 text-4xl text-blue-500"})},{id:"software-installation",title:"Software Installation",description:"Installing and configuring software applications.",details:"Our Software Installation services include new software setup, software configuration, license management, application updates, and compatibility checks.",icon:e.jsx(S,{className:"mb-2 text-4xl text-blue-500"})},{id:"general-tech-support",title:"General Tech Support",description:"Providing answers and solutions to your tech questions.",details:"Our General Tech Support services include device setup, technical consultations, troubleshooting advice, performance tips, and remote assistance.",icon:e.jsx(k,{className:"mb-2 text-4xl text-blue-500"})}],u=t=>{r(t.id===(i==null?void 0:i.id)?null:t)},l=t=>{t.target.closest(".service-card")||r(null)};a.useEffect(()=>(document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}),[]);const o=t=>{const{name:p,value:h}=t.target;d({...s,[p]:h})},m=t=>{t.preventDefault(),console.log(s)};return e.jsxs("div",{children:[e.jsxs(x,{children:[e.jsx("title",{children:"Remote Support | Best Computer Tech"}),e.jsx("meta",{name:"description",content:"Expert remote support services including software troubleshooting, virus removal, system optimization, and more."}),e.jsx("meta",{name:"keywords",content:"remote support, software troubleshooting, virus removal, system optimization, network support, email configuration"}),e.jsx("link",{rel:"canonical",href:"https://bestcomputertec.com/remote-support"})]}),e.jsx(F,{title:"Remote Support",image:c}),e.jsxs("div",{className:"container p-8 mx-auto",children:[e.jsx("h2",{className:"mb-4 text-3xl font-semibold",children:"Expert Remote Support Services"}),e.jsx("p",{className:"mb-4",children:"At Best Computer Tech, we specialize in comprehensive remote support services to resolve your technical issues quickly and efficiently. Our certified technicians can diagnose and fix a wide range of problems without needing to visit your location, ensuring your devices are up and running in no time."}),e.jsx("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",children:n.map(t=>e.jsxs("div",{className:"relative p-6 text-center bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-2xl service-card",onClick:()=>u(t),children:[t.icon,e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:t.title}),e.jsx("p",{className:"text-gray-700",children:t.description}),(i==null?void 0:i.id)===t.id&&e.jsx("div",{className:"absolute top-0 left-0 right-0 p-4 mt-2 text-white bg-blue-500 border-t-2 border-blue-500 rounded-b-lg shadow-lg",children:e.jsx("p",{className:"text-white",children:t.details})})]},t.id))}),e.jsxs("div",{className:"grid grid-cols-1 gap-10 mt-8 md:grid-cols-2",children:[e.jsxs("div",{className:"relative flex items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg",style:{backgroundImage:`url(${c})`,backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsx("div",{className:"absolute inset-0 bg-blue-500 rounded-lg opacity-75"}),e.jsxs("div",{className:"relative text-center text-white",children:[e.jsx("h3",{className:"mb-2 text-3xl font-semibold",children:"STARTING AT $95"}),e.jsx("p",{children:"Our Remote Support Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages."})]})]}),e.jsxs("div",{className:"p-6 bg-blue-100 rounded-lg shadow-lg",children:[e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:"Tell Us About Your Problem"}),e.jsxs("form",{onSubmit:m,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"name",children:"Name"}),e.jsx("input",{type:"text",name:"name",value:s.name,onChange:o,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"phone",children:"Phone No."}),e.jsx("input",{type:"text",name:"phone",value:s.phone,onChange:o,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"email",children:"Email"}),e.jsx("input",{type:"email",name:"email",value:s.email,onChange:o,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"serviceType",children:"Type of Service"}),e.jsxs("select",{name:"serviceType",value:s.serviceType,onChange:o,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0,children:[e.jsx("option",{value:"",disabled:!0,children:"Select a service type"}),n.map(t=>e.jsx("option",{value:t.id,children:t.title},t.id))]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"problem",children:"Explanation of the Problem"}),e.jsx("textarea",{name:"problem",value:s.problem,onChange:o,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsx("button",{type:"submit",className:"px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline",children:"Submit"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-8 mt-8 md:grid-cols-2",children:[e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg",children:[e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:"Serving Palm Bay, Melbourne, and Space Coast of Florida"}),e.jsx("p",{className:"mb-4",children:"Best Computer Tech proudly serves the local communities of Palm Bay, Melbourne, and the Space Coast of Florida. Our technicians are well-acquainted with the needs of our local customers, providing personalized and efficient remote support services to resolve your technical issues quickly and effectively."}),e.jsx("p",{className:"mb-4",children:"We offer both onsite and remote services for Palm Bay, Melbourne, and the Space Coast of Florida, ensuring that you get the help you need, wherever you are. Additionally, we provide remote services across the USA, bringing our expertise to you no matter the distance."})]}),e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg",children:[e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:"Steps to Get Remote Support"}),e.jsxs("ol",{className:"mb-4 list-decimal list-inside",children:[e.jsx("li",{children:"Contact Us: Reach out to our support team via phone or email."}),e.jsx("li",{children:"Describe the Issue: Provide details about the problem you're facing."}),e.jsx("li",{children:"Get a Quote: Receive an estimated cost for the support."}),e.jsx("li",{children:"Schedule a Session: Set up an appointment for remote support."}),e.jsx("li",{children:"Support Process: Our technicians will connect remotely to diagnose and fix the issue."}),e.jsx("li",{children:"Follow Up: Receive follow-up support to ensure the issue is fully resolved."})]})]})]}),e.jsxs("div",{className:"p-6 mt-8 text-center text-white bg-blue-500 rounded-lg shadow-lg",children:[e.jsx("h5",{className:"mb-2 text-xl font-semibold",children:"Proudly headquartered and staffed in the USA"}),e.jsx("h3",{className:"text-3xl font-semibold",children:"Your Trusted IT Partner Across Florida and the USA"})]})]})]})};export{E as default};
