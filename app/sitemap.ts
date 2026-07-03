import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nexfit.app.br";
  const routes = [
    "",
    "/privacidade",
    "/termos",
    "/suporte",
    "/exclusao-de-conta",
    "/faq",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}
