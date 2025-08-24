const students = new Set([
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "Jack", scores: [100, 100, 100] }
])

function topStudents(students) {
    const withAverages = [...students].map(student => {
        const sum = student.scores.reduce((a, b) => a + b, 0)
        const avg = sum / student.scores.length
        return { name: student.name, average: avg }
    })

    const maxAvg = Math.max(...withAverages.map(s => s.average))

    return withAverages.filter(s => s.average == maxAvg)
}

console.log(topStudents(students))