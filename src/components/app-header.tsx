import { FC } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Container from "./container";
import { useTranslation } from "@/lib/hooks/useTranslation";
import {
  getIsDarkScheme,
  getLang,
  getSetColorScheme,
  getSetLang,
  useSettingsStore,
} from "@/store/settings";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const languages = [
  {
    value: "en",
    title: "English",
  },
  {
    value: "ru",
    title: "Русский",
  },
];

const AppHeader: FC = () => {
  const t = useTranslation();
  const langStore = useSettingsStore(getLang);
  const setLang = useSettingsStore(getSetLang);
  const isDark = useSettingsStore(getIsDarkScheme);
  const setIsDark = useSettingsStore(getSetColorScheme);

  return (
    <header
      className={
        "border-b py-2 fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-stone-100/40 dark:bg-stone-800/40"
      }
    >
      <Container className="flex gap-4 items-center justify-between">
        {t.common.logo}
        <div className="flex gap-3">
          <Select value={langStore} onValueChange={setLang}>
            <SelectTrigger>
              <SelectValue placeholder={"pick app language"} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {languages.map((language) => (
                  <SelectItem key={language.value} value={language.value}>
                    {language.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button
            onClick={() => setIsDark(!isDark)}
            variant={"outline"}
            size={"icon"}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default AppHeader;
