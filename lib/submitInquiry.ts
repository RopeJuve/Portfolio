import {
  contactSchema,
  type ContactFormValues,
} from "@/components/Contact/contactSchema";

export type DeliverInquiry = (text: string) => Promise<void>;

export type SubmitInquiryResult =
  | { status: "delivered" }
  | { status: "invalid" }
  | { status: "failed" };

const formatArrival = (date: Date) => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Berlin",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZoneName: "short",
  }).formatToParts(date);

  const formatPart = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value;

  return `${formatPart("day")} ${formatPart("month")} ${formatPart("year")}, ${formatPart("hour")}:${formatPart("minute")} ${formatPart("timeZoneName")}`;
};

const formatInquiry = (payload: ContactFormValues) =>
  [
    "Inquiry",
    `First name: ${payload.user_name}`,
    `Last name: ${payload.user_last_name}`,
    `Email: ${payload.user_email}`,
    `Project: ${payload.message}`,
    `Arrived: ${formatArrival(new Date())}`,
  ].join("\n");

export const submitInquiry = async (
  payload: unknown,
  deliver: DeliverInquiry
): Promise<SubmitInquiryResult> => {
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return { status: "invalid" };
  }

  try {
    await deliver(formatInquiry(parsed.data));
    return { status: "delivered" };
  } catch {
    return { status: "failed" };
  }
};
