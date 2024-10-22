import { en } from "./langs/en";
import { es } from "./langs/es";

const namespace = "obsidian-vite";

i18next.addResourceBundle("en", namespace, en);
i18next.addResourceBundle("es", namespace, es);

export const text = i18next.getFixedT(null, namespace);
