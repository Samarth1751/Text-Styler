function changeFont() {
    const fontSelect = document.getElementById("fontSelect");
    const selectedFont = fontSelect.options[fontSelect.selectedIndex].value;
    document.getElementById("outputText").style.fontFamily = selectedFont;
}

function changeFontSize() {
    const fontSizeInput = document.getElementById("fontSize");
    const selectedSize = fontSizeInput.value + "px";
    document.getElementById("outputText").style.fontSize = selectedSize;
}

function changeFontColor() {
    const fontColorInput = document.getElementById("fontColor");
    const selectedColor = fontColorInput.value;
    document.getElementById("outputText").style.color = selectedColor;
}

document.getElementById("inputText").addEventListener("input", function () {
    const inputText = document.getElementById("inputText").value;
    document.getElementById("outputText").innerText = inputText;
});

var outputHistory = [];
var currentHistoryIndex = -1;

function applyChanges() {
    changeFont();
    changeFontSize();
    changeFontColor();
    saveToHistory();
}

function saveToHistory() {
    var outputText = document.getElementById('outputText').innerHTML;
    outputHistory.push(outputText);
    currentHistoryIndex = outputHistory.length - 1;
}

function undo() {
    if (currentHistoryIndex > 0) {
        currentHistoryIndex--;
        document.getElementById('outputText').innerHTML = outputHistory[currentHistoryIndex];
    }
}

function redo() {
    if (currentHistoryIndex < outputHistory.length - 1) {
        currentHistoryIndex++;
        document.getElementById('outputText').innerHTML = outputHistory[currentHistoryIndex];
    }
}