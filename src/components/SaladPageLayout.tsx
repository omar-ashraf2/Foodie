import React from "react";
import SaladConfig from "./SaladConfig";

const SaladPageLayout: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      {/* Header */}
      <header className="w-full bg-orange-500 text-white p-4">
        Create Your Salad
      </header>

      {/* Main Content */}
      <main className="w-full flex-1 p-4">
        <SaladConfig />
      </main>

      {/* Footer with Navigation */}
      <footer className="w-full bg-gray-200 p-4 text-center">
        <button className="bg-green-500 text-white p-2 rounded">Next</button>
      </footer>
    </div>
  );
};

export default SaladPageLayout;
