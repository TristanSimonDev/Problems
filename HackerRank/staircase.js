function staircase(n) {
    for (let i = 1; i <= n; i++) { 
        let string = " ".repeat(n - i) + "#".repeat(i);
        console.log(string);
    }
}

staircase(6);
