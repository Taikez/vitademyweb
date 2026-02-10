import VitaTestQuestionEditor from "@/components/admin/vita-test-question-editor";
import { getVitaTestsActionById } from "@/lib/actions/vitaTestActions";
import { notFound } from "next/navigation";

export default async function Page({ params }: any) {
  const vitaTest = await getVitaTestsActionById(params.id);

  if (!vitaTest.test) notFound();

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-10">
      <h1 className="text-2xl font-semibold">
        Add Questions – {vitaTest.test.title}
      </h1>

      <VitaTestQuestionEditor
        vitaTestId={vitaTest.test.id}
        initialQuestions={vitaTest.test.questions}
      />
    </div>
  );
}
