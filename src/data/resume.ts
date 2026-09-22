export const resumeData = {
  name: "Katakam Saikumar",
  role: "AI/ML Engineer",
  contact: {
    phone: "+1-857-437-2422",
    email: "katakamsaikumar9@gmail.com",
    github: "https://github.com/katakam4601",
    linkedin: "https://www.linkedin.com/in/sai-kumar-katakam-821552209/",
    portfolio: "https://portfolio.com", // Placeholder
  },
  summary:
    "AI/ML Engineer with 3.5+ years of experience building and productionizing machine learning, deep learning, Generative AI, LLM, RAG, and agentic AI systems across financial services and healthcare. Experienced in credit risk, fraud detection, NLP, computer vision, document intelligence, and enterprise LLM applications, spanning model development, evaluation, deployment, and monitoring. Strong in Python, PyTorch, Hugging Face, LangChain, LangGraph, AWS, Azure, FastAPI, Docker, Kubernetes, and MLflow.",
  education: [
    {
      institution: "Northeastern University",
      location: "Boston, MA",
      degree: "Master of Science in Information Systems",
      gpa: "",
      duration: "",
      coursework: [],
    }
  ],
  experience: [
    {
      role: "AI/ML Engineer",
      company: "Johnson & Johnson",
      location: "Cambridge, MA",
      duration: "Sep 2025 – Present",
      highlights: [
        "Developed predictive quality models for medical-device manufacturing by combining production parameters, equipment states, and quality measurements across 15+ production lines, identifying defect drivers and supporting process investigations.",
        "Engineered predictive-maintenance models from PLC and machine telemetry, converting vibration, temperature, pressure, motor-current, and cycle-time signals into time-series features and LSTM forecasting models across 4,000+ assets to identify equipment risks earlier.",
        "Trained computer-vision inspection models using PyTorch, TensorFlow, Keras, CNNs, and transfer learning across 18+ production batches, improving detection of surface defects, assembly variations, and inspection abnormalities.",
        "Integrated MES, PLC, sensor, and quality records into ML data pipelines using Azure Databricks, Spark, Delta Lake, and Azure Data Lake, processing 300GB+ of telemetry and production data daily for downstream modeling.",
        "Optimized GPU inference pipelines using ONNX, TensorRT, quantization, batching, and preprocessing techniques, bringing inspection-model response times below 500ms for near-real-time manufacturing workflows.",
        "Established an LLM-powered engineering knowledge system using Azure OpenAI, GPT-4, Hugging Face Transformers, embeddings, Azure AI Search, and LangChain to ground responses in SOPs, CAPA records, maintenance manuals, and engineering documentation.",
        "Implemented LangGraph multi-agent workflows for retrieval, technical analysis, and response generation, adding retrieval evaluation, grounding checks, guardrails, prompt controls, and human review for engineering and quality use cases.",
      ],
    },
    {
      role: "AI/ ML Engineer",
      company: "Capgemini",
      location: "India",
      duration: "Mar 2022 – Aug 2024",
      highlights: [
        "Formulated credit-risk and loan-default models using XGBoost, LightGBM, Random Forest, and Logistic Regression across 8M+ customer and repayment records, improving risk segmentation and supporting lending decisions.",
        "Detected fraudulent transaction patterns using gradient boosting, Isolation Forest, statistical features, and behavioral signals across 25M+ digital-payment transactions, reducing manual review effort by 30%.",
        "Automated customer, transaction, and repayment data preparation through reusable Python, PySpark, and SQL pipelines, standardizing feature engineering and validation workflows and reducing recurring preparation effort by 25%.",
        "Classified KYC documents and extracted structured information using PyTorch, TensorFlow, BERT, Hugging Face, NER, and OCR across 2M+ onboarding records, reducing manual document-processing time by 40%.",
        "Deployed ML scoring services using FastAPI, Docker, Kubernetes, MLflow, and AWS SageMaker, supporting model versioning, monitoring, and 500K+ monthly prediction requests.",
        "Evaluated credit-risk and fraud models using SHAP, LIME, feature importance, probability calibration, and threshold tuning, improving model interpretability and supporting validation reviews with risk teams.",
        "Coordinated ML production delivery using Git, Jenkins, AWS/Azure, SQL, and REST APIs, working across engineering, QA, DevOps, and business teams to deliver 20+ releases and identify approximately $70K in annual operational savings.",
      ],
    },
  ],
  projects: [
    {
      title: "Agentic Data Science Copilot",
      tech: ["Python", "Llama 3", "LangGraph", "LangChain", "SQL", "Pandas", "DuckDB", "PostgreSQL", "Gradio"],
      year: "",
      highlights: [
        "Designed an agentic data-analysis copilot using Llama 3 and LangGraph to translate natural-language questions into SQL and Python workflows, coordinating schema discovery, query generation, validation, execution, and visualization.",
        "Configured tool calling, structured outputs, conversation memory, human-approval checkpoints, and evaluation for SQL correctness, task completion, and response quality to improve reliability of generated analytics.",
      ],
    },
    {
      title: "Multimodal Document Intelligence",
      tech: ["Python", "Llama 3", "Hugging Face", "LayoutLMv3", "OCR", "OpenCV", "PyMuPDF", "Streamlit"],
      year: "",
      highlights: [
        "Created a multimodal document-intelligence pipeline using OCR, LayoutLMv3, OpenCV, and transformer models to classify scanned forms and extract structured fields from invoices and business documents.",
        "Validated low-confidence extractions using confidence scoring, validation rules, and human-in-the-loop review, measuring field-level precision, recall, and F1-score across varied document layouts.",
      ],
    },
  ],
  skills: {
    "Programming & Data": ["Python", "SQL", "PySpark", "Pandas", "NumPy", "Apache Spark", "ETL", "Feature Engineering"],
    "Machine Learning": ["Scikit-learn", "XGBoost", "LightGBM", "CatBoost", "Random Forest", "Logistic Regression", "Time Series", "Anomaly Detection", "Model Evaluation"],
    "Deep Learning & NLP": ["PyTorch", "TensorFlow", "Keras", "Hugging Face Transformers", "BERT", "CNNs", "Vision Transformers", "YOLO", "OpenCV", "NLP", "OCR", "NER"],
    "GenAI & LLMs": ["LLMs", "Generative AI", "RAG", "Agentic AI", "LangChain", "LangGraph", "LlamaIndex", "Embeddings", "Vector Search", "Prompt Engineering", "Tool Calling", "Function Calling", "LLM Evaluation", "Fine-Tuning", "LoRA", "PEFT"],
    "MLOps & Cloud": ["MLflow", "FastAPI", "Docker", "Kubernetes", "KServe", "CI/CD", "Model Monitoring", "AWS", "SageMaker", "Bedrock", "Azure", "Azure OpenAI", "Databricks"],
    "Databases & Tools": ["PostgreSQL", "pgvector", "FAISS", "Weaviate", "Git", "GitHub", "Jenkins", "Jira", "Confluence"],
  },
};
