(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{3642:function(e,t,r){Promise.resolve().then(r.bind(r,8156))},8156:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var a=r(7437),n=r(4251),s=r(6691),i=r.n(s),l=r(6110),o=r(2265),c=r(9370),d=r(3067),u=r(8291),f=r(9311),m=r(3023);let x=o.createContext(null);function p(){let e=o.useContext(x);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let h=o.forwardRef((e,t)=>{let{orientation:r="horizontal",opts:n,setApi:s,plugins:i,className:l,children:d,...u}=e,[m,p]=(0,c.Z)({...n,axis:"horizontal"===r?"x":"y"},i),[h,g]=o.useState(!1),[v,N]=o.useState(!1),b=o.useCallback(e=>{e&&(g(e.canScrollPrev()),N(e.canScrollNext()))},[]),y=o.useCallback(()=>{null==p||p.scrollPrev()},[p]),j=o.useCallback(()=>{null==p||p.scrollNext()},[p]),w=o.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),y()):"ArrowRight"===e.key&&(e.preventDefault(),j())},[y,j]);return o.useEffect(()=>{p&&s&&s(p)},[p,s]),o.useEffect(()=>{if(p)return b(p),p.on("reInit",b),p.on("select",b),()=>{null==p||p.off("select",b)}},[p,b]),(0,a.jsx)(x.Provider,{value:{carouselRef:m,api:p,opts:n,orientation:r||((null==n?void 0:n.axis)==="y"?"vertical":"horizontal"),scrollPrev:y,scrollNext:j,canScrollPrev:h,canScrollNext:v},children:(0,a.jsx)("div",{ref:t,onKeyDownCapture:w,className:(0,f.cn)("relative",l),role:"region","aria-roledescription":"carousel",...u,children:d})})});h.displayName="Carousel";let g=o.forwardRef((e,t)=>{let{className:r,...n}=e,{carouselRef:s,orientation:i}=p();return(0,a.jsx)("div",{ref:s,className:"overflow-hidden",children:(0,a.jsx)("div",{ref:t,className:(0,f.cn)("flex","horizontal"===i?"-ml-4":"-mt-4 flex-col",r),...n})})});g.displayName="CarouselContent";let v=o.forwardRef((e,t)=>{let{className:r,...n}=e,{orientation:s}=p();return(0,a.jsx)("div",{ref:t,role:"group","aria-roledescription":"slide",className:(0,f.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===s?"pl-4":"pt-4",r),...n})});v.displayName="CarouselItem";let N=o.forwardRef((e,t)=>{let{className:r,variant:n="outline",size:s="icon",...i}=e,{orientation:l,scrollPrev:o,canScrollPrev:c}=p();return(0,a.jsxs)(m.z,{ref:t,variant:n,size:s,className:(0,f.cn)("absolute  h-8 w-8 rounded-full","horizontal"===l?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",r),disabled:!c,onClick:o,...i,children:[(0,a.jsx)(d.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});N.displayName="CarouselPrevious";let b=o.forwardRef((e,t)=>{let{className:r,variant:n="outline",size:s="icon",...i}=e,{orientation:l,scrollNext:o,canScrollNext:c}=p();return(0,a.jsxs)(m.z,{ref:t,variant:n,size:s,className:(0,f.cn)("absolute h-8 w-8 rounded-full","horizontal"===l?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",r),disabled:!c,onClick:o,...i,children:[(0,a.jsx)(u.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Next slide"})]})});b.displayName="CarouselNext";let y=[{degree:"Masters in Data Science and Engineering",institution:"Birla Institute of Technology, Pilani",year:"2025",logo:"https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg"},{degree:"Bachelors in Computer Science and Engineering",institution:"Malaviya National Institute of Technology",year:"2017",cgpa:"7.8",logo:"https://upload.wikimedia.org/wikipedia/en/c/c1/Mnit_logo.png"}],j=[{company:"Tech Corp",role:"Senior Software Engineer",period:"2020-Present",logo:"https://images.unsplash.com/photo-1599305445671-ac291c95aaa9"},{company:"Digital Solutions Inc",role:"Software Engineer",period:"2017-2020",logo:"https://images.unsplash.com/photo-1516387938699-a93567ec168e"}];function w(){return(0,a.jsx)("div",{className:"min-h-screen pt-20 pb-10",children:(0,a.jsxs)("div",{className:"container mx-auto px-4",children:[(0,a.jsx)(n.E.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-4xl font-bold text-center mb-12 neon-text",children:"About Me"}),(0,a.jsxs)("div",{className:"grid md:grid-cols-2 gap-12 mb-16",children:[(0,a.jsxs)(n.E.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{delay:.2},children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold mb-6 neon-text",children:"Education"}),y.map((e,t)=>(0,a.jsx)(l.Zb,{className:"mb-6 bg-card/50 hover:neon-box transition-all duration-300",children:(0,a.jsx)(l.aY,{className:"p-6",children:(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("div",{className:"relative w-12 h-12",children:(0,a.jsx)(i(),{src:e.logo,alt:e.institution,fill:!0,className:"object-contain"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold",children:e.degree}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:e.institution}),(0,a.jsxs)("p",{className:"text-sm",children:["Year: ",e.year]}),e.cgpa&&(0,a.jsxs)("p",{className:"text-sm",children:["CGPA: ",e.cgpa]})]})]})})},t))]}),(0,a.jsxs)(n.E.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{delay:.4},children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold mb-6 neon-text",children:"Experience"}),(0,a.jsx)(h,{className:"w-full",children:(0,a.jsx)(g,{children:j.map((e,t)=>(0,a.jsx)(v,{children:(0,a.jsx)(l.Zb,{className:"bg-card/50 hover:neon-box transition-all duration-300",children:(0,a.jsx)(l.aY,{className:"p-6",children:(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("div",{className:"relative w-16 h-16",children:(0,a.jsx)(i(),{src:e.logo,alt:e.company,fill:!0,className:"object-cover rounded-full"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold",children:e.role}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:e.company}),(0,a.jsx)("p",{className:"text-sm",children:e.period})]})]})})})},t))})})]})]})]})})}},3023:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var a=r(7437),n=r(2265),s=r(7256),i=r(6061),l=r(9311);let o=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=n.forwardRef((e,t)=>{let{className:r,variant:n,size:i,asChild:c=!1,...d}=e,u=c?s.g7:"button";return(0,a.jsx)(u,{className:(0,l.cn)(o({variant:n,size:i,className:r})),ref:t,...d})});c.displayName="Button"},6110:function(e,t,r){"use strict";r.d(t,{Ol:function(){return l},Zb:function(){return i},aY:function(){return d}});var a=r(7437),n=r(2265),s=r(9311);let i=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...n})});i.displayName="Card";let l=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...n})});l.displayName="CardHeader";let o=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("h3",{ref:t,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",r),...n})});o.displayName="CardTitle";let c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",r),...n})});c.displayName="CardDescription";let d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",r),...n})});d.displayName="CardContent";let u=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",r),...n})});u.displayName="CardFooter"},9311:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var a=r(7042),n=r(4769);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,a.W)(t))}}},function(e){e.O(0,[251,985,691,213,971,864,744],function(){return e(e.s=3642)}),_N_E=e.O()}]);