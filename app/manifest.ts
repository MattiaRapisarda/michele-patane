import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Michele Patanè | Artista del Papiro",
        short_name: "Michele Patanè",
        description:
            "Portfolio artistico di Michele Patanè, artista del papiro siciliano.",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#000000",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}