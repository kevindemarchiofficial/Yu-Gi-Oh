import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full flex-col flex">
      {/* NAVBAR */}
      {children}
      {/* FOOTER */}
    </div>
  );
};

export default Layout;
