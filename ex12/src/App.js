import React, { Suspense } from "react";
import "./App.css";
import Lazy from "./Lazy";
import Spinner from "./Spinner";

function App() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Lazy />
      </Suspense>
    </div>
  );
}

export default App;
