function highestAvgSalary(employees) {
    if (employees.size == 0) {
        return "Xatolik: employees seti bo'sh!"
    }

    const departments = {}
    for (const emp of employees) {
        if (emp.department === "HR" || emp.department === "IT") {
            if (!departments[emp.department]) {
                departments[emp.department] = []
            }
            departments[emp.department].push(emp.salary)
        }
    }

    const averages = Object.keys(departments).map(dep => {
        const salaries = departments[dep]
        const avg = Math.floor(salaries.reduce((a, b) => a + b, 0) / salaries.length)
        return { department: dep, average: avg }
    })

    const maxAvg = Math.max(...averages.map(d => d.average))

    return averages.filter(d => d.average == maxAvg)
}


const employees = new Set([
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
])

console.log(highestAvgSalary(employees))