export function getSection(path: string | undefined) {
  if (!path) return "framework";
  const [dir] = path.split("/", 1);
  if (!dir) return "framework";
  return (
    {
      // ui: "ui",
      // mdx: "mdx",
      // cli: "cli",
      // headless: "headless",

      academics: "academics",
      admission: "admission",
      exams: "exams",
      fees: "fees",
      help: "help",
      reviews: "reviews",
    }[dir] ?? "framework"
  );
}
