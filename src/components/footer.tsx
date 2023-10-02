import { FC } from "react";
import Container from "./container";
import { useTranslation } from "@/lib/hooks/useTranslation";

const Footer: FC = () => {
  const t = useTranslation();
  return (
    <footer className={"border-t py-5"}>
      <Container>
        {t.common.logo}
        <p>{t.footer.description}</p>
      </Container>
    </footer>
  );
};

export default Footer;
