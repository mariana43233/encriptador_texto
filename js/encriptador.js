function encriptar(traduccion) {
    const textarea = document.querySelector("#texto");
    const texto = textarea.value;
    const areaDefault = document.querySelector("#default");
    const areaResult = document.querySelector("#result");
    const textoOut = document.querySelector("#texto_out");

    if (texto.trim()) {
        let out = "";

        for (const char of texto) {
            out += traduccion[char] || char;
        }

        areaDefault.classList.add("invisible");
        areaResult.classList.remove("invisible");
        textoOut.value = out;
    } 
}

document.querySelector("#enc").addEventListener("click", function () {
    const traduccion = {
        a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat"
    };
    encriptar(traduccion);
});

document.querySelector("#des").addEventListener("click", function () {
    const traduccion = {
        ai: "a", enter: "e", imes: "i", ober: "o", ufat: "u"
    };
    encriptar(traduccion);
});
