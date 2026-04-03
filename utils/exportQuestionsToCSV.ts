import { questions, sections } from "@/data/riskAssessmentQuestions";

export function exportQuestionsToCSV(): void {
  const headers = [
    "Question ID",
    "Section",
    "Section Max Points",
    "Question",
    "Option 1 Label",
    "Option 1 Points",
    "Option 2 Label",
    "Option 2 Points",
    "Option 3 Label",
    "Option 3 Points",
    "Option 4 Label",
    "Option 4 Points",
  ];

  const rows = questions.map((q) => {
    const section = sections.find((s) => s.name === q.section);
    const maxPoints = section?.maxPoints ?? "";

    const row = [
      q.id,
      q.section,
      maxPoints,
      q.question,
    ];

    // Add up to 4 options (pad with empty if fewer)
    for (let i = 0; i < 4; i++) {
      if (q.options[i]) {
        row.push(q.options[i].label, q.options[i].points.toString());
      } else {
        row.push("", "");
      }
    }

    return row;
  });

  const csvContent = [
    headers.join(","),
    ...rows.map((row) =>
      row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")
    ),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "risk_assessment_questions.csv";
  link.click();
  URL.revokeObjectURL(url);
}
