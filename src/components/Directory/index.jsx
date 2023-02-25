import { DirectoryItem } from "../DirectoryItem";
import categories from "../../categories.json";
import { DirectoryContainer } from "./styles";

export const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};
