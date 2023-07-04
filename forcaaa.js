function palavras([a, b, c, d, e]) {
    let words = [a, b, c, d, e];
    let [javascript, programacao, computador, desenvolvimento, html, css, software] = words;

    switch (a) {
        case 'a':
            a = javascript;
            break;
        case 'b':
            a = programacao;
            break;
        case 'c':
            a = computador;
            break;
        case 'd':
            a = desenvolvimento;
            break;
        case 'e':
            a = html;
            break;
        default:
            a = "Unknown word";
            break;
    }

    console.log(a);
}

palavras(["a"]); // Output: "javascript"
palavras(["b"]); // Output: "programacao"
palavras(["c"]); // Output: "computador"