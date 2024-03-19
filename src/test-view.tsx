import { View } from "@tarojs/components";
import { FC } from "react";

interface IProps {
  title: string;
}
const TestView: FC<IProps> = ({ title }) => {
  return <View role="movies-list">{title}</View>;
};
export default TestView;
