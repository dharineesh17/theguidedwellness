// Disable Script Start
// Disable right-click context menu
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Disable text selection
document.addEventListener('selectstart', function(event) {
    event.preventDefault();
});

// Disable Ctrl+C (Copy)
document.addEventListener('copy', function(event) {
    event.preventDefault();
});

// Disable Ctrl+V (Paste)
document.addEventListener('paste', function(event) {
    event.preventDefault();
});



function preventF12() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.onkeydown = function (e) {
        if (e.key == "F12") { // F12 key
            e.preventDefault();
        }
    };
}
preventF12(); // TODO: Remove this line to enable F12 key functionality
// Disable Script End 