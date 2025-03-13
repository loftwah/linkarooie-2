import{r as x,j as e,L as i,F as c,H as h}from"./vendor-react-DoLrf3Qn.js";import{i as b,p as m,l as j}from"./index-C_y98P4M.js";import{f as u}from"./vendor-icons-BTSHH2q3.js";const f=({children:t})=>{const[r,l]=x.useState(()=>{if(typeof window<"u"){const a=localStorage.getItem("theme");return a==="dark"||!a&&window.matchMedia("(prefers-color-scheme: dark)").matches}return!1});x.useEffect(()=>{const a=window.document.documentElement;r?(a.classList.add("dark"),localStorage.setItem("theme","dark")):(a.classList.remove("dark"),localStorage.setItem("theme","light"))},[r]);const n=()=>{l(!r)};return e.jsxs("div",{className:"flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200",children:[e.jsx("header",{className:"sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between items-center h-16",children:[e.jsx("div",{className:"flex items-center",children:e.jsxs(i,{to:"/",className:"flex items-center",children:[e.jsx("img",{src:b,alt:"App Icon",className:"h-8 w-8 mr-3"}),e.jsx("span",{className:"font-semibold text-xl text-gray-800 dark:text-white",children:"Linkarooie"})]})}),e.jsx("button",{onClick:n,className:"p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 transition-colors","aria-label":r?"Switch to light mode":"Switch to dark mode",children:r?e.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})}):e.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})})})]})})}),e.jsx("main",{className:"flex-grow",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:t})}),e.jsx("footer",{className:"bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:e.jsx("div",{className:"text-center text-sm text-gray-500 dark:text-gray-400",children:e.jsxs("p",{children:["© ",new Date().getFullYear()," Linkarooie. All rights reserved."]})})})})]})},L=({profiles:t,showFeatured:r=!1})=>{var n;const l=t.filter(a=>a.showInDirectory);if(r&&l.length===1){const a=l[0];return e.jsx("div",{className:"max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden",children:e.jsxs("div",{className:"md:flex",children:[e.jsx("div",{className:"md:shrink-0",children:e.jsx("img",{className:"h-48 w-full object-cover md:h-full md:w-48",src:a.avatarUrl,alt:a.name})}),e.jsxs("div",{className:"p-8",children:[e.jsx("div",{className:"uppercase tracking-wide text-sm text-blue-500 dark:text-lime-300 font-semibold",children:"Featured Profile"}),e.jsx(i,{to:`/${a.handle}`,className:"block mt-1 text-2xl leading-tight font-medium text-black dark:text-white hover:underline",children:a.name}),e.jsx("p",{className:"mt-2 text-gray-500 dark:text-gray-400",children:a.bio||a.description}),e.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:(n=a.tags)==null?void 0:n.slice(0,5).map(s=>e.jsx("span",{className:"bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-xs px-2 py-1 rounded-full",children:s},s))}),a.achievements&&a.achievements.length>0&&e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Latest Achievement"}),e.jsxs("div",{className:"mt-1 flex items-center",children:[a.achievements[0].icon&&e.jsx(c,{icon:m(a.achievements[0].icon),className:"text-purple-500 dark:text-lime-300 mr-2"}),e.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:a.achievements[0].title})]})]}),e.jsx("div",{className:"mt-6",children:e.jsx(i,{to:`/${a.handle}`,className:"inline-block bg-blue-500 dark:bg-lime-500 hover:bg-blue-600 dark:hover:bg-lime-600 text-white font-bold py-2 px-4 rounded transition-colors",children:"View Full Profile"})})]})]})})}return e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto",children:l.map(a=>{var s;return e.jsxs(i,{to:`/${a.handle}`,className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg dark:hover:bg-gray-700 transition-all duration-200",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{src:a.avatarUrl,alt:a.name,className:"w-20 h-20 rounded-full mr-4 object-cover border-2 border-gray-200 dark:border-gray-700"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-gray-800 dark:text-white",children:a.name}),e.jsxs("p",{className:"text-gray-500 dark:text-gray-400 text-sm",children:["@",a.handle]}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300 mt-1 line-clamp-2",children:a.bio||a.description})]})]}),e.jsxs("div",{className:"flex flex-wrap mt-3 gap-1",children:[(s=a.tags)==null?void 0:s.slice(0,3).map(d=>e.jsx("span",{className:"bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-lime-100 text-xs rounded px-2 py-1",children:d},d)),a.tags&&a.tags.length>3&&e.jsxs("span",{className:"bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-lime-100 text-xs rounded px-2 py-1",children:["+",a.tags.length-3]})]})]},a.handle)})})},y=({link:t})=>e.jsx("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow hover:shadow-md dark:hover:bg-gray-700 transition-all duration-200",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4",children:e.jsx(c,{icon:m(t.icon),className:"text-blue-500 dark:text-lime-300"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-gray-800 dark:text-lime-300",children:t.title}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-1",children:t.description})]})]})}),k=({achievement:t})=>{const r=t.showFullDate?t.date:t.showYear?t.date.split(" ").slice(-1)[0]:t.date.split(" ").slice(1,2)[0];return e.jsx("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow hover:shadow-md dark:hover:bg-gray-700 transition-all duration-200",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-4",children:e.jsx(c,{icon:m(t.icon),className:"text-purple-500 dark:text-lime-300"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-gray-800 dark:text-lime-300",children:t.title}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-1",children:t.description}),e.jsx("div",{className:"flex items-center mt-2",children:e.jsx("span",{className:"text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded",children:r})})]})]})})},p={github:["fab","github"],twitter:["fab","x-twitter"],bluesky:["fab","bluesky"],linkedin:["fab","linkedin"]},g="https://linkarooie.com",z=({profile:t})=>{var n,a;x.useEffect(()=>{const s=t.links.filter(o=>o.hidden),d=t.achievements.filter(o=>o.hidden);(s.length||d.length)&&j(s,d)},[t]);const r=((n=t.ogUrl)==null?void 0:n.custom)||((a=t.ogUrl)==null?void 0:a.github)||`${g}/${t.handle}`,l=`${g}${t.ogImageUrl}`;return e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:[e.jsxs("title",{children:[t.ogTitle||t.name," | Linkarooie"]}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:site_name",content:"Linkarooie"}),e.jsx("meta",{property:"og:locale",content:"en_AU"}),e.jsx("meta",{property:"og:title",content:t.ogTitle||t.name}),e.jsx("meta",{property:"og:description",content:t.ogDescription||t.description}),e.jsx("meta",{property:"og:image",content:l}),e.jsx("meta",{property:"og:url",content:r}),e.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),e.jsx("meta",{name:"twitter:title",content:t.ogTitle||t.name}),e.jsx("meta",{name:"twitter:description",content:t.ogDescription||t.description}),e.jsx("meta",{name:"twitter:image",content:l}),e.jsx("meta",{name:"twitter:site",content:`@${t.handle}`})]}),e.jsx("div",{className:"min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-200",children:e.jsxs("div",{className:"max-w-3xl mx-auto px-4 pt-12 pb-12",children:[e.jsx("img",{src:t.bannerUrl,alt:"Banner",className:"w-full h-40 mx-auto object-cover rounded-lg"}),e.jsxs("div",{className:"relative text-center -mt-10",children:[e.jsx("img",{src:t.avatarUrl,alt:t.name,className:"w-28 h-28 rounded-full mx-auto border-3 border-white shadow-md"}),e.jsx("h1",{className:"text-3xl font-bold text-center mt-4",children:t.name}),e.jsxs("h2",{className:"text-xl text-gray-400",children:["@",t.handle]}),t.bio&&e.jsx("p",{className:"text-lg mt-2 text-gray-700 dark:text-gray-300 font-medium",children:t.bio}),e.jsx("p",{className:"text-lg mt-2 text-gray-600 dark:text-gray-400",children:t.description}),t.tags&&t.tags.length>0&&e.jsx("div",{className:"flex flex-wrap justify-center mt-4 gap-2",children:t.tags.map(s=>e.jsx("span",{className:"bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-lime-300 text-sm font-medium px-3 py-1 rounded-full",children:s},s))}),e.jsx("div",{className:"flex justify-center mt-6 space-x-4",children:t.socialLinks.map(s=>e.jsx("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 dark:text-lime-300 hover:text-blue-600 dark:hover:text-lime-400 transition-colors",children:e.jsx(c,{icon:p[s.platform],size:"2x"})},s.platform))})]}),e.jsxs("div",{className:"mt-10",children:[e.jsx("h2",{className:"text-2xl font-bold text-center text-gray-800 dark:text-white",children:"Links"}),e.jsx("div",{className:"space-y-4 mt-4",children:t.links.filter(s=>!s.hidden).map(s=>e.jsx(y,{link:s},s.id))})]}),t.achievements&&t.achievements.length>0&&e.jsxs("div",{className:"mt-10",children:[e.jsx("h2",{className:"text-2xl font-bold text-center text-gray-800 dark:text-white",children:"Achievements"}),e.jsx("div",{className:"space-y-4 mt-4",children:t.achievements.filter(s=>!s.hidden).map(s=>e.jsx(k,{achievement:s},s.id))})]}),e.jsx("div",{className:"mt-10 text-center",children:e.jsxs(i,{to:`/${t.handle}/analytics`,className:"inline-block bg-blue-500 dark:bg-lime-500 hover:bg-blue-600 dark:hover:bg-lime-600 text-white font-bold py-2 px-4 rounded transition-colors",children:[e.jsx(c,{icon:u,className:"mr-2"})," View Analytics"]})})]})})]})};export{L as D,f as L,z as P};
