import "./styles.scss";
import categories from "./categories.json";
import { Directory } from "./components/Directory";

const App = () => {
  return (
    <Directory categories={categories} />
  );
};

export default App;
