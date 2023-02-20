import categories from "../../categories.json";
import { Directory } from "../../components/Directory";

export const Home = () => {
  return (
    <Directory categories={categories} />
  );
};
