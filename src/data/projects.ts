export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem?: string;
  solution?: string;
  capabilities: string[];
  technologies: string[];
  architecture?: {
    nodes: string[];
  };
  metrics?: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "digitalwardrobeai",
    title: "DigitalWardrobeAI",
    subtitle: "Multimodal AI Digital Wardrobe Platform",
    description:
      "An AI-powered digital wardrobe platform utilizing multimodal models and vector search to organize, analyze, and generate outfits.",
    problem:
      "Users struggle to organize their physical wardrobes digitally and find it difficult to mix and match clothing efficiently without visual aid.",
    solution:
      "Built a complete platform that automatically removes backgrounds, extracts vision AI metadata (color, material, style), and stores embeddings in Qdrant for natural-language wardrobe querying and AI outfit generation.",
    capabilities: [
      "Automatic background removal",
      "Clothing classification",
      "Vision AI metadata extraction",
      "Category detection",
      "Color detection",
      "Material detection",
      "Season detection",
      "Style detection",
      "Embeddings-based semantic search",
      "Natural-language wardrobe queries",
      "AI outfit generation",
      "Virtual try-on",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Gradio",
      "OpenAI",
      "Google GenAI",
      "Qdrant",
      "MongoDB",
      "AWS S3",
      "rembg",
      "ONNX Runtime",
    ],
    architecture: {
      nodes: [
        "Image Upload",
        "Background Removal",
        "Vision AI",
        "Metadata Extraction",
        "Embeddings",
        "Qdrant",
        "Semantic Search",
        "Outfit Generation",
      ],
    },
    featured: true,
  },
  {
    id: "plumbwise",
    title: "PLUMBWISE",
    subtitle: "AI Agent Plumbing Assistant",
    description:
      "A conversational AI agent designed for plumbing troubleshooting with document-grounded responses and real-time voice interaction capabilities.",
    problem:
      "Plumbing emergencies require immediate, accurate troubleshooting, but professional help is often delayed and existing generic AI chatbots lack domain-specific grounding and real-time voice interaction.",
    solution:
      "Developed a specialized AI agent using LangChain and LiveKit that leverages RAG on plumbing manuals to provide real-time, voice-based conversational troubleshooting with safety-first escalation protocols.",
    capabilities: [
      "LangChain",
      "LangGraph",
      "Tool calling",
      "RAG",
      "Document-grounded responses",
      "Web search",
      "Image analysis",
      "Safety-first escalation",
      "Real-time voice interaction",
      "LiveKit",
      "WebRTC",
      "STT/TTS",
      "Stateful streaming conversations",
      "FastAPI backend",
      "MongoDB",
      "AWS S3",
    ],
    technologies: [
      "LangChain",
      "LangGraph",
      "FastAPI",
      "LiveKit",
      "WebRTC",
      "MongoDB",
      "AWS S3",
    ],
    architecture: {
      nodes: [
        "User",
        "Conversation",
        "Agent Router",
        "LLM",
        "Tools",
        "RAG / Web Search / Image Analysis",
        "Response",
      ],
    },
    featured: true,
  },
  {
    id: "perfusion-mind-ai",
    title: "Perfusion Mind AI",
    subtitle: "Multi-Agent LLM Application",
    description:
      "A multi-agent LLM application utilizing dynamic assistant routing, session-based state management, and robust tool calling.",
    problem:
      "Handling complex user queries across diverse domains requires specialized knowledge, but a single monolithic LLM prompt often loses context, hallucinates, or fails to execute domain-specific tools effectively.",
    solution:
      "Implemented a multi-agent architecture using OpenAI Assistants where a primary router dynamically delegates tasks to specialized sub-agents, maintaining seamless session state and streaming responses to the user.",
    capabilities: [
      "Multi-agent LLM application",
      "Dynamic assistant routing",
      "OpenAI Assistants",
      "Session-based state management",
      "Streaming responses",
      "Tool calling",
      "Run cancellation",
      "Production logging",
    ],
    technologies: [
      "OpenAI Assistants",
      "Docker",
      "FastAPI",
      "Chainlit",
      "Google Cloud Run",
    ],
    architecture: {
      nodes: [
        "User",
        "Assistant Router",
        "Specialized Assistant",
        "Tools",
        "Streaming Response",
      ],
    },
    featured: true,
  },
  {
    id: "newsaggregator",
    title: "NewsAggregator",
    subtitle: "Production RSS News Aggregation & Search Platform",
    description:
      "A highly scalable production RSS news aggregation platform processing feeds from major Indian publishers with advanced cross-lingual search capabilities.",
    problem:
      "Aggregating news from multiple regional publishers involves dealing with inconsistent feed formats, duplicate articles, and language barriers, making unified search across English and Hindi highly inefficient.",
    solution:
      "Built a robust asynchronous pipeline using FastAPI and PostgreSQL with multi-pass deduplication, custom AST-based boolean search, and cross-lingual English-Hindi search capabilities to process over 200+ feeds reliably.",
    metrics: [
      "7 Indian publishers",
      "207+ RSS feeds for Indian Express",
    ],
    capabilities: [
      "Incremental scraping",
      "Watermarking",
      "Multi-pass deduplication",
      "Author enrichment",
      "URL extraction",
      "AST-based boolean search",
      "Fuzzy matching",
      "English-Hindi cross-lingual search",
    ],
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "SQLite",
      "AsyncIO",
      "BeautifulSoup",
      "curl_cffi",
      "Cron",
      "Linux deployment",
    ],
    architecture: {
      nodes: [
        "RSS Feeds",
        "Async Fetching",
        "Parsing",
        "Normalization",
        "Deduplication",
        "Author Enrichment",
        "PostgreSQL",
        "Search API",
      ],
    },
    featured: true,
  },
  {
    id: "imageenhancement",
    title: "ImageEnhancement",
    subtitle: "Cloud-Based AI Image Enhancement System",
    description:
      "A cloud-based AI system for processing, enhancing, and upscaling a wide variety of image formats using specialized neural networks.",
    problem:
      "Professional image enhancement and super-resolution require heavy GPU computation and support for diverse raw image formats, which is difficult to scale and deploy as a standard web service.",
    solution:
      "Engineered a scalable cloud infrastructure using Modal and FastAPI to deploy Real-ESRGAN and Reti-Diff models, enabling up to 4x super-resolution and contrast correction on high-end NVIDIA GPUs with support for RAW and HEIC formats.",
    metrics: ["Up to 4x super-resolution"],
    capabilities: [
      "JPG, PNG, RAW, ARW, CR2, DNG, HEIC support",
      "Real-ESRGAN",
      "Reti-Diff",
      "Up to 4x super-resolution",
      "Low-light enhancement",
      "Contrast correction",
      "White balance correction",
    ],
    technologies: [
      "Modal",
      "FastAPI",
      "Gradio",
      "OpenCV",
      "rawpy",
      "pillow-heif",
      "NVIDIA L40S",
    ],
    architecture: {
      nodes: [
        "Input Image",
        "Format Detection",
        "Preprocessing",
        "AI Enhancement",
        "Super Resolution",
        "Post Processing",
        "Output",
      ],
    },
    featured: true,
  },
  {
    id: "greyhound-racing-prediction",
    title: "Greyhound Racing Prediction",
    subtitle: "Machine Learning Prediction Model",
    description:
      "Machine learning model trained on historical racing performance data with feature engineering for race outcome prediction.",
    capabilities: [],
    technologies: ["Python", "Scikit-learn", "Machine Learning"],
    featured: false,
  },
  {
    id: "cctv-detection",
    title: "CCTV Person & Number Plate Detection",
    subtitle: "Computer Vision Security System",
    description:
      "Computer vision solution for person and number-plate detection associated with a Gujarat cybersecurity initiative.",
    capabilities: [],
    technologies: ["Computer Vision", "Object Detection", "Python"],
    featured: false,
  },
  {
    id: "storybook-generator",
    title: "AI Children's Storybook Generator",
    subtitle: "Generative AI Application",
    description:
      "Generative AI application producing personalized children's storybooks for readers approximately 1–12 years old.",
    capabilities: [],
    technologies: ["Generative AI", "LLMs", "Python"],
    featured: false,
  },
  {
    id: "invita-watches-agent",
    title: "Invita Watches Sales Agent",
    subtitle: "Backend AI Assistant",
    description:
      "Backend AI agent assisting salespeople with guided customer conversations.",
    capabilities: [],
    technologies: ["AI Agents", "LLMs", "Backend Engineering"],
    featured: false,
  },
  {
    id: "livekit-voice-agent",
    title: "Self-Hosted LiveKit Voice Agent Infrastructure",
    subtitle: "Real-Time Voice Infrastructure",
    description:
      "Self-hosted LiveKit infrastructure for real-time voice AI workflows over WebRTC.",
    capabilities: [],
    technologies: ["LiveKit", "WebRTC", "Self-Hosted Infrastructure"],
    featured: false,
  },
  {
    id: "recommendation-system",
    title: "Recommendation System",
    subtitle: "User Engagement ML Model",
    description:
      "Python / Scikit-learn recommendation system with reported 18% improvement in user engagement and 10% reduction in churn.",
    metrics: [
      "18% improvement in user engagement",
      "10% reduction in churn",
    ],
    capabilities: [],
    technologies: ["Python", "Scikit-learn"],
    github: "https://github.com/kharadechetan/Recommendation-system",
    featured: false,
  },
  {
    id: "automated-parking-system",
    title: "Automated Parking System",
    subtitle: "Operational Optimization System",
    description:
      "Automated parking system with reported 20% improvement in parking space utilization and 30% reduction in operational delays.",
    metrics: [
      "20% improvement in parking space utilization",
      "30% reduction in operational delays",
    ],
    capabilities: [],
    technologies: ["Python"],
    github: "https://github.com/kharadechetan/APS-System",
    featured: false,
  },
];
