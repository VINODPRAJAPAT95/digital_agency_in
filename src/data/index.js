export const services = [
  {
    id: 1, icon: "🌐", title: "Website Development",
    desc: "Business websites, corporate websites, portfolio websites, and custom web solutions built for performance.",
    features: ["Custom Design", "Mobile Responsive", "CMS Integration", "Performance Optimized", "SEO Ready"],
    price: "₹15,000", tag: "Most Popular"
  },
  {
    id: 2, icon: "🛒", title: "E-commerce Development",
    desc: "End-to-end e-commerce solutions with payment gateway integration and inventory management.",
    features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Product Catalog", "Analytics Dashboard"],
    price: "₹25,000", tag: ""
  },
  {
    id: 3, icon: "📱", title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps for iOS and Android with stunning UI and performance.",
    features: ["iOS & Android", "React Native / Flutter", "Push Notifications", "Offline Support", "App Store Submission"],
    price: "₹35,000", tag: ""
  },
  {
    id: 4, icon: "💻", title: "Software Development",
    desc: "Custom software solutions tailored to your business workflows and operational needs.",
    features: ["Custom Architecture", "API Development", "Cloud Deployment", "Scalable Solutions", "Maintenance & Support"],
    price: "₹50,000", tag: ""
  },
  {
    id: 5, icon: "🎨", title: "Graphic Design",
    desc: "Creative graphic design services for branding, marketing materials, and digital assets.",
    features: ["Brand Identity", "Marketing Materials", "Social Media Graphics", "Print Design", "Unlimited Revisions"],
    price: "₹5,000", tag: ""
  },
  {
    id: 6, icon: "✏️", title: "Logo Design",
    desc: "Professional logo design that reflects your brand identity and values.",
    features: ["Multiple Concepts", "Vector Files", "All Formats Included", "Unlimited Revisions", "Brand Guidelines"],
    price: "₹2,000", tag: ""
  },
  {
    id: 7, icon: "🖌️", title: "UI/UX & Product Design",
    desc: "User-centered design that improves conversion rates and delivers exceptional user experience.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Design System"],
    price: "₹8,000", tag: ""
  },
  {
    id: 8, icon: "🔍", title: "SEO Services",
    desc: "Data-driven SEO strategies to boost your search rankings and organic traffic.",
    features: ["Keyword Research", "On-page SEO", "Link Building", "Technical SEO", "Monthly Reporting"],
    price: "₹10,000/month", tag: ""
  },
  {
    id: 9, icon: "📣", title: "Digital Marketing",
    desc: "Full-funnel digital marketing campaigns to grow your brand and generate quality leads.",
    features: ["Google Ads", "Facebook Ads", "Email Marketing", "Content Strategy", "ROI Tracking"],
    price: "₹15,000/month", tag: ""
  },
  {
    id: 10, icon: "📲", title: "Social Media Management",
    desc: "Professional social media management to grow your online presence and engage your audience.",
    features: ["Content Calendar", "Post Scheduling", "Community Management", "Analytics Reports", "Paid Campaigns"],
    price: "₹12,000/month", tag: ""
  },
  {
    id: 11, icon: "🎯", title: "Lead Generation",
    desc: "Targeted lead generation campaigns that deliver high-quality prospects for your business.",
    features: ["Audience Targeting", "Landing Pages", "A/B Testing", "Lead Nurturing", "CRM Integration"],
    price: "₹20,000/month", tag: ""
  },
  {
    id: 12, icon: "⚙️", title: "CRM & ERP Solutions",
    desc: "Custom CRM and ERP systems to streamline your business operations and boost productivity.",
    features: ["Custom Modules", "Workflow Automation", "Reporting & Analytics", "Role Management", "API Integrations"],
    price: "₹60,000", tag: ""
  },
];

export const techStack = {
  Frontend: [
    { name: "React", icon: "⚛️" }, { name: "Next.js", icon: "▲" }, { name: "Vue.js", icon: "💚" },
    { name: "HTML5", icon: "🌐" }, { name: "CSS3", icon: "🎨" }, { name: "JavaScript", icon: "🟨" }, { name: "TypeScript", icon: "🔷" }
  ],
  Backend: [
    { name: "Node.js", icon: "🟢" }, { name: "Express.js", icon: "🚂" }, { name: "PHP", icon: "🐘" },
    { name: "Laravel", icon: "🔴" }, { name: "Python", icon: "🐍" }
  ],
  Database: [
    { name: "MongoDB", icon: "🍃" }, { name: "MySQL", icon: "🐬" }, { name: "PostgreSQL", icon: "🐘" }, { name: "Firebase", icon: "🔥" }
  ],
  Mobile: [
    { name: "React Native", icon: "📱" }, { name: "Flutter", icon: "🦋" }, { name: "Android", icon: "🤖" }, { name: "iOS", icon: "🍎" }
  ],
  Cloud: [
    { name: "AWS", icon: "☁️" }, { name: "Google Cloud", icon: "🌤️" }, { name: "Azure", icon: "🔵" }, { name: "Docker", icon: "🐳" }
  ],
};

export const projects = [
  { id: 1, cat: "Websites", title: "FinTech Dashboard", client: "FinEdge Solutions", desc: "Modern banking dashboard with real-time analytics and transaction management.", tech: ["React", "Node.js", "MongoDB"], color: "from-blue-600 to-cyan-600", icon: "💳" },
  { id: 2, cat: "Mobile Apps", title: "FoodX Delivery App", client: "FoodX Pvt Ltd", desc: "Full-featured food delivery platform with live order tracking and payment integration.", tech: ["React Native", "Firebase", "Node.js"], color: "from-orange-500 to-red-500", icon: "🍕" },
  { id: 3, cat: "Software Products", title: "HRM Pro System", client: "TechCorp India", desc: "Comprehensive HR management system with payroll, attendance, and leave management.", tech: ["Laravel", "MySQL", "Vue.js"], color: "from-purple-600 to-pink-600", icon: "👥" },
  { id: 4, cat: "Branding", title: "StartupX Brand Identity", client: "StartupX Labs", desc: "Complete brand identity design including logo, guidelines, and marketing collateral.", tech: ["Figma", "Illustrator", "Photoshop"], color: "from-green-500 to-teal-500", icon: "✨" },
  { id: 5, cat: "Digital Marketing", title: "E-commerce Growth Campaign", client: "StyleHub India", desc: "360° digital marketing campaign achieving 3x ROI within 3 months.", tech: ["Google Ads", "Meta Ads", "SEO"], color: "from-yellow-500 to-orange-500", icon: "📈" },
  { id: 6, cat: "Websites", title: "Real Estate Portal", client: "PropIndia Realty", desc: "Property listing platform with advanced search, virtual tours, and lead management.", tech: ["Next.js", "PostgreSQL", "AWS"], color: "from-indigo-600 to-blue-600", icon: "🏢" },
  { id: 7, cat: "Mobile Apps", title: "HealthCare App", client: "MediCare Plus", desc: "Telemedicine app with doctor consultation, prescription management, and health tracking.", tech: ["Flutter", "Firebase", "Python"], color: "from-teal-500 to-green-600", icon: "🏥" },
  { id: 8, cat: "Software Products", title: "Inventory Manager Pro", client: "RetailChain Ltd", desc: "Multi-warehouse inventory management with barcode scanning and auto-reorder.", tech: ["React", "Node.js", "MySQL"], color: "from-cyan-500 to-blue-500", icon: "📦" },
];

export const testimonials = [
  { name: "Rahul Sharma", company: "FinEdge Solutions, Mumbai", review: "Digital Agency India delivered our fintech dashboard on time and beyond our expectations. The design quality and code architecture is world-class. Highly recommended!", rating: 5, initials: "RS" },
  { name: "Priya Patel", company: "StyleHub India, Ahmedabad", review: "Our e-commerce sales tripled within 2 months of working with them. Their digital marketing team is exceptional and ROI-focused.", rating: 5, initials: "PP" },
  { name: "Amit Kumar", company: "TechCorp India, Bangalore", review: "The HRM system they built completely transformed our HR operations. Great communication throughout the project and excellent post-launch support.", rating: 5, initials: "AK" },
  { name: "Sneha Joshi", company: "PropIndia Realty, Pune", review: "Our real estate portal looks stunning and performs flawlessly. The team understood our requirements perfectly and delivered a premium product.", rating: 5, initials: "SJ" },
  { name: "Vikram Singh", company: "StartupX Labs, Delhi", review: "The branding work they did for us is absolutely outstanding. We get compliments on our logo and brand identity every day. Worth every rupee!", rating: 5, initials: "VS" },
];

export const faqs = [
  { q: "How long does website development take?", a: "Timeline depends on complexity. A basic business website takes 7-14 days. A custom web application can take 4-12 weeks. We provide a detailed timeline before starting." },
  { q: "What technologies do you use?", a: "We use React, Next.js, Vue.js for frontend; Node.js, Laravel, Python for backend; MongoDB, MySQL, PostgreSQL for databases; and React Native, Flutter for mobile apps." },
  { q: "Do you provide hosting services?", a: "Yes! We offer managed hosting on AWS, Google Cloud, and Azure. We handle server setup, SSL certificates, CDN, and ongoing maintenance." },
  { q: "Do you offer SEO services?", a: "Absolutely! We offer comprehensive SEO including keyword research, on-page optimization, link building, technical SEO, and monthly performance reporting." },
  { q: "Can you redesign an existing website?", a: "Yes! We specialize in website redesigns. We audit your current site, identify improvements, and deliver a modern, high-converting redesign while preserving your SEO rankings." },
  { q: "Do you develop mobile applications?", a: "Yes! We develop native iOS and Android apps, as well as cross-platform apps using React Native and Flutter, with full backend development and API integration." },
  { q: "What support do you provide after launch?", a: "We offer 30 days of free support post-launch. After that, we have affordable maintenance packages covering updates, security patches, bug fixes, and performance monitoring." },
  { q: "How much does a website cost?", a: "Basic business websites start at ₹15,000. Custom web applications can range from ₹50,000 to ₹5,00,000+ depending on features and complexity. We offer free consultations." },
];

export const careers = [
  { title: "Frontend Developer", type: "Full-time", loc: "Remote / Pune", exp: "2+ years", skills: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs"], desc: "Build stunning, performant web interfaces for our diverse client portfolio." },
  { title: "React Developer", type: "Full-time", loc: "Remote / Pune", exp: "2+ years", skills: ["React", "Redux", "Node.js", "MongoDB"], desc: "Develop full-stack React applications with modern architecture and best practices." },
  { title: "UI/UX Designer", type: "Full-time", loc: "Remote / Pune", exp: "2+ years", skills: ["Figma", "Prototyping", "User Research", "Design Systems"], desc: "Create exceptional user experiences that delight users and drive conversions." },
  { title: "Graphic Designer", type: "Full-time", loc: "Pune / Hybrid", exp: "1+ years", skills: ["Adobe CC", "Illustrator", "Photoshop", "Brand Identity"], desc: "Create compelling visual designs for digital and print across client projects." },
  { title: "Digital Marketing Executive", type: "Full-time", loc: "Remote / Pune", exp: "1+ years", skills: ["Google Ads", "Meta Ads", "Analytics", "SEO"], desc: "Plan and execute data-driven digital marketing campaigns for our clients." },
  { title: "SEO Specialist", type: "Full-time", loc: "Remote", exp: "2+ years", skills: ["On-page SEO", "Link Building", "Technical SEO", "Analytics"], desc: "Drive organic growth for our clients through proven SEO strategies." },
  { title: "Sales Executive", type: "Full-time", loc: "Pune", exp: "1+ years", skills: ["B2B Sales", "CRM", "Proposal Writing", "Negotiation"], desc: "Identify and acquire new clients, manage the complete sales cycle end-to-end." },
];

export const pricingPlans = [
  {
    name: "Starter", price: "₹15,000", desc: "Perfect for small businesses and startups",
    features: ["Business Website", "5 Pages", "Mobile Responsive", "Contact Form", "Basic SEO", "SSL Certificate", "3 Months Support"],
    cta: "Get Started", highlight: false
  },
  {
    name: "Professional", price: "₹35,000", desc: "For growing businesses needing more power",
    features: ["Custom Website", "15 Pages", "SEO Optimization", "Blog Setup", "Premium Support", "Google Analytics", "Speed Optimization", "Social Integration", "6 Months Support"],
    cta: "Most Popular", highlight: true
  },
  {
    name: "Enterprise", price: "₹75,000+", desc: "Full-scale solution for large organizations",
    features: ["Custom Development", "Web Application", "CRM Integration", "Advanced SEO", "Dedicated Team", "Custom Integrations", "Performance Monitoring", "Priority Support", "12 Months Support"],
    cta: "Contact Us", highlight: false
  },
];
