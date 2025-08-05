document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('actionBtn');
    const output = document.getElementById('output');
    btn.addEventListener('click', () => {
        output.textContent = "🎉 Button clicked! Welcome to your new web app.";
    });
});
