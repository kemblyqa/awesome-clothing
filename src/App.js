import { Route, Routes } from "react-router-dom";

import { Home } from "./routes/home";
import { Navigation } from "./routes/navigation";
import { Authentication } from "./routes/authentication";
import { Shop } from "./routes/shop";
import { Checkout } from "./routes/checkout";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase";
import { useEffect } from "react";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
