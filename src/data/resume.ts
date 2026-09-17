export const resumeData = {
  personal: {
    name: "Chetan Kharade",
    headline: "AI/ML Engineer | Generative AI & LLM Engineer | AI Agent Developer",
    location: "Pune, Maharashtra, India",
    email: "chetankharade2003@gmail.com",
    phone: "+91 7558429057",
  },
  education: {
    degree: "B.E. Information Technology Engineering",
    university: "Savitribai Phule Pune University",
    duration: "January 2021 – June 2025",
    cgpa: "8.60",
  },
  experience: [
    {
      role: "AI Developer",
      company: "Helios Infotech",
      location: "Pune, India",
      duration: "April 2025 – Present",
      responsibilities: [
        "Design, develop, and deploy AI/ML applications spanning Generative AI, LLMs, AI agents, and computer vision, covering the full lifecycle from model development through production deployment.",
        "Build and fine-tune machine learning and deep learning models, including self-hosted LLM deployment for production use cases.",
        "Develop backend services and REST APIs using FastAPI to serve AI models and integrate them into production applications.",
        "Architect AI agent systems with multi-agent routing, session and state management, streaming responses, and tool calling for conversational and task-based applications.",
        "Containerize and deploy AI applications using Docker, managing production workloads on Google Cloud Run and Modal.",
        "Integrate voice AI and real-time communication capabilities using LiveKit and WebRTC to build self-hosted voice-agent infrastructure.",
        "Administer Linux servers for self-hosted AI model deployment, including configuration, monitoring, and troubleshooting of production systems.",
        "Automate workflows and maintain production AI systems, ensuring reliability across model serving, APIs, and database integrations."
      ],
    },
    {
      role: "Data Scientist",
      company: "Learnbay",
      location: "Pune, India",
      duration: "August 2023 – August 2024",
      responsibilities: [
        "Improved data processing efficiency by 20% through optimization of data workflows using Python libraries.",
        "Increased model accuracy by 15% by deploying advanced machine learning techniques, including ensemble methods and hyperparameter tuning.",
        "Reduced manual reporting time by 30% by automating reporting workflows with Matplotlib and Seaborn.",
        "Contributed to a 12% improvement in actionable insights accuracy, enhancing data-driven business decision-making."
      ],
    },
  ],
  techStack: {
    "AI / ML": [
      "Python",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "OCR",
      "Object Detection",
    ],
    "Generative AI / LLM": [
      "LLMs",
      "LLM Fine-Tuning",
      "Generative AI",
      "Multimodal AI",
      "AI Agents",
      "RAG",
      "Prompt Engineering",
      "OpenAI",
      "LangChain",
      "LangGraph",
      "Embeddings",
      "Vector Search",
    ],
    Backend: [
      "FastAPI",
      "REST APIs",
      "AsyncIO",
      "Uvicorn",
      "Pydantic",
    ],
    Databases: [
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "AWS S3",
    ],
    "Computer Vision": [
      "OpenCV",
      "Real-ESRGAN",
      "Reti-Diff",
      "Image Processing",
      "RAW Image Processing",
      "HEIC Processing",
    ],
    "Cloud / MLOps": [
      "Docker",
      "Linux",
      "Modal",
      "Google Cloud Run",
      "AWS",
      "Model Serving",
      "Self-Hosted Models",
      "Server Administration",
      "Production Deployment",
      "Cron",
    ],
    "Voice AI": [
      "LiveKit",
      "WebRTC",
      "Speech-to-Text",
      "Text-to-Speech",
      "Voice Agents",
    ],
    "Developer Tools": [
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "VS Code",
      "PyCharm",
      "Google Colab",
    ],
  },
  expertise: [
    {
      title: "Generative AI & LLMs",
      description:
        "Building production-grade applications using advanced prompt engineering, fine-tuning, and multimodal models from OpenAI and Google GenAI.",
    },
    {
      title: "AI Agents",
      description:
        "Developing autonomous systems utilizing LangChain, LangGraph, tool calling, multi-agent routing, and stateful streaming architectures.",
    },
    {
      title: "RAG & Vector Search",
      description:
        "Designing document-grounded systems with semantic search, robust embedding pipelines, and Qdrant vector databases.",
    },
    {
      title: "Computer Vision",
      description:
        "Implementing object detection, OCR, image processing, and virtual try-on pipelines for real-world visual applications.",
    },
    {
      title: "Backend Engineering",
      description:
        "Architecting scalable and resilient REST APIs with FastAPI, asynchronous Python, PostgreSQL, and MongoDB.",
    },
    {
      title: "AI Infrastructure",
      description:
        "Deploying and serving models reliably using Docker, Linux, Modal, Google Cloud Run, and self-hosted model serving environments.",
    },
    {
      title: "Real-Time Voice AI",
      description:
        "Engineering low-latency, real-time voice conversational agents using LiveKit, WebRTC, and robust STT/TTS integrations.",
    },
  ],
  engineeringApproach: [
    {
      title: "Build for production",
      description:
        "AI systems need reliable APIs, deployment, monitoring and maintenance — not just notebooks.",
    },
    {
      title: "Keep systems modular",
      description:
        "Separate model logic, APIs, tools, data access and infrastructure.",
    },
    {
      title: "Ground LLM applications",
      description:
        "Use RAG, tools and structured state when applications require reliable context.",
    },
    {
      title: "Treat deployment as part of development",
      description:
        "Docker, Linux, cloud infrastructure and model serving are part of the engineering lifecycle.",
    },
    {
      title: "Design for failure",
      description:
        "Use cancellation, escalation, error handling and controlled tool execution where appropriate.",
    },
  ],
};
