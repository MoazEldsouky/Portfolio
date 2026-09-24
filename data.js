// Portfolio content source of truth.
// Edit via admin.html, then click "Export data.js" to download and replace this file for permanent deployment.
//
// `version` must change whenever this file is edited by hand. Browsers that hold
// admin edits in localStorage from an older version will ignore them and show
// this file's content instead, so a deploy is never masked by stale local data.
const PORTFOLIO_DATA = {
  "version": "2026-09-24",
  "hero": {
    "name": "Moaz Eldsouky",
    "titles": [
      "AI Engineer",
      "LLM & RAG Engineer",
      "Agentic AI Engineer",
      "Arabic Document AI"
    ],
    "tagline": "Production LLM, RAG, and Arabic document AI systems that run fully on-premises.",
    "stats": [
      { "value": "2+", "label": "Years Experience" },
      { "value": "25+", "label": "Projects Delivered" },
      { "value": "100%", "label": "Client Satisfaction" },
      { "value": "99%", "label": "Peak Model Accuracy" }
    ]
  },
  "about": {
    "summary": "AI Engineer with 2+ years building production LLM and RAG systems for enterprise, government, and healthcare organizations. Specialist in fully offline, on-premises deployment of LLMs, VLMs, OCR, embedding, and reranking models on GPU infrastructure with zero external API dependencies. Deep focus on Arabic-language document AI, including VLM OCR fine-tuning for handwritten legal text where open-source baselines consistently fail. Experienced across the full delivery path: multimodal ingestion, hybrid and agentic retrieval, GPU inference optimization, REST APIs, and deployment on Azure, AWS, and air-gapped infrastructure.",
    "email": "moazeldsoky8@gmail.com",
    "phone": "+20 109 644 8317",
    "location": "Cairo, Egypt (Open to Remote & Relocation)",
    "linkedin": "https://linkedin.com/in/moaz-eldesouky-762288251",
    "github": "https://github.com/MoazEldsouky",
    "mostaql": "https://mostaql.com/u/Moaz_Eldsouky",
    "resume": "assets/Moaz_Eldsouky_AI_Engineer_Resume.pdf"
  },
  "skills": [
    {
      "id": "s1",
      "category": "Programming & Data",
      "items": [
        "Python",
        "TypeScript",
        "SQL",
        "Bash",
        "Pandas",
        "NumPy",
        "Pydantic",
        "Data Preprocessing",
        "Synthetic Data Generation"
      ]
    },
    {
      "id": "s2",
      "category": "LLMs & Generative AI",
      "items": [
        "LLM & VLM Fine-tuning (LoRA, QLoRA)",
        "Private & Air-gapped LLM Deployment",
        "Prompt Engineering",
        "Agentic AI",
        "Autonomous Agents",
        "NER",
        "Text Classification",
        "Sentiment Analysis",
        "Question Answering",
        "Summarization"
      ]
    },
    {
      "id": "s3",
      "category": "Agent Orchestration & MCP",
      "items": [
        "LangGraph",
        "CrewAI",
        "AutoGen",
        "Model Context Protocol (MCP)",
        "Multi-agent Workflows",
        "Multi-hop Reasoning"
      ]
    },
    {
      "id": "s4",
      "category": "RAG & Retrieval",
      "items": [
        "Large-scale RAG Architecture",
        "Hybrid Retrieval (BM25 + Dense)",
        "Reranking Models",
        "Embedding Models",
        "Chunking Strategies",
        "High-volume Ingestion & Indexing",
        "Retrieval Evaluation"
      ]
    },
    {
      "id": "s5",
      "category": "Vector Databases",
      "items": [
        "Qdrant",
        "FAISS",
        "Chroma",
        "Pinecone"
      ]
    },
    {
      "id": "s6",
      "category": "Document AI & Multimodal",
      "items": [
        "Vision Language Models (VLMs)",
        "OCR Pipelines",
        "Arabic Handwriting Recognition",
        "Layout & Table Extraction",
        "Multimodal Ingestion (PDF, Office, Image, Audio, Video)"
      ]
    },
    {
      "id": "s7",
      "category": "Frameworks",
      "items": [
        "PyTorch",
        "Hugging Face Transformers",
        "LangChain",
        "LangGraph",
        "CrewAI",
        "Scikit-learn",
        "spaCy",
        "NLTK",
        "TensorFlow",
        "Keras",
        "XGBoost",
        "LightGBM",
        "CatBoost"
      ]
    },
    {
      "id": "s8",
      "category": "Model APIs",
      "items": [
        "OpenAI",
        "Claude (Anthropic)",
        "Gemini",
        "Groq"
      ]
    },
    {
      "id": "s9",
      "category": "LLMOps & Evaluation",
      "items": [
        "LangSmith",
        "Langfuse",
        "RAGAS",
        "Prompt/Version Tracking",
        "Cost Monitoring",
        "LLM-as-a-Judge Scoring",
        "Model Drift Monitoring"
      ]
    },
    {
      "id": "s10",
      "category": "Infrastructure & MLOps",
      "items": [
        "On-premises & Air-gapped Infrastructure",
        "GPU Servers",
        "vLLM",
        "Ollama",
        "GPU Inference Optimization",
        "Distributed Inference",
        "Docker",
        "Kubernetes",
        "Terraform",
        "FastAPI",
        "REST APIs",
        "CI/CD",
        "Azure",
        "AWS",
        "AWS Bedrock",
        "Google Vertex AI",
        "PostgreSQL",
        "Streamlit",
        "Linux"
      ]
    },
    {
      "id": "s11",
      "category": "Security & Governance",
      "items": [
        "Role-based Access Control (RBAC)",
        "Tenant & Vault Isolation",
        "AI Security & Privacy",
        "Regulatory Compliance"
      ]
    },
    {
      "id": "s12",
      "category": "Tools",
      "items": [
        "Git",
        "GitHub",
        "n8n"
      ]
    }
  ],
  "experience": [
    {
      "id": "e0",
      "role": "Artificial Intelligence Engineer",
      "company": "Skygate Information Technology (an E-VAS TELECOM company)",
      "period": "May 2026 – Present",
      "type": "Full-time",
      "bullets": [
        "Built an enterprise-scale, multi-agent RAG platform that ingests and indexes millions of documents into a Qdrant vector database, sustaining high retrieval accuracy at low query latency across the full corpus.",
        "Designed a hierarchical retrieval funnel to overcome context-window limits at million-document scale, combining a cluster-summary tree, multi-stage approximate-nearest-neighbor routing, and a CRAG-style grade-and-retry loop.",
        "Architected fully offline, on-premises AI systems for enterprise and government organizations, satisfying strict privacy, security, and regulatory-compliance requirements with zero external API dependencies.",
        "Designed a vault-based multi-tenant architecture where each vault isolates its own knowledge base and document collection, with role-based access control (RBAC) letting administrators scope vault access per user across Finance, Accounting, Human Resources, Legal & Compliance, and Sales, plus a global vault spanning every knowledge source a user is authorized to see.",
        "Created a multimodal document processing pipeline covering PDF, TXT, Markdown, Microsoft Word, Excel, PowerPoint, image, audio, and video formats, with OCR and transcription for non-text sources.",
        "Served the complete AI stack locally on on-premises GPU servers (LLMs, VLMs, embedding models, OCR models, reranking models, and vector databases) with zero external API dependencies.",
        "Optimized large-scale inference pipelines for high throughput and low latency, tuning continuous batching, concurrency limits, and GPU memory utilization to maximize hardware efficiency under concurrent load.",
        "Built a production-ready RAG evaluation script with Arabic normalization, multilingual embeddings, BERTScore, and LLM-as-a-judge scoring to benchmark retrieval and generation quality."
      ]
    },
    {
      "id": "e1",
      "role": "AI Software Engineer",
      "company": "Volaris LLC",
      "period": "Sep 2025 – Apr 2026",
      "type": "Hybrid",
      "bullets": [
        "Delivered a production RAG system for medical specialists over ASCO, ESMO, NCCN, NICE, and WHO guidelines using medical-aware embedding models and FAISS vector search, returning source-attributed, evidence-based recommendations in under 4 seconds end-to-end.",
        "Integrated a hybrid retrieval pipeline combining BM25 lexical search with dense vector similarity, measurably improving precision on complex multi-parameter clinical queries over a vector-only baseline.",
        "Automated an HBV Clinical Assessment Engine evaluating 15+ clinical parameters (fibrosis stage, viral DNA levels, ALT markers) and returning validated JSON with step-by-step clinical reasoning, replacing a multi-hour manual review workflow.",
        "Developed a context-aware clinical chat system with persistent session memory and full source attribution (page and section metadata), letting specialists verify every AI-generated recommendation against its original guideline.",
        "Shipped all AI services as containerized FastAPI REST APIs on Azure with CI/CD pipelines for zero-downtime releases, and administered PostgreSQL infrastructure across the full model lifecycle."
      ]
    },
    {
      "id": "e2",
      "role": "Freelance AI Engineer",
      "company": "Mostaql Platform",
      "period": "Mar 2024 – Present",
      "type": "Remote, part-time",
      "bullets": [
        "Delivered 25+ end-to-end AI/ML solutions for SME and startup clients across healthcare, e-commerce, and finance, spanning NLP, computer vision, and predictive modeling, with 100% client satisfaction.",
        "Fine-tuned LLMs with LoRA and QLoRA for domain-specific QA, code repair, and text classification, reaching 95%+ accuracy and validating pipelines against F1, precision, recall, BLEU, and ROUGE.",
        "Built LLM-powered autonomous assistants on OpenAI, Claude, and Groq with multi-step tool integration, including LangGraph agentic workflows for multi-hop reasoning.",
        "Deployed RAG pipelines on FAISS, Chroma, and Pinecone with domain-tuned embedding models, measurably improving retrieval grounding over vanilla LLM responses.",
        "Released models as production REST APIs with Docker containerization and monitoring instrumentation, sourcing, cleaning, and validating datasets from SQL databases and file systems."
      ]
    }
  ],
  "projects": [
    {
      "id": "p0",
      "title": "VLM OCR Fine-Tuning for Arabic Legal Documents",
      "stack": [
        "Qwen3-VL",
        "Parameter-Efficient Fine-Tuning",
        "Gemini 3.5 Flash",
        "Synthetic Data Generation"
      ],
      "description": "Built at Skygate. Fine-tuned a Qwen3-VL-based OCR model for Arabic legal documents and contracts mixing handwritten and printed text, raising handwritten Arabic accuracy in a domain where leading open-source baselines consistently fail. Assembled the training corpus from public datasets, targeted web scraping, and synthetic data, with first-pass labels from Gemini 3.5 Flash followed by extensive manual correction and QA. Parameter-efficient fine-tuning preserved performance on English text, tables, and document layout.",
      "highlight": "Handwritten Arabic OCR"
    },
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
      "description": "Engineered a multi-tool AI agent that routes queries between an internal RAG system (company FAQs and proprietary knowledge base) and an external web search tool, returning accurate answers whether or not the information exists internally. Added a consultation-booking subsystem that validates inputs, collects structured patient details, and auto-handles optional fields, removing manual operator involvement entirely.",
      "highlight": "Multi-tool Agentic AI",
      "link": "https://github.com/MoazEldsouky/Agentic-Medical-RAG-Chatbot",
      "demo": "https://huggingface.co/spaces/moazx/Agentic-Medical-RAG-Chatbot",
      "video": "https://www.youtube.com/watch?v=MuRdFiiDmf0",
      "image": "https://github.com/MoazEldsouky/Agentic-Medical-RAG-Chatbot/raw/main/assets/1.png"
    },
    {
      "id": "p2",
      "title": "AraBERTv02 Fine-Tuning for Arabic Sentiment Analysis",
      "stack": [
        "Python",
        "Hugging Face Transformers",
        "AraBERTv02",
        "Gradio"
      ],
      "description": "Curated and labeled 1,000 Arabic restaurant reviews, then fine-tuned AraBERTv02 for binary sentiment classification to 99% accuracy on the held-out test set. Published as a live public demo on Hugging Face Spaces.",
      "highlight": "99% Accuracy",
      "link": "https://github.com/MoazEldsouky/Arabic-Restaurant-Review-Sentiment-Analysis",
      "image": "https://ms.hsoubcdn.com/uploads/portfolios/3117042/662fdb80d9101/positive.png",
      "demo": "https://huggingface.co/spaces/moazx/Sentiment_analysis_for_restaurant_reviews_in_Arabic"
    },
    {
      "id": "p4",
      "title": "DeBERTa Fine-Tuning for Machine-Generated Text Detection",
      "stack": [
        "Python",
        "PyTorch",
        "Hugging Face Transformers",
        "DeBERTa"
      ],
      "description": "Trained DeBERTa with custom word embeddings to detect machine-generated social media text at 97%+ accuracy, directly applicable to content moderation and trust & safety pipelines.",
      "highlight": "97%+ Accuracy"
    },
    {
      "id": "p3",
      "title": "Multi-Class News Classification System",
      "stack": [
        "Python",
        "Scikit-learn",
        "SVM",
        "TF-IDF",
        "Hugging Face",
        "NLTK",
        "SpaCy",
        "NumPy",
        "Pandas"
      ],
      "description": "Built an SVM classifier on TF-IDF features categorizing BBC News articles into 5 classes (Sports, Tech, Entertainment, Politics, Business), achieving 98% accuracy with a clean, production-ready inference pipeline.",
      "highlight": "98% Accuracy",
      "link": "https://github.com/MoazEldsouky/News-Classification-with-SVC-Clearly-Explained",
      "demo": "https://huggingface.co/spaces/moazx/News_Categorizer",
      "image": "https://ms.hsoubcdn.com/uploads/thumbnails/3117042/65ea365228d65/ML2-1.jpg"
    }
  ],
  "education": {
    "degree": "B.Sc. Artificial Intelligence",
    "institution": "Kafrelsheikh University, Egypt",
    "period": "Sep 2021 – Jul 2025",
    "grade": "Very Good (3.6/4.0 equivalent)",
    "coursework": [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Data Structures & Algorithms"
    ]
  },
  "achievements": [
    "25+ freelance AI projects delivered with 100% client satisfaction (Mostaql Platform, verified).",
    "Languages: Arabic (Native), English (Professional Working Proficiency).",
    "Domain focus: Arabic and English NLP, including Arabic transformer fine-tuning and Arabic VLM OCR fine-tuning delivered in production environments."
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

// Read admin edits from localStorage only when they were made against the
// current version of this file; otherwise fall back to the deployed data.
function getPortfolioData() {
  try {
    const stored = localStorage.getItem(PORTFOLIO_LOCAL_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed && parsed.version === PORTFOLIO_DATA.version) return parsed;
    }
  } catch (e) {}
  return JSON.parse(JSON.stringify(PORTFOLIO_DATA));
}

// Always save to localStorage (works on any host)
function savePortfolioData(data) {
  try {
    localStorage.setItem(PORTFOLIO_LOCAL_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn('Could not save to localStorage:', e);
  }
}

// Reset localStorage back to the hardcoded defaults
function clearPortfolioData() {
  try {
    localStorage.removeItem(PORTFOLIO_LOCAL_KEY);
  } catch (e) {}
}
