function fib(n) {
    if (n == 0) return 0
    if (n == 1) return 1

    let a = 0, b = 1 
    for (let i = 2; i <= n; i++) {
        const c = a + b 
        a = b
        b = c
    }
    return b
}

const n = +prompt("n kiriting (0..30):")
if (n < 0 || n > 30) 
    alert("Xatolik: n 0..30 oraliqda butun bo'lishi kerak.")
else 
    alert(fib(n))