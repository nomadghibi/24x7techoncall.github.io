import{r as o,j as e}from"./index-ZYBAOPRB.js";import{H as x}from"./Helmet-CTLIMjjl.js";import{l as b,p as g,q as f,r as y,s as v,t as j,u as w,v as N,n as R,F as k}from"./index-DmV7JgmL.js";import{e as S}from"./index-DpmFZVTh.js";import{H as C}from"./HeroSection-DtvANrTv.js";const p="/assets/HardwareRepairs-CjXsVIjh.webp",E=()=>{const[t,n]=o.useState({name:"",phone:"",email:"",repairType:"",problem:""}),[r,l]=o.useState(null),d=[{id:"screen-replacement",title:"Screen Replacement",description:"Fixing broken or damaged laptop screens.",details:"Our Screen Replacement services include broken screen repair, display issues fix, screen replacement, touchscreen repair, and pixel dead removal.",icon:e.jsx(b,{className:"mb-2 text-4xl text-blue-500"})},{id:"keyboard-replacement",title:"Keyboard Replacement",description:"Repairing or replacing malfunctioning keyboards.",details:"Our Keyboard Replacement services include keyboard keys replacement, keyboard backlight fix, keyboard layout change, water damage repair, and keyboard configuration.",icon:e.jsx(g,{className:"mb-2 text-4xl text-blue-500"})},{id:"battery-replacement",title:"Battery Replacement",description:"Installing new batteries for extended device life.",details:"Our Battery Replacement services include battery health check, battery replacement, charging issues fix, battery calibration, and power management.",icon:e.jsx(f,{className:"mb-2 text-4xl text-blue-500"})},{id:"hard-drive-replacement",title:"Hard Drive Replacement",description:"Upgrading or replacing faulty hard drives.",details:"Our Hard Drive Replacement services include hard drive upgrade, data recovery, faulty drive replacement, SSD upgrade, and storage configuration.",icon:e.jsx(y,{className:"mb-2 text-4xl text-blue-500"})},{id:"ram-upgrade",title:"RAM Upgrade",description:"Enhancing performance with additional memory.",details:"Our RAM Upgrade services include memory upgrade, performance enhancement, RAM configuration, compatibility check, and system optimization.",icon:e.jsx(v,{className:"mb-2 text-4xl text-blue-500"})},{id:"motherboard-repair",title:"Motherboard Repair",description:"Diagnosing and fixing motherboard issues.",details:"Our Motherboard Repair services include component repair, power issues fix, BIOS update, hardware diagnostics, and performance optimization.",icon:e.jsx(j,{className:"mb-2 text-4xl text-blue-500"})},{id:"cooling-system-repair",title:"Cooling System Repair",description:"Ensuring efficient cooling to prevent overheating.",details:"Our Cooling System Repair services include fan replacement, thermal paste application, overheating fix, cooling system upgrade, and temperature monitoring.",icon:e.jsx(w,{className:"mb-2 text-4xl text-blue-500"})},{id:"power-supply-replacement",title:"Power Supply Replacement",description:"Fixing issues with the power supply unit.",details:"Our Power Supply Replacement services include PSU replacement, power issues diagnostics, cable management, voltage regulation, and power optimization.",icon:e.jsx(N,{className:"mb-2 text-4xl text-blue-500"})},{id:"virus-malware-removal",title:"Virus and Malware Removal",description:"Removing harmful software to protect your data.",details:"Our Virus and Malware Removal services include virus removal, malware cleanup, security software installation, system scan, and data protection.",icon:e.jsx(R,{className:"mb-2 text-4xl text-blue-500"})},{id:"software-troubleshooting",title:"Software Troubleshooting",description:"Fixing software issues and reinstalling operating systems.",details:"Our Software Troubleshooting services include OS reinstallation, software updates, error fixes, application configuration, and system optimization.",icon:e.jsx(k,{className:"mb-2 text-4xl text-blue-500"})}],m=a=>{l(a.id===(r==null?void 0:r.id)?null:a)},c=a=>{a.target.closest(".service-card")||l(null)};o.useEffect(()=>(document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}),[]);const i=a=>{const{name:s,value:h}=a.target;n({...t,[s]:h})},u=a=>{a.preventDefault(),S.sendForm("service_rjpfye6","template_k76wxi8",a.target,"RRqk9bqjxlo8Agwvr").then(s=>{console.log("Email successfully sent:",s.text),alert("Your repair request has been submitted successfully!")},s=>{console.log("Failed to send email:",s.text),alert("Failed to submit your request, please try again.")}),n({name:"",phone:"",email:"",repairType:"",problem:""})};return e.jsxs("div",{children:[e.jsxs(x,{children:[e.jsx("title",{children:"PC and Laptop Repairs | Best Computer Tech"}),e.jsx("meta",{name:"description",content:"Expert PC and laptop repair services including screen replacement, keyboard repair, battery replacement, and more."}),e.jsx("meta",{name:"keywords",content:"PC repair, laptop repair, screen replacement, keyboard replacement, battery replacement, virus removal"}),e.jsx("link",{rel:"canonical",href:"https://bestcomputertec.com/pc-laptop-repairs"})]}),e.jsx(C,{title:"PC and Laptop Repairs",image:p}),e.jsxs("div",{className:"container p-8 mx-auto",children:[e.jsx("h2",{className:"mb-4 text-3xl font-semibold",children:"Expert PC and Laptop Repairs"}),e.jsx("p",{className:"mb-4",children:"At Best Computer Tech, we specialize in comprehensive PC and laptop repairs to keep your devices running smoothly. Our certified technicians are experienced in diagnosing and fixing a wide range of issues, ensuring your device is back to optimal performance in no time."}),e.jsx("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",children:d.map(a=>e.jsxs("div",{className:"relative p-6 text-center bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-2xl service-card",onClick:()=>m(a),children:[a.icon,e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:a.title}),e.jsx("p",{className:"text-gray-700",children:a.description}),(r==null?void 0:r.id)===a.id&&e.jsx("div",{className:"absolute top-0 left-0 right-0 p-4 mt-2 text-white bg-blue-500 border-t-2 border-blue-500 rounded-b-lg shadow-lg",children:e.jsx("p",{className:"text-white",children:a.details})})]},a.id))}),e.jsxs("div",{className:"grid grid-cols-1 gap-10 mt-8 md:grid-cols-2",children:[e.jsxs("div",{className:"relative flex items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg",style:{backgroundImage:`url(${p})`,backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsx("div",{className:"absolute inset-0 bg-blue-500 rounded-lg opacity-75"}),e.jsxs("div",{className:"relative text-center text-white",children:[e.jsx("h3",{className:"mb-2 text-3xl font-semibold",children:"STARTING AT $95"}),e.jsx("p",{children:"Our PC and Laptop Repair Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages."})]})]}),e.jsxs("div",{className:"p-6 bg-blue-100 rounded-lg shadow-lg",children:[e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:"Tell Us About Your Repair Needs"}),e.jsxs("form",{onSubmit:u,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"name",children:"Name"}),e.jsx("input",{type:"text",name:"name",value:t.name,onChange:i,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"phone",children:"Phone No."}),e.jsx("input",{type:"text",name:"phone",value:t.phone,onChange:i,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"email",children:"Email"}),e.jsx("input",{type:"email",name:"email",value:t.email,onChange:i,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"repairType",children:"Type of Repair"}),e.jsxs("select",{name:"repairType",value:t.repairType,onChange:i,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0,children:[e.jsx("option",{value:"",disabled:!0,children:"Select a repair type"}),d.map(a=>e.jsx("option",{value:a.id,children:a.title},a.id))]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"problem",children:"Explanation of the Problem"}),e.jsx("textarea",{name:"problem",value:t.problem,onChange:i,className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",required:!0})]}),e.jsx("button",{type:"submit",className:"px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline",children:"Submit"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-8 mt-8 md:grid-cols-2",children:[e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg",children:[e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:"Serving Palm Bay, Melbourne, and Space Coast of Florida"}),e.jsx("p",{className:"mb-4",children:"Best Computer Tech proudly serves the local communities of Palm Bay, Melbourne, and the Space Coast of Florida. Our technicians are well-acquainted with the needs of our local customers, providing personalized and efficient PC and laptop repair services to keep your devices running smoothly."}),e.jsx("p",{className:"mb-4",children:"We offer both onsite and remote services for Palm Bay, Melbourne, and the Space Coast of Florida, ensuring that you get the help you need, wherever you are. Additionally, we provide remote services across the USA, bringing our expertise to you no matter the distance."})]}),e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-lg",children:[e.jsx("h3",{className:"mb-2 text-2xl font-semibold",children:"Steps to Get Your PC or Laptop Repaired"}),e.jsxs("ol",{className:"mb-4 list-decimal list-inside",children:[e.jsx("li",{children:"Contact Us: Reach out to our support team via phone or email."}),e.jsx("li",{children:"Describe the Issue: Provide details about the problem you're facing."}),e.jsx("li",{children:"Get a Quote: Receive an estimated cost for the repair."}),e.jsx("li",{children:"Schedule a Repair: Set up an appointment to bring in your device."}),e.jsx("li",{children:"Repair Process: Our technicians will diagnose and repair the issue."}),e.jsx("li",{children:"Pick Up: Once the repair is complete, you can pick up your device."})]})]})]}),e.jsxs("div",{className:"p-6 mt-8 text-center text-white bg-blue-500 rounded-lg shadow-lg",children:[e.jsx("h5",{className:"mb-2 text-xl font-semibold",children:"Proudly headquartered and staffed in the USA"}),e.jsx("h3",{className:"text-3xl font-semibold",children:"Your Trusted IT Partner Across Florida and the USA"})]})]})]})};export{E as default};
