import{a,u as n,j as e}from"./index-DBOSAsQq.js";const l={"hardware-repairs":{title:"Hardware Repairs",description:"Fixing broken screens, malfunctioning keyboards, and other hardware issues.",price:"Varies by issue"},"software-troubleshooting":{title:"Software Troubleshooting",description:"Resolving operating system errors, application crashes, and software installation issues.",price:"$75/hr"},"virus-malware-removal":{title:"Virus and Malware Removal",description:"Protecting your computer from harmful viruses and ensuring your data is safe.",price:"$95 flat rate"},"network-setup-support":{title:"Network Setup and Support",description:"Setting up and maintaining secure and efficient home or office networks.",price:"$100/hr"},"data-recovery":{title:"Data Recovery",description:"Retrieving lost or corrupted data from hard drives and other storage devices.",price:"$100/hr"},"remote-computer-support":{title:"Remote Computer Support",description:"Providing professional support for your computer issues without the need for a technician visit.",price:"$75/hr"},"quick-repair-quote":{title:"Quick Repair Quote",description:"Get a quick repair quote before taking it to the shop for only $19.95.",price:"$19.95"},"remote-tech-support":{title:"Remote Tech Support",description:"Get expert tech support from the comfort of your home for $75/hr.",price:"$75/hr"},"computer-training":{title:"Computer Training",description:"Learn how to use your computer more effectively with our professional training sessions.",price:"$75/hr"}};function d(){const{serviceId:r}=a(),t=l[r],o=n();if(!t)return e.jsx("div",{children:"Service not found"});const s=i=>{i.preventDefault(),o("/checkout",{state:{service:t}})};return e.jsxs("div",{className:"container p-8 mx-auto",children:[e.jsx("h1",{className:"mb-4 text-4xl font-bold",children:t.title}),e.jsx("p",{className:"mb-4",children:t.description}),e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{children:"Price:"})," ",t.price]}),e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"Make an Appointment"}),e.jsxs("form",{onSubmit:s,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"name",children:"Name"}),e.jsx("input",{className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",id:"name",type:"text",placeholder:"Your name",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"email",children:"Email"}),e.jsx("input",{className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",id:"email",type:"email",placeholder:"Your email",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"date",children:"Preferred Appointment Date"}),e.jsx("input",{className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",id:"date",type:"date",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-2 text-sm font-bold text-gray-700",htmlFor:"message",children:"Additional Information"}),e.jsx("textarea",{className:"w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",id:"message",rows:"4",placeholder:"Your message"})]}),e.jsx("button",{className:"px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline",type:"submit",children:"Submit"})]})]})}export{d as default};
