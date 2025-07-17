const fs = require("fs");

const spacing = {
    1: "0.25rem",
    2: "0.5rem",
    3: "1rem",
    4: "1.5rem"
};

const radii = {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)"
};

const shadows = {
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)"
};

const breakpoints = {
    sm: "640px",
    md: "768px",
    lg: "1024px"
};

const colors = {
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    white: "var(--color-white)",
    black: "var(--color-black)",
    gray100: "var(--color-gray-100)",
    gray800: "var(--color-gray-800)",
};


const utilities = [];

// === Spacing ===
Object.entries(spacing).forEach(([key, val]) => {
    utilities.push(`.p-${key} { padding: ${val}; }`);
    utilities.push(`.m-${key} { margin: ${val}; }`);
    utilities.push(`.pt-${key} { padding-top: ${val}; }`);
    utilities.push(`.mt-${key} { margin-top: ${val}; }`);
    utilities.push(`.mb-${key} { margin-bottom: ${val}; }`);
});

// === Radius, shadows, font, display ===
Object.entries(radii).forEach(([key, val]) => {
    utilities.push(`.rounded-${key} { border-radius: ${val}; }`);
});
Object.entries(shadows).forEach(([key, val]) => {
    utilities.push(`.shadow-${key} { box-shadow: ${val}; }`);
});

// === Typography & layout ===
utilities.push(`
    .text-center { text-align: center; }
    .font-sans { font-family: var(--font-sans); }
    .w-full { width: 100%; }
    .max-w-screen-md { max-width: 768px; margin: auto; }
    .transition { transition: var(--transition); }
    .opacity-50 { opacity: 0.5; }
    .opacity-100 { opacity: 1; }
`);

// === Responsive variants ===
Object.entries(breakpoints).forEach(([prefix, width]) => {
    utilities.push(`@media (min-width: ${width}) {`);
    utilities.push(`  .${prefix}\\:p-2 { padding: ${spacing[2]}; }`);
    utilities.push(`  .${prefix}\\:text-center { text-align: center; }`);
    utilities.push(`  .${prefix}\\:flex { display: flex; }`);
    utilities.push(`}`);
});

const tokens = fs.readFileSync("./utilities/tokens.css", "utf8");
const extraUtilities = require("./utilities/extraUtilities");
const components = require("./utilities/components");
const animations = require("./utilities/animations");
const colors2 = require("./utilities/colors");
const layout = require("./utilities/layout");
const forms = require("./utilities/forms");

const allUtilities = [tokens,...utilities,...extraUtilities,...components,...animations,...colors2,...layout,...forms];

const output = allUtilities.join("\n\n");

fs.writeFileSync("dist/breezecss.css", output);
console.log("✅ breezecss.css built!");