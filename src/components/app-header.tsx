import { GearIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Container from "./container";
import { FC } from "react";

const AppHeader: FC = () => {
  return (
    <header className={"border-b py-2 fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-stone-100/40"}>
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
