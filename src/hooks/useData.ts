import { useState, useEffect } from "react";
import { StatusState } from "../types/StatusState";
import { APIResponse } from "../types/APIResponse";
import { ApiDataState } from "../types/APIDataState";
import { DateFormatter } from "../utils/DateFormatter";
import { StatusColors } from "../utils/StatusFormatter";
import { TabsMap } from "../utils/TabsMap";

export const useData = (name: string, url: string): ApiDataState => {
  const [data, setData] = useState<StatusState | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const json: APIResponse = await response.json();

        const date = DateFormatter(json.page.updated_at);
        const { indicator, description } = json.status;
        const statusColor = StatusColors[indicator] || "purple";

        setData({
          name,
          workLink: TabsMap[name],
          date,
          description,
          statusColor,
        });
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
