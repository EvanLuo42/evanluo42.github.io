// Projects data
export interface Project {
    title: string;
    description: string;
    tags: string[];
    links: { github?: string; demo?: string; docs?: string; paper?: string };
    stars?: string;
    status: string;
}

export const projects: Project[] = [
    {
        title: "Blender",
        description:
            "Contribute to Grease Pencil module and Cycles renderer of the Blender Project.",
        tags: ["Blender", "3D Modeling", "DCC"],
        links: { github: "https://github.com/blender/blender" },
        status: "Active",
    },
];
