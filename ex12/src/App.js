import React, { Suspense } from "react";
import "./App.css";
import Lazy from "./Lazy";
import Spinner from "./Spinner";

function App() {
  return (
    <div>
      <h1>Coded by 19521468</h1>
      <Suspense fallback={<Spinner />}>
        <Lazy />
      </Suspense>
    </div>
  );
}

export default App;
