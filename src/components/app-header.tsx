import { GearIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Container from "./container";
import { FC } from "react";

const AppHeader: FC = () => {
  return (
    <header className={"border-b py-2"}>
      <Container className="flex gap-4 items-center justify-between">
        Logo
        <Button variant={"outline"} size={"icon"}>
          <GearIcon />
        </Button>
      </Container>
    </header>
  );
};

export default AppHeader;
