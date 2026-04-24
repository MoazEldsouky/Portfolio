// Portfolio content source of truth.
// Update this file and redeploy to publish changes for everyone.
const PORTFOLIO_DATA = {
  "hero": {
    "name": "Moaz Eldsouky",
    "titles": [
      "AI Engineer",
      "NLP & ML Engineer",
      "Data Scientist",
      "LLM Specialist"
    ],
    "tagline": "Building intelligent systems that think, reason, and scale."
  },
  "about": {
    "summary": "AI Engineer specializing in NLP, LLMs, fine-tuning, and production AI systems, with 2+ years of experience delivering scalable, production-ready ML solutions across enterprise domains. Expert in building autonomous AI agents with reasoning capabilities, tool integration, and multi-step workflows, as well as RAG pipelines, prompt engineering, and model optimization for classification, QA, and domain-specific applications. Proficient in model performance evaluation using industry-standard metrics (BLEU, ROUGE, F1, precision, recall, accuracy) and mitigating model drift. Strong deployment experience with Python, FastAPI, PyTorch, LangChain, and Hugging Face Transformers, with hands-on production deployments on Azure and AWS.",
    "email": "moazeldsoky8@gmail.com",
    "phone": "+20 109 644 8317",
    "location": "Egypt (Open to Remote & Relocation)",
    "linkedin": "https://linkedin.com/in/moaz-eldesouky-762288251",
    "github": "https://github.com/MoazEldsouky",
    "mostaql": "https://mostaql.com/u/Moaz_Eldsouky"
  },
  "skills": [
    {
      "id": "s1",
      "category": "Programming",
      "items": [
        "Python",
        "SQL"
      ]
    },
    {
      "id": "s2",
      "category": "AI/ML Frameworks",
      "items": [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "XGBoost",
        "LightGBM",
        "CatBoost"
      ]
    },
    {
      "id": "s3",
      "category": "NLP & LLMs",
      "items": [
        "Hugging Face Transformers",
        "LangChain",
        "LangGraph",
        "CrewAI",
        "OpenAI API",
        "Claude (Anthropic)",
        "Groq",
        "Gemini",
        "spaCy",
        "NLTK"
      ]
    },
    {
      "id": "s4",
      "category": "LLM Techniques",
      "items": [
        "Fine-tuning (LoRA, QLoRA)",
        "Prompt Engineering",
        "RAG",
        "Agentic AI",
        "Text Classification",
        "NER",
        "Sentiment Analysis",
        "Question Answering",
        "Summarization",
        "Computer Vision"
      ]
    },
    {
      "id": "s5",
      "category": "Vector Databases",
      "items": [
        "FAISS",
        "Chroma",
        "Pinecone"
      ]
    },
    {
      "id": "s6",
      "category": "MLOps & Deployment",
      "items": [
        "FastAPI",
        "REST APIs",
        "Docker",
        "CI/CD Pipelines",
        "Azure",
        "AWS",
        "Cloud Computing",
        "Model Drift Monitoring"
      ]
    },
    {
      "id": "s7",
      "category": "Data Science",
      "items": [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Plotly",
        "Data Preprocessing"
      ]
    },
    {
      "id": "s8",
      "category": "Dev Tools",
      "items": [
        "VS Code",
        "Cursor",
        "Windsurf",
        "Git",
        "GitHub",
        "Jupyter Notebook",
        "Google Colab",
        "n8n"
      ]
    }
  ],
  "experience": [
    {
      "id": "e1",
      "role": "AI Software Engineer",
      "company": "Volaris LLC",
      "period": "Sep 2025 – Present",
      "type": "Hybrid",
      "bullets": [
        "Architected a production RAG system for medical specialists indexing ASCO, ESMO, NCCN, NICE, and WHO guidelines using medical-aware embedding models and FAISS, enabling sub-4-second retrieval across hundreds of guideline pages.",
        "Engineered a hybrid retrieval pipeline combining BM25 lexical search with vector similarity, significantly improving precision on complex multi-parameter medical queries.",
        "Built a context-aware clinical chat system with persistent session memory and full source attribution (page/section metadata), allowing medical specialists to verify every AI-generated recommendation.",
        "Developed an automated HBV Clinical Assessment Engine processing 15+ clinical parameters and returning validated JSON outputs with step-by-step clinical reasoning, replacing a manual multi-hour review workflow.",
        "Deployed all AI services as containerized FastAPI REST APIs on Azure, integrated CI/CD pipelines for zero-downtime production releases and managed PostgreSQL database infrastructure throughout the full model lifecycle."
      ]
    },
    {
      "id": "e2",
      "role": "Freelance AI Engineer",
      "company": "Mostaql Platform",
      "period": "Mar 2024 – Present",
      "type": "Remote",
      "bullets": [
        "Delivered 15+ end-to-end AI/ML solutions for SME and startup clients across healthcare, e-commerce, and finance, achieving 100% client satisfaction.",
        "Fine-tuned LLMs using LoRA and QLoRA for domain-specific tasks including QA, code repair, and text classification; achieved 95%+ accuracy evaluated using F1, BLEU, and ROUGE metrics.",
        "Built LLM-powered autonomous assistants using OpenAI, Claude, and Groq with multi-step tool integration, including LangGraph-based agentic workflows for multi-hop reasoning tasks.",
        "Implemented RAG pipelines using FAISS, Chroma, and Pinecone with domain-tuned embedding models, improving information retrieval grounding versus vanilla LLM responses.",
        "Prepared, cleaned, and validated datasets from SQL databases; deployed models as production REST APIs with Docker containerization and monitoring instrumentation."
      ]
    }
  ],
  "projects": [
    {
      "id": "p1",
      "title": "Agentic Medical RAG Chatbot",
      "stack": [
        "Python",
        "LangGraph",
        "LangChain",
        "OpenAI API",
        "FAISS",
        "Gradio"
      ],
      "description": "Designed a multi-tool AI agent that routes queries between an internal RAG system and external web search, ensuring accurate responses. Built an intelligent consultation booking subsystem that validates inputs and auto-handles optional fields, reducing booking friction with zero manual operator involvement.",
      "highlight": "Multi-tool Agentic AI",
      "link": "https://github.com/MoazEldsouky/Agentic-Medical-RAG-Chatbot",
      "demo": "https://huggingface.co/spaces/moazx/Agentic-Medical-RAG-Chatbot",
      "video": "https://www.youtube.com/watch?v=MuRdFiiDmf0",
      "image": "https://github.com/MoazEldsouky/Agentic-Medical-RAG-Chatbot/raw/main/assets/1.png"
    },
    {
      "id": "p2",
      "title": "AraBERT Fine-Tuning for Arabic Sentiment Analysis",
      "stack": [
        "Python",
        "Hugging Face Transformers",
        "AraBERTv02",
        "Gradio"
      ],
      "description": "Collected and labeled 1,000 Arabic restaurant reviews; fine-tuned AraBERTv02 for binary sentiment classification, achieving 99% accuracy on the held-out test set. Deployed as a live public demo on Hugging Face Spaces.",
      "highlight": "99% Accuracy"
    },
    {
      "id": "p3",
      "title": "Multi-Class News Classification System",
      "stack": [
        "Python",
        "Scikit-learn",
        "SVM",
        "TF-IDF",
        "Hugging Face"
      ],
      "description": "Built an SVM classifier on TF-IDF features categorizing BBC News articles into 5 classes (Sports, Tech, Entertainment, Politics, Business), achieving 98% accuracy with a clean, production-ready inference pipeline.",
      "highlight": "98% Accuracy"
    },
    {
      "id": "p4",
      "title": "DeBERTa Fine-Tuning for Deepfake Text Detection",
      "stack": [
        "Python",
        "PyTorch",
        "Hugging Face Transformers",
        "DeBERTa"
      ],
      "description": "Fine-tuned DeBERTa with custom word embeddings to detect machine-generated social media text, achieving 97%+ accuracy on deepfake tweet identification — directly applicable to content moderation and trust/safety pipelines.",
      "highlight": "97%+ Accuracy"
    }
  ],
  "education": {
    "degree": "B.Sc. Artificial Intelligence",
    "institution": "Kafrelsheikh University, Egypt",
    "period": "Sep 2021 – Jul 2025",
    "grade": "Very Good (equiv. ~3.6 GPA)",
    "coursework": [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Data Structures & Algorithms"
    ]
  },
  "achievements": [
    "15+ freelance AI projects delivered with 100% client satisfaction (Mostaql Platform, verified).",
    "Bilingual: Arabic (Native) | English (Professional working proficiency) .",
    "Subject-matter expertise in both Arabic and English NLP, one of a limited pool of engineers with verified Arabic transformer fine-tuning experience."
  ],
  "sections": [
    "hero",
    "about",
    "skills",
    "experience",
    "projects",
    "education",
    "contact"
  ]
};

const PORTFOLIO_LOCAL_KEY = 'portfolio_data';

function canUseLocalPortfolioOverride() {
  return window.location.protocol === 'file:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
}

function getPortfolioData() {
  if (canUseLocalPortfolioOverride()) {
    try {
      const stored = localStorage.getItem(PORTFOLIO_LOCAL_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
  }
  return JSON.parse(JSON.stringify(PORTFOLIO_DATA));
}

function savePortfolioData(data) {
  if (!canUseLocalPortfolioOverride()) return;
  localStorage.setItem(PORTFOLIO_LOCAL_KEY, JSON.stringify(data));
}

function clearPortfolioData() {
  if (!canUseLocalPortfolioOverride()) return;
  localStorage.removeItem(PORTFOLIO_LOCAL_KEY);
}
