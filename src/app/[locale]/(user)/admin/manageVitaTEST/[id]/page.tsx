import { getVitaTestsActionById } from "@/lib/actions/vitaTestActions";
import VitaTestDetailClient from "./vita-test-detail-client";

export default async function VitaTestDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const result = await getVitaTestsActionById(params.id);

  if (!result.success || !result.test) {
    return <p>Test not found</p>;
  }

  return <VitaTestDetailClient test={result.test} />;
}
