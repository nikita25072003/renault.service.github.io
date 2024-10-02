document.addEventListener('DOMContentLoaded', function() {
    // Обработчик кликов по всему документу
    document.addEventListener('mousedown', function(event) {
        const selection = window.getSelection();
        // Если выделение существует и клик не по выделенному тексту
        if (selection && !selection.isCollapsed) {
            const selectionRange = selection.getRangeAt(0);
            if (!selectionRange.intersectsNode(event.target)) {
                // Если клик вне выделенного текста
                selection.removeAllRanges();
            }
        }
    });
});