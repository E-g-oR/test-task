import { getLang, useSettingsStore } from "@/store/settings";
import { dictionaries } from "@/translation";

export const useTranslation = () => {
  const lang = useSettingsStore(getLang);
  return dictionaries[lang] ?? dictionaries.en;
};
