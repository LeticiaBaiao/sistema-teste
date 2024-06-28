import React from "react";
import { AuthProvider } from "./contexts/auth";
import RoutesApp from "./routes/routes";
import GlobalStyle from "./styles/global";

const App = () => (
  <AuthProvider>
    <RoutesApp />
    <GlobalStyle />
  </AuthProvider>
);

export default App;
