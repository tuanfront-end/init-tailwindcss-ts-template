import Button from "components/Button/Button";
import Logo from "components/Logo/Logo";
import Navigation from "components/Navigation/Navigation";
import SwithNightMode from "components/SwithNightMode/SwithNightMode";
import React from "react";

export default function Header() {
  return (
    <div className="ttnc-Header bg-white dark:bg-gray-800 md:border-b border-gray-200 dark:border-gray-700">
      <div className="container flex justify-between items-center py-4 space-x-4 lg:space-x-8">
        <div className="flex justify-start flex-shrink-0 lg:w-0 lg:flex-1">
          <Logo />
        </div>
        <Navigation />
        <div className="lg:w-0 lg:flex-1 flex-shrink-0 hidden lg:flex items-center justify-end space-x-4">
          <SwithNightMode />
          <Button size="small">Get Template</Button>
        </div>
      </div>
    </div>
  );
}
