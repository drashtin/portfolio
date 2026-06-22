// Generates a clean, valid single-page PDF résumé with correct xref offsets.
// Run: node scripts/generate-resume.mjs
import { writeFileSync, mkdirSync } from "node:fs";

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

// Page is 612x792 (US Letter). Build content stream as text lines.
const lines = [];
let y = 752;
const text = (s, size, font, dx = 56) => {
  lines.push(`BT /${font} ${size} Tf 1 0 0 1 ${dx} ${y} Tm (${esc(s)}) Tj ET`);
};
const gap = (n) => (y -= n);

text("DRASHTIN NAVADIYA", 22, "F2");
gap(20);
text("Full Stack Developer  |  Surat, Gujarat, India", 11, "F1");
gap(14);
text("navadiyadrashtin07@gmail.com   |   drashtin.in   |   github.com/drashtin", 10, "F1");
gap(28);

text("SUMMARY", 13, "F2");
gap(16);
const summary = [
  "Full Stack Developer building scalable web applications with React.js, Next.js,",
  "Node.js, Express.js, MongoDB and MySQL. Experienced across project management",
  "systems, service marketplaces and travel booking platforms, with REST APIs,",
  "Google APIs and Stripe integrations, and a clean, scalable architecture mindset.",
];
summary.forEach((l) => { text(l, 10.5, "F1"); gap(15); });
gap(12);

text("EXPERIENCE", 13, "F2");
gap(16);
text("Full Stack Developer — Shranam Info", 11, "F2");
gap(14);
text("July 2024 - Present  |  Surat, Gujarat, India", 10, "F1");
gap(15);
[
  "- Built a Project Management System: employees, projects, leave and finance.",
  "- Developed Geekofy, a US local service marketplace with dual dashboards.",
  "- Engineered Imerzn travel booking with Stripe payments and role-based access.",
  "- Integrated Google Maps, Calendar and Sheets APIs across products.",
].forEach((l) => { text(l, 10.5, "F1"); gap(15); });
gap(12);

text("SKILLS", 13, "F2");
gap(16);
[
  "Frontend: React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, Bootstrap",
  "Backend: Node.js, Express.js, REST APIs    Database: MongoDB, MySQL",
  "Integrations: Stripe, Google Maps / Calendar / Sheets APIs    Tools: Git, GitHub",
].forEach((l) => { text(l, 10.5, "F1"); gap(15); });
gap(12);

text("PROJECTS", 13, "F2");
gap(16);
[
  "PMS — Project management with finance overview (Next.js, Tailwind).",
  "Geekofy — US service marketplace, ratings & reviews (Next.js, Node.js).",
  "Imerzn — Travel booking platform with payments (React, Express, MySQL).",
].forEach((l) => { text(l, 10.5, "F1"); gap(15); });

const content = lines.join("\n");

const objects = [];
objects[1] = "<< /Type /Catalog /Pages 2 0 R >>";
objects[2] = "<< /Type /Pages /Kids [3 0 R] /Count 1 >>";
objects[3] =
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] " +
  "/Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>";
objects[4] = `<< /Length ${content.length} >>\nstream\n${content}\nendstream`;
objects[5] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>";
objects[6] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>";

let pdf = "%PDF-1.4\n";
const offsets = [];
for (let i = 1; i < objects.length; i++) {
  offsets[i] = pdf.length;
  pdf += `${i} 0 obj\n${objects[i]}\nendobj\n`;
}
const xrefStart = pdf.length;
pdf += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
for (let i = 1; i < objects.length; i++) {
  pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

mkdirSync("public", { recursive: true });
writeFileSync("public/drashtin-navadiya-resume.pdf", pdf, "latin1");
console.log("Resume PDF generated → public/drashtin-navadiya-resume.pdf");
