import React from "react";

const ClientMainLayout = ({ children }) => {
  return (
    <div>
      <header />

      <main>{children}</main>

      <footer />
    </div>
  );
};

export default ClientMainLayout;
