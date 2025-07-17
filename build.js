const fs = require("fs");

const spacing = {
    1: "0.25rem",
    2: "0.5rem",
    3: "1rem",
};

const utilities = [];

Object.entries(spacing).forEach(([key, val]) => {
    utilities.push(`.p-${key} { padding: ${val}; }`);
    utilities.push(`.m-${key} { margin: ${val}; }`);
    utilities.push(`.pt-${key} { padding-top: ${val}; }`);
    utilities.push(`.mb-${key} { margin-bottom: ${val}; }`);
});

utilities.push(`
    .flex { display: flex; }
    .items-center { align-items: center; }
    .justify-center { justify-content: center; }
    .text-center { text-align: center; }
    .font-sans { font-family: var(--font-sans); }
    .rounded-md { border-radius: var(--radius-md); }
    .bg-primary { background-color: var(--color-primary); }
    .text-white { color: var(--color-white); }
`);

const tokens = fs.readFileSync("src/tokens.css", "utf8");

fs.writeFileSync("dist/breezecss.css", `${tokens}\n\n${utilities.join("\n")}`);
console.log("✅ breezecss.css built!");