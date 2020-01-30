import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ClientMainLayout from "../layouts/ClientMainLayout/ClientMainLayout";
import ClientRoutes from "../routes/ClientRoutes";

import "./styles.css";

export default function App() {
  return (
    <ClientMainLayout>
      <Router>
        <ClientRoutes />
      </Router>
    </ClientMainLayout>
  );
}
