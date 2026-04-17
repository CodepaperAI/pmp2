import { redirect } from "next/navigation";

export default async function CampaignThankYouRoute({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const queryString = new URLSearchParams(resolvedSearchParams).toString();

  redirect(queryString ? `/thank-you?${queryString}` : "/thank-you");
}
