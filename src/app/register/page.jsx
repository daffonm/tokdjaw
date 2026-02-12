import { Suspense } from "react";
import Register from "./RegisterClient";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Register />
    </Suspense>
  );
}
