"use client";
import { useEffect, useState } from "react";

export function WillThrowAfterHydration() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (hydrated) {
    throw new Error("Failure simulation");
  }
  return <></>;
}
