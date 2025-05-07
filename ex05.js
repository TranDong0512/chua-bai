const nameInput = document.getElementById('name')
const math = document.getElementById('math')
const english = document.getElementById('english')
const science = document.getElementById('science')
const errorMess = document.getElementById('errorMess')
const search = document.getElementById('search')
const sort = document.getElementById('sort')
const filter = document.getElementById('filter')
const btnSubmit = document.getElementById('btnSubmit')
const formManager = document.getElementById('formManager')
const studentList = document.getElementById('studentList')

const data = [
    {
        id: 1,
        name: "Toro",
        math: 8,
        english: 7,
        science: 6,
    },
    {
        id: 2,
        name: "Ly Tieu Long",
        math: 4,
        english: 3,
        science: 5,
    },
    {
        id: 3,
        name: "Donal Trump",
        math: 9,
        english: 9,
        science: 10,
    },
];
function generateRandomID(length) {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = 'student-';
    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * characters.length)
        id += characters[index]
    }
    return id
}
let studentLocal = getData()
function getData() {
    return JSON.parse(localStorage.getItem("students") || "[]")
}
function handleLocal(student) {
    localStorage.setItem('students', JSON.stringify(student))
}
function avg(student) {
    return ((+student.math + +student.english + +student.science) / 3).toFixed(2)
}
function rank(student) {
    const average = avg(student)
    if (average >= 8) return 'Giỏi'
    if (average > 6.5 && average < 8) return "Khá"
    if (average >= 5 && average < 6.5) return "Trung bình"
    return "Yếu"
}

function renderUI(students = []) {
    if (!Array.isArray(students)) {
        errorMess.innerHTML = "Lỗi định dạng dữ liệu"
    }
    if (students.length === 0) {
        studentList.innerHTML = "Không có dữ liệu"
    }
    studentList.innerHTML = ``
    students.forEach((student) => {
        const average = avg(student)
        const rankStudent = rank(student)
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.math}</td>
        <td>${student.english}</td>
        <td>${student.science}</td>
        <td>${average}</td>
        <td>${rankStudent}</td>
        <div>
            <button type="button" class="btn btn-danger" onclick="deleteStudent('${student.id}')">Xóa</button>
            <button type="button" class="btn btn-primary">Cập nhật điểm</button>
        </div>
        `
        studentList.appendChild(tr)
    })
}
function addStudent(event) {
    event.preventDefault()
    studentLocal = getData()

    const student = {
        id: generateRandomID(3),
        name: nameInput.value.trim(),
        math: math.value,
        english: english.value,
        science: science.value
    }
    handleLocal([student, ...studentLocal])
    renderUI(getData())
}
function searchStudents() {
    studentLocal = getData()
    const valueSearch = search.value.toLowerCase()
    console.log(valueSearch);

    const dataSearch = studentLocal.filter(student =>
        student.name.toLowerCase().includes(valueSearch)
    )
    console.log(dataSearch);
    renderUI(dataSearch)
}

function sortStudents() {
    const valueSort = sort.value
    studentLocal = getData()
    if (valueSort === 'avg-desc') {
        studentLocal.sort((a, b) => avg(b) - avg(a))
    }
    if (valueSort === 'avg-asc') {
        studentLocal.sort((a, b) => avg(a) - avg(b))
    }
    else {
        studentLocal = studentLocal
    }
    renderUI(studentLocal)
}
function filterStudents() {
    const filterValue = filter.value
    studentLocal = getData()
    if (!filterValue) {
        renderUI();
        return;
    }
    const filtered = studentLocal.filter(student =>
        rank(student) === filterValue
    );
    renderUI(filtered);
}

formManager.addEventListener('submit', addStudent)
search.addEventListener('change', searchStudents)
renderUI(getData())

