const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');
    const themeToggle = document.getElementById('themeToggle');
    const htmlStart = `<!DOCTYPE html><html><head><link rel="stylesheet" href="./dist/breezecss.css"></head><body>`;
    const htmlEnd = '</body></html>';

    function updatePreview() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const html = `
    <!DOCTYPE html>
    <html data-theme="${currentTheme}">
    <head>
      <link rel="stylesheet" href="./dist/breezecss.css">
    </head>
    <body>
      ${editor.value}
    </body>
    </html>
  `;
  const doc = preview.contentDocument || preview.contentWindow.document;
  doc.open();
  doc.write(html);
  doc.close();
}


    editor.addEventListener('input', updatePreview);
    editor.value = "<div class='p-4 bg-blue-100 text-blue-900 rounded text-center'>\n  Hello Breeze!\n</div>";
    updatePreview();

    themeToggle.addEventListener("click", () => {
  const html = document.documentElement;
  const newTheme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);
  updatePreview(); // ← detta behövs!
});
