let buttons = document.querySelectorAll("button");
let inp = document.querySelector("input");

let history = JSON.parse(localStorage.getItem("cal") || "[]");

for (let btn of buttons) {
    btn.addEventListener("click", () => {
        let text = btn.innerText;

        if (text === "C") {
            inp.value = "";
        } else if (text === "=") {
            try {
                inp.value = eval(inp.value);
                history.push("=" + inp.value);
                localStorage.setItem("cal", JSON.stringify(history));
            } catch (err) {
                inp.value = "Error";
            }
        } else {
            inp.value += text;
            history.push(inp.value);
            localStorage.setItem("cal", JSON.stringify(history));
        }
    });
}
