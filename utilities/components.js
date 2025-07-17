const components = [
    `
    .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 1rem;
        border-radius: 0.375rem;
        background-color: var(--color-primary);
        color: white;
        font-weight: 600;
        transition: background-color 0.2s;
    }
    .btn:hover {
        background-color: var(--color-primary-dark, #005bb5);
    }
    .btn-outline {
        background: transparent;
        border: 2px solid var(--color-primary);
        color: var(--color-primary);
    }
    .btn-outline:hover {
        background-color: var(--color-primary);
        color: white;
    }
    `,
    `
    .card {
        background-color: white;
        border-radius: 1rem;
        padding: 1.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    }
    `,
    `
    .badge {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem;
        border-radius: 9999px;
        background-color: var(--color-primary);
        color: white;
    }
    `
];

module.exports = components;
