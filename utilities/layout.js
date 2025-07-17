const layout = [
    `
    .flex { display: flex; }
    .inline-flex { display: inline-flex; }
    .items-center { align-items: center; }
    .justify-center { justify-content: center; }
    .justify-between { justify-content: space-between; }
    .flex-col {  flex-direction: column; }
    .flex-row { flex-direction: row; }
    .gap-4 { gap: 1rem; }
    `,
    `
    .grid { display: grid; }
    .grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
    .grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
    .grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
    .gap-2 { gap: 0.5rem; }
    .gap-6 { gap: 1.5rem; }
    `
];

module.exports = layout;