
export const pods = [
  { id: "POD-01", name: "Alpha Pod", leadId: "EMP-001" },
  { id: "POD-02", name: "Beta Pod", leadId: "EMP-008" },
  { id: "POD-03", name: "Gamma Pod", leadId: "EMP-016" },
  { id: "POD-04", name: "Delta Pod", leadId: "EMP-023" },
];

export const processes = [
  { id: "PR-01", name: "Customer Support", code: "CS", workingRule: "ALL_DAYS" },
  { id: "PR-02", name: "Abandoned Cart Conversion", code: "ACC", workingRule: "EXCEPT_HOLIDAYS" },
  { id: "PR-03", name: "Retention", code: "RET", workingRule: "SUNDAYS_HOLIDAYS_OFF" },
  { id: "PR-04", name: "Non-Delivery Report", code: "NDR", workingRule: "ALL_DAYS" },
  { id: "PR-05", name: "Order Management", code: "OM", workingRule: "SUNDAYS_HOLIDAYS_OFF" },
];

export const brands = [
  { id: "BR-01", name: "Nova Fashion", workingRule: "ALL_DAYS", employeeIds: ["EMP-002"] },
  { id: "BR-02", name: "Urban Style", workingRule: "EXCEPT_HOLIDAYS", employeeIds: ["EMP-003"] },
  { id: "BR-03", name: "Glow Beauty", workingRule: "ALL_DAYS", employeeIds: ["EMP-004"] },
  { id: "BR-04", name: "Tech Haven", workingRule: "SUNDAYS_HOLIDAYS_OFF", employeeIds: ["EMP-005"] },
  { id: "BR-05", name: "Home Comfort", workingRule: "ALL_DAYS", employeeIds: ["EMP-006"] },
  { id: "BR-06", name: "Fit Life", workingRule: "EXCEPT_HOLIDAYS", employeeIds: ["EMP-009"] },
  { id: "BR-07", name: "Pure Living", workingRule: "SUNDAYS_HOLIDAYS_OFF", employeeIds: ["EMP-010"] },
  { id: "BR-08", name: "Daily Needs", workingRule: "ALL_DAYS", employeeIds: ["EMP-011"] },
  { id: "BR-09", name: "Style Street", workingRule: "ALL_DAYS", employeeIds: ["EMP-012", "EMP-013", "EMP-014"] },
  { id: "BR-10", name: "Smart Gadgets", workingRule: "EXCEPT_HOLIDAYS", employeeIds: ["EMP-017", "EMP-018", "EMP-019"] },
];

const employeeNames = [
  "Aarav Sharma", "Vivaan Patel", "Aditya Verma",
  "Arjun Mehta", "Reyansh Shah", "Krishna Gupta",
  "Ishaan Khan", "Rohan Desai", "Kabir Joshi",
  "Ananya Singh", "Diya Kapoor", "Aanya Mishra",
  "Sara Khan", "Myra Shah", "Ira Patel",
  "Priya Verma", "Riya Mehta", "Neha Gupta",
  "Simran Kaur", "Meera Joshi", "Kavya Nair",
  "Rahul Yadav", "Karan Malhotra", "Dev Shah",
  "Manav Jain", "Sana Sheikh", "Zoya Khan",
  "Aditi Rao", "Nikhil Das", "Tanya Roy",
];

export const employees = employeeNames.map((name, index) => {
  const number = index + 1;
  const podNumber = number <= 7 ? 1 : number <= 15 ? 2 : number <= 22 ? 3 : 4;

  return {
    id: `EMP-${String(number).padStart(3, "0")}`,
    name,
    email: `employee${number}@rosteriq.demo`,
    podId: `POD-0${podNumber}`,
    role: [1, 8, 16, 23].includes(number) ? "Pod Lead" : "Specialist",
    weeklyOff: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][index % 7],
    status: "Active",
    eligibleProcessIds: ["PR-01", "PR-02", "PR-03", "PR-04", "PR-05"],
  };
});

export const assignments = [
  { id: "AS-01", employeeId: "EMP-002", brandId: "BR-01", processId: "PR-01" },
  { id: "AS-02", employeeId: "EMP-003", brandId: "BR-02", processId: "PR-02" },
  { id: "AS-03", employeeId: "EMP-004", brandId: "BR-03", processId: "PR-01" },
  { id: "AS-04", employeeId: "EMP-005", brandId: "BR-04", processId: "PR-04" },
  { id: "AS-05", employeeId: "EMP-006", brandId: "BR-05", processId: "PR-05" },
  { id: "AS-06", employeeId: "EMP-009", brandId: "BR-06", processId: "PR-03" },
  { id: "AS-07", employeeId: "EMP-010", brandId: "BR-07", processId: "PR-01" },
  { id: "AS-08", employeeId: "EMP-011", brandId: "BR-08", processId: "PR-04" },
  { id: "AS-09", employeeId: "EMP-012", brandId: "BR-09", processId: "PR-01" },
  { id: "AS-10", employeeId: "EMP-013", brandId: "BR-09", processId: "PR-02" },
  { id: "AS-11", employeeId: "EMP-014", brandId: "BR-09", processId: "PR-03" },
  { id: "AS-12", employeeId: "EMP-017", brandId: "BR-10", processId: "PR-01" },
  { id: "AS-13", employeeId: "EMP-018", brandId: "BR-10", processId: "PR-04" },
  { id: "AS-14", employeeId: "EMP-019", brandId: "BR-10", processId: "PR-05" },
];

export const publicHolidays = [
  { date: "2026-01-26", name: "Republic Day" },
  { date: "2026-08-15", name: "Independence Day" },
  { date: "2026-10-02", name: "Gandhi Jayanti" },
];

export const leaves = [];
export const compOffs = [];
