import { NextResponse } from "next/server";
import { deliverToTelegram } from "@/lib/deliverToTelegram";
import { submitInquiry } from "@/lib/submitInquiry";

export const POST = async (request: Request) => {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ status: "failed" }, { status: 500 });
  }

  const result = await submitInquiry(payload, deliverToTelegram);

  if (result.status === "delivered" || result.status === "ignored") {
    return NextResponse.json(result);
  }

  if (result.status === "invalid") {
    return NextResponse.json(result, { status: 400 });
  }

  return NextResponse.json(result, { status: 500 });
};
