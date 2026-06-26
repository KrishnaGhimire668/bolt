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
      console.log("Dispatching payload:", payload);

      // Next step:
      // POST -> /api/webhook/transaction
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