import { BarChart3, ShieldCheck, Wallet, ArrowUpDown } from "lucide-react";

const features = [
  {
    title: "Advanced Trading Interface",
    description:
      "Professional-grade trading tools with real-time market data and advanced charting capabilities.",
    icon: <BarChart3 className="w-6 h-6" />,
    image: "/fit1.png",
    isActive: true,
  },
  {
    title: "Portfolio Management",
    description:
      "Track your investments and monitor your gains with our comprehensive portfolio dashboard.",
    icon: <Wallet className="w-6 h-6" />,
    image: "/fit3.png",
    isActive: false,
  },
  {
    title: "Security & Verification",
    description:
      "Industry-leading security measures with KYC verification process to protect your assets.",
    icon: <ShieldCheck className="w-6 h-6" />,
    image: "/fit4.png",
    isActive: false,
  },
  {
    title: "Performance Analytics",
    description:
      "Detailed analytics and credit scoring system to help you make informed decisions.",
    icon: <ArrowUpDown className="w-6 h-6" />,
    image: "/fit2.png",
    isActive: false,
  },
];

const testimonials = [
  {
    id: 1,
    name: "Ethan Carter",
    role: "Senior Crypto Trader",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "I've traded on multiple platforms over the last seven years, and this is by far the smoothest experience I've had. Fast execution, clean UI, and reliable analytics tools make a massive difference during volatile market conditions.",
  },

  {
    id: 2,
    name: "Sophia Williams",
    role: "Forex Portfolio Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "The automated trading features and detailed market insights helped our team optimize portfolio performance. The platform feels professional, stable, and built for serious traders.",
  },

  {
    id: 3,
    name: "Daniel Kim",
    role: "Independent Investor",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    content:
      "As someone who started trading recently, I needed a platform that didn't feel overwhelming. Everything here feels intuitive while still offering advanced tools when you need them.",
  },

  {
    id: 4,
    name: "Olivia Martinez",
    role: "Blockchain Analyst",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content:
      "The real-time charts and market tracking tools are incredibly responsive. I especially appreciate the security layers and transparent transaction history.",
  },

  {
    id: 5,
    name: "Noah Anderson",
    role: "Crypto Fund Advisor",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    content:
      "Managing high-volume trades became much easier after switching to this platform. Liquidity access, execution speed, and risk management tools are all top-tier.",
  },

  {
    id: 6,
    name: "Isabella Lee",
    role: "Financial Strategist",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    content:
      "What impressed me most is the balance between simplicity and power. Beginners can navigate it easily, while experienced traders still get advanced-level capabilities.",
  },

  {
    id: 7,
    name: "Lucas Bennett",
    role: "Day Trader",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    content:
      "The execution speed during peak trading hours is honestly impressive. I've experienced almost zero lag even during high market volatility.",
  },

  {
    id: 8,
    name: "Ava Thompson",
    role: "FinTech Consultant",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    content:
      "Most trading platforms feel cluttered and outdated. This one actually feels modern, polished, and designed for real traders instead of just looking flashy.",
  },

  {
    id: 9,
    name: "Mason Clark",
    role: "Swing Trader",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
    content:
      "The analytics dashboard and portfolio tracking tools helped me identify patterns I was completely missing before. It genuinely improved my decision making.",
  },

  {
    id: 10,
    name: "Charlotte Davis",
    role: "Investment Researcher",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    content:
      "I appreciate how transparent the platform is with fees and transaction history. Everything feels secure and professionally engineered.",
  },

  {
    id: 11,
    name: "Benjamin Harris",
    role: "Crypto Educator",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    content:
      "I recommend this platform to many of my students because it balances simplicity with professional-grade tools. That's extremely rare in this industry.",
  },

  {
    id: 12,
    name: "Mia Robinson",
    role: "Digital Asset Manager",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
    content:
      "The mobile experience is surprisingly good. I can monitor trades, adjust positions, and manage alerts without feeling limited compared to desktop.",
  },
];
const footerLinks = [
  {
    _id: "001",
    title: "Trading",
    links: ["Markets", "Trading Fees"],
  },
  {
    _id: "002",
    title: "Resources",
    links: ["Trading Guide", "Market Analysis"],
  },
  {
    _id: "003",
    title: "Legal",
    links: ["Privacy Policy", "Terms of Services"],
  },
];
const pricingPlans = [
  {
    id: 1,
    title: "Basic Trader",
    price: 0,
    duration: "/month",

    description:
      "Perfect for beginners starting their crypto journey",

    features: [
      "Basic spot trading",
      "Market & limit orders",
      "Basic market analysis",
      "Email support",
    ],

    buttonText: "Start Trading",

    popular: false,
  },

  {
    id: 2,
    title: "Pro Trader",
    price: 29,
    duration: "/month",

    description:
      "Advanced features for serious traders",

    features: [
      "Advanced trading tools",
      "Margin trading up to 10x",
      "Advanced technical analysis",
      "Priority support",
      "API access",
    ],

    buttonText: "Start Trading",

    popular: true,
    badge: "Most Popular",
  },

  {
    id: 3,
    title: "Institutional",
    price: "Custom",
    duration: "",

    description:
      "Enterprise-grade solutions for institutions",

    features: [
      "Custom trading solutions",
      "Unlimited trading volume",
      "OTC desk access",
      "Dedicated account manager",
      "Custom API integration",
      "24/7 priority support",
    ],

    buttonText: "Start Trading",

    popular: false,
  },
];
export { footerLinks, testimonials, features, pricingPlans };
