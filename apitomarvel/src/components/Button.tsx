import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type: "a" | "b";
}

export const Button = ({ chlidren, type }: ButtonProps) => {
  return (
    <button className={type === "a" ? "adasdas" : "asdasdas"}>
      {chlidren}
    </button>
  );
};
