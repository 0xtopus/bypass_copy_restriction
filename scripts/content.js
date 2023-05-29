let flag = true;
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.code === "KeyM") {
        console.log(document.body.contentEditable);
        document.body.contentEditable = flag;
        flag = !flag;
    }
});


document.addEventListener("keydown", function (event) {

    if (event.ctrlKey && event.code === "KeyC") {
        const codeSnippets = document.getElementsByClassName("prettyprint");

        // 阻止默认行为，避免复制操作
        event.preventDefault();
        // 获取当前选择的文本
        const selectedText = window.getSelection().toString();

        // 执行剪切操作
        document.execCommand("cut");

        // 执行撤销操作
        document.execCommand("undo");

    }
});