import React from "react";
import { Text } from "react-native";
import { twMerge } from "tailwind-merge";

export interface TitleContentProps {
  title: string;
  className?: string;
}

const TitleContent = ({ title, className }: TitleContentProps) => {
  return (
    <Text className={twMerge("text-white text-lg font-bold", className)}>
      {title}
    </Text>
  );
};

export default TitleContent;
