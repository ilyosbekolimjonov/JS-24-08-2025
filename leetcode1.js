function climbStairs(n) {
    if (n <= 2) return n

    let a = 1, b = 2     
     
    for (let i = 3; i <= n; i++) {
        const c = a + b     
        a = b
        b = c
    }
    return b
}


const n = +prompt("n kiriting (1..45):")
if (n < 1 || n > 45)
    alert("Xatolik: n 1..45 oraliqda butun bo'lishi kerak.") 
else
    alert(climbStairs(n))