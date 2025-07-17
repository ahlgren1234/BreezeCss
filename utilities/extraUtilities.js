const extraUtilities = [
    `
    .container {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1rem;
        padding-right: 1rem;
        max-width: 1280px;
    }
    `,
    `
    .aspect-video {
        aspect-ratio: 16 / 9;
    }
    .aspect-square {
        aspect-ratio: 1 / 1;
    }
    `,
    `
    .line-clamp-1 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .line-clamp-3 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    `,
    `
    .ring {
        box-shadow: 0 0 0 2px var(--color-primary);
    }
    .ring-2 {
        box-shadow: 0 0 0 4px var(--color-primary);
    }
    .ring-offset {
        box-shadow: 0 0 0 2px white, 0 0 0 4px var(--color-primary);
    }
    `,
    `
    .z-0 { z-index: 0; }
    .z-10 { z-index: 10; }
    .z-50 { z-index: 50; }
    `,
    `
    .backdrop-blur {
        backdrop-filter: blur(8px);
    }
    `,
    `
    .filter-grayscale {
        filter: grayscale(1);
    }
    .filter-invert {
        filter: invert(1);}
    `,
    `
    .blend-multiply {
        mix-blend-mode: multiply;
    }
    .blend-overlay {
        mix-blend-mode: overlay;
    }
    `,
    `
    .hidden { display: none; }
    .block { display: block; }
    .inline-block { display: inline-block; }
    `,
    `
    .cursor-pointer { cursor: pointer; }
    `,
    `
    .overflow-hidden { overflow: hidden; }
    .overflow-scroll { overflow: scroll; } 
    `,
    `
    .scroll-smooth { scroll-behavior: smooth; }
    `,
    `
    .active\\:scale-95:active {
        transform: scale(0.95);
    }
    `,
    `
    .group:hover .group-hover\\:opacity-100 {
        opacity: 1;
    }
    .group-hover\\:opacity-100 {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    `
];

module.exports = extraUtilities;
