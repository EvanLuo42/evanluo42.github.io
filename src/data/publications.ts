// Publications data
export interface Publication {
    title: string;
    authors: string[];
    venue: string;
    year: number;
    tags: string[];
    links: { paper?: string; code?: string; arxiv?: string };
    abstract: string;
    selected: boolean;
}

export const publications: Publication[] = [
    {
        title: "Transformer-Based Clinical Note Understanding with Multi-Task Learning",
        authors: ["Jane Doe", "Alice Johnson", "Bob Williams"],
        venue: "NeurIPS 2025",
        year: 2025,
        tags: ["NLP", "Healthcare"],
        links: { paper: "#", code: "https://github.com", arxiv: "#" },
        abstract:
            "We propose a multi-task transformer model that jointly learns clinical note classification and named entity recognition, achieving state-of-the-art results on three benchmark datasets.",
        selected: true,
    },
    
];

// Helper: author name to bold
export const highlightedAuthor = "Evan Luo";
