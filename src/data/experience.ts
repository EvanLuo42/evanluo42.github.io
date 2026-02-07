// Experience & education data
export interface Experience {
    role: string;
    org: string;
    dept: string;
    period: string;
    description: string;
    current: boolean;
}

export interface Education {
    degree: string;
    school: string;
    period: string;
    detail: string;
}

export const experiences: Experience[] = [
    {
        role: "AI Algorithm Internship",
        org: "Beijing Freedo Technology",
        dept: "Research Center",
        period: "2026 - Present",
        description:
            "Develop Differentiable Physics Simulation & Differentiable Rendering pipeline for Video Generation of Fluid Dynamics with Taichi (e.g. FluidNexus-like pipeline).",
        current: true,
    },
    {
        role: "Undergraduate Research Assistant",
        org: "University of California Santa Barbara",
        dept: "Four Eyes Lab",
        period: "2025 - Present",
        description:
            "Working with Prof. Tobias Höllerer and Will Zhang on Open-vocabulary Semantic Segmentation.",
        current: true,
    }
];

export const education: Education[] = [
    {
        degree: "B.Sc. in Computer Science",
        school: "University of California Santa Barbara",
        period: "2025 - 2029 (Expected)",
        detail: 'GPA: 4.0/4.0',
    },
];
