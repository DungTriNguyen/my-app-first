import React from "react";
import { Text } from "react-native";
import { twMerge } from "tailwind-merge";
interface CategoryProps {
  text: string;
  className?: string;
}
const Category = ({ text, className }: CategoryProps) => {
  return (
    <Text className={twMerge("text-[10px] text-[#9CA4AB] font-medium", className)}>
      {text}
    </Text>
  );
};
export default Category;
