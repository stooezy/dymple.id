import { Suspense } from "react";
import ModeToggle from "./mode-toggle";

export default function Navbar() {
  return (
    <nav className="w-full flex py-8 px-4 lg:px-0">
      <div>
        <Suspense fallback={<p>Loading...</p>}>
          <ModeToggle />
        </Suspense>
      </div>
    </nav>
  );
}
