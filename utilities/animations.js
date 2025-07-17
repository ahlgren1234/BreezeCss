const animations = [
    `
    .fade-in {
        opacity: 0;
        animation: fadeIn 0.5s ease-in forwards;
    }
    @keyframes fadeIn {
        to { opacity: 1; }
    }
    `,
    `
    .slide-up {
        transform: translateY(20px);
        opacity: 0;
        animation: slideUp 0.4s ease-out forwards;
    }
    @keyframes slideUp {
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    `,
    `
    .pulse {
        animation: pulse 2s infinite;
    }
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }
    `
];

module.exports = animations;
