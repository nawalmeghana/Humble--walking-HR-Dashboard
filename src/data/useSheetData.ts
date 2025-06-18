import { useEffect, useState } from "react";

export type SheetRow = {
  [key: string]: string;
};

export const useSheetData = (url: string) => {
  const [data, setData] = useState<SheetRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch sheet data");
        return res.json();
      })
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};
