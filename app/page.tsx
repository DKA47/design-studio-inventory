import type { Metadata } from "next";
import { Counter } from "./components/login/Page";

export default function IndexPage() {
  return <Counter />;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
