const grid = document.querySelector("#grid-demo");
const item = grid.querySelector(".item1");
const output = document.querySelector("#code-output");
const description = document.querySelector("#code-description");
const choices = document.querySelectorAll(".choice");

const modes = {
    start: {
        className: "mode-start",
        value: "grid-row: 1 / 3;",
        itemLabel: "span 2",
        description: "Ô 1 bắt đầu ở hàng 1 và kết thúc tại đường kẻ 3 — chiếm hai hàng."
    },
    move: {
        className: "mode-move",
        value: "grid-row: 2 / 4;",
        itemLabel: "row 2 → 4",
        description: "Ô 1 bắt đầu ở đường kẻ 2 và kết thúc tại đường kẻ 4."
    },
    span: {
        className: "mode-span",
        value: "grid-row: span 2;",
        itemLabel: "span 2",
        description: "Ô 1 trải qua hai hàng; Grid tự chọn vị trí bắt đầu còn trống."
    }
};

for (const choice of choices) {
    choice.addEventListener("click", () => {
        const mode = modes[choice.dataset.mode];
        grid.classList.remove("mode-start", "mode-move", "mode-span");
        grid.classList.add(mode.className);
        output.textContent = mode.value;
        item.querySelector("span").textContent = mode.itemLabel;
        description.textContent = mode.description;

        for (const button of choices) {
            const isSelected = button === choice;
            button.classList.toggle("is-selected", isSelected);
            button.setAttribute("aria-pressed", String(isSelected));
        }
    });
}
