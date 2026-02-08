import { useEffect, useState } from "react";

export default function useSessionStorageState(key, initialValue) {
  const [state, setState] = useState(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const raw = sessionStorage.getItem(key);
      return raw ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      sessionStorage.setItem(key, JSON.stringify(state));
    } catch {}
  }, [key, state]);

  return [state, setState];
}
