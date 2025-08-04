// what needs to be implemented

"use client";
import styled from "styled-components";
import Button from "./components/Button";

export default function Home() {
  return (
    <>
      <p>This is a reusable button from our component library:</p>
      <Button>Click Me</Button>
      <Button>Another Button</Button>
    </>
  );
}
