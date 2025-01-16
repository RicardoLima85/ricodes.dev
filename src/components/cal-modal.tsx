"use client";
import { getCalApi } from "@calcom/embed-react";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export function CalModal({ children }: Props) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "60min" });
      cal("ui", {
        styles: { branding: { brandColor: "#07B5D5" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return <>{children}</>;
}
