export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
};

export const projects: Project[] = [
  {
    title: "Reconocimiento de figuras con IA",
    description: "Modelo que detecta formas simples en imágenes usando deep learning.",
    tech: ["Python", "TensorFlow"],
    github: "https://github.com/tuusuario/ai-shapes",
  },
  {
    title: "Sistema de riego inteligente",
    description: "Control de electroválvulas con ESP32 y LoRa para automatizar un huerto.",
    tech: ["ESP32", "LoRa", "Arduino"],
    github: "https://github.com/tuusuario/iot-irrigation",
  },
  {
    title: "API en Go",
    description: "Backend REST con autenticación JWT y PostgreSQL.",
    tech: ["Go", "Gin", "PostgreSQL"],
    github: "https://github.com/tuusuario/go-api",
  },
];