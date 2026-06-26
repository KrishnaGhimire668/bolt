
"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

type DispatchButtonProps = {
  payload: object;
};

export default function DispatchButton({
  payload,
}: DispatchButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleDispatch() {
    setLoading(true);

    try {
      const response = await fetch("/api/webhook/transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Dispatch failed");
      }

      alert("Payload dispatched successfully!");
      console.log(result);
    } catch (error) {
      console.error(error);
      alert("Failed to dispatch payload.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button onClick={handleDispatch} disabled={loading}>
      {loading ? "Dispatching..." : "Dispatch Test Payload"}
    </Button>
  );
}