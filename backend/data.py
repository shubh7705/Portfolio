PROJECTS = [
    {
        "id": 1,
        "name": "Adaptive AI Assistant (Multi-LLM Gateway)",
        "description": (
            "A Multi-LLM routing gateway with a 10-stage evaluation pipeline that "
            "dynamically selects Gemini, Llama, and DeepSeek models based on query "
            "complexity, reducing token cost by 85%."
        ),
        "github_url": "https://github.com/shubh7705/Adaptive-AI-Assistant",
        "highlights": [
            "Designed 10-stage evaluation pipeline dynamically routing Gemini, Llama, and DeepSeek (85% token cost reduction)",
            "Engineered asynchronous FastAPI backend with Redis caching reducing API latency by 90%+ (2.5s → <50ms)",
            "Developed scalable REST APIs with Server-Sent Events (SSE), PostgreSQL, and React/Next.js dashboard for real-time token streaming & analytics",
        ],
        "tech": [
            "Python", "FastAPI", "React", "Next.js", "JavaScript",
            "PostgreSQL", "Redis", "Docker", "LangChain", "Google Gemini API", "REST APIs",
        ],
    },
    {
        "id": 2,
        "name": "GIT AI",
        "description": (
            "Multi-agent AI platform built with LangGraph and LangChain to automate code "
            "reviews, repository understanding, security analysis, and software documentation "
            "across 20+ source files using a high-precision RAG pipeline."
        ),
        "github_url": "https://github.com/shubh7705/GIT-AI",
        "highlights": [
            "Implemented RAG pipeline with semantic code chunking, MiniLM embeddings, and ChromaDB (85% context usage reduction)",
            "Enhanced indexing and retrieval strategies, cutting latency by 70% and boosting issue detection coverage by 30%",
            "Developed FastAPI backend services integrated with PostgreSQL to support model inference, experiment tracking, and REST APIs",
        ],
        "tech": [
            "Python", "FastAPI", "LangGraph", "LangChain",
            "ChromaDB", "PostgreSQL", "REST APIs", "PyTorch",
        ],
    },
    {
        "id": 3,
        "name": "TorchGPT: Decoder-Only Transformer from Scratch",
        "description": (
            "A 15M-parameter decoder-only Transformer built from scratch in PyTorch using "
            "multi-head self-attention, RoPE embeddings, causal masking, LayerNorm, and "
            "autoregressive text generation — trained on 8M+ tokens."
        ),
        "github_url": "https://github.com/shubh7705/TorchGPT",
        "highlights": [
            "Trained on 8M+ tokens across multiple context lengths and attention configs, reaching 16.2 validation perplexity",
            "Optimized inference using mixed precision, KV caching, and decoding strategies (41% lower latency, 34% GPU memory reduction)",
            "Benchmarked multiple model configurations, documenting experimental results and performance trade-offs",
        ],
        "tech": [
            "Python", "PyTorch", "CUDA", "NumPy",
            "TensorBoard", "SentencePiece", "Mixed Precision Training",
        ],
    },
]
