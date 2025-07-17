const forms = [
    `
    .input {
        padding: 0.5rem 0.75rem;
        border-radius: 0.375rem;
        border: 1px solid #ccc;
        font-size: 1rem;
        width: 100%;
    }
    .input:focus {
        outline: none;
        border-color: var(--color-primary);
        box-shadow: 0 0 0 2px var(--color-primary-light, #cfe3ff);
    }
    .select, .textarea {
        @apply .input;
    }
    `
];

module.exports = forms;