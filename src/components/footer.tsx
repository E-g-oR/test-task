import { FC } from "react";
import Container from "./container";

const Footer: FC = () => {
  return (
    <footer className={"border-t py-5"}>
      <Container>
        Logo
        <p>
          The project of the test task, for fetching products and displaying
          them.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
