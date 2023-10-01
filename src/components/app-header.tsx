import React from "react";
import { GearIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Container from "./container";

const AppHeader = () => {
  return (
    <div className={"border-b py-2"}>
      <Container className="flex gap-4 items-center justify-between">
        AppHeader
        <Button variant={"outline"} size={"icon"}>
          <GearIcon />
        </Button>
      </Container>
    </div>
  );
};

export default AppHeader;
