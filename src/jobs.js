import { DateTime } from "luxon";

const fmt_tenure = (start, end) => {
  const startDate = DateTime.fromFormat(start, "MM/yyyy");
  const endDate =
    end === "now" ? DateTime.now() : DateTime.fromFormat(end, "MM/yyyy");

  const diff = Math.ceil(endDate.diff(startDate, "months").toObject().months);
  const years = Math.floor(diff / 12);
  const months = diff % 12;

  if (years > 0) return `${years} yr, ${months} mo`;

  return `${months} mo`;
};

const jobs = [
  {
    company: "University of Illinois - Springfield",
    title: "B.S. Computer Science",
    tags: ["DS", "Algorithms", "Networking", "Architecture"],
    length: "Spring 2022",
    current: false,
    img: "uis",
  },
  {
    company: "Mastercard",
    title: "Senior Software Engineer",
    tags: ["Spring Boot", "Javascript", "Cryptography", "PKCS11"],
    length: fmt_tenure("08/2023", "now"),
    current: true,
    img: "mc",
  },
  {
    company: "World Wide Technology",
    title: "Software Engineer II",
    tags: ["React", "Vue", "Javascript", "Agile"],
    length: fmt_tenure("02/2022", "08/2023"),
    current: false,
    img: "wwt",
  },
  {
    company: "DataAutomation",
    title: "Backend Developer",
    tags: ["PHP", "AWS"],
    length: fmt_tenure("08/2021", "11/2021"),
    current: false,
    img: "da",
  },
  {
    company: "Precision Planting",
    title: "Junior Software Developer",
    tags: ["C++", "Qt", "Firmware"],
    length: fmt_tenure("06/2019", "08/2021"),
    current: false,
    img: "precision",
  },
];

export default jobs;
