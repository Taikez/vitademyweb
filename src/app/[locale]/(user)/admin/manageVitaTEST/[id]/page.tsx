import { getVitaTestsActionById } from "@/lib/actions/vitaTestActions";
import VitaTestDetailClient from "./vita-test-detail-client";

export default async function VitaTestDetailPage(props: any) {
  const { id } = await props.params;

  const result = await getVitaTestsActionById(id);

  if (!result.success || !result.test) {
    return <p>Test not found</p>;
  }

  return <VitaTestDetailClient test={result.test} />;
}
