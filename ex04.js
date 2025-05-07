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

function generateRandomID(length) {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = 'student-';
    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * characters.length)
        id += characters[index]
    }
    return id
}

function getData() {
    return JSON.parse(localStorage.getItem('students') || "[]")
}
// lưu dữ liệu vào local
function handleLocal(student) {
    localStorage.setItem('students', JSON.stringify(student))
}
function reset() {
    nameInput.value = ''
    math.value = ''
    english.value = ''
    science.value = ''
}
function handleError(nameInput, math, english, science) {
    console.log(nameInput, math, english, science);

    if (!nameInput || isNaN(math) || isNaN(english) || isNaN(science) ||
        math < 0 || math > 10 || english < 0 || english > 10 || science < 0 || science > 10) {
        return false;
    }
    return true
}
let studentLocal = getData()

function averageStudent(student) {
    return ((+student.math + +student.english + +student.science) / 3).toFixed(2)
}
function rank(student) {
    const point = averageStudent(student)
    if (point >= 8) return "Giỏi"
    if (point > 6.5 && point < 8) return "Khá"
    if (point >= 5 && point < 6.5) return "Trung bình"
    return "Yếu"
}
function renderUI(dataList) {
    if (!Array.isArray(dataList)) {
        handleErrorMessage("Sai dinh dang du lieu")
    }
    if (dataList.length === 0) {
        studentList.innerHTML = "Khong co du lieu"
    }
    studentList.innerHTML = ``
    dataList.forEach((student) => {
        const average = averageStudent(student)
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
    const error = handleError(nameInput.value, math.value, english.value, science.value)
    if (!error) {
        errorMess.style.display = 'block';
        errorMess.textContent = 'Please fill all fields with valid scores (0-10)';
        return
    }

    const student = {
        id: generateRandomID(3),
        name: nameInput.value.trim(),
        math: math.value,
        english: english.value,
        science: science.value
    }
    handleLocal([student, ...studentLocal])
    reset()
    renderUI(getData())
}
function deleteStudent(idStudent) {
    console.log(idStudent);
    studentLocal = getData()
    studentLocal = studentLocal.filter((student) => student.id !== idStudent)
    handleLocal([...studentLocal])
    renderUI(getData())
}

function searchStudents() {
    studentLocal = getData()
    const value = search.value.toLowerCase()
    const filter = studentLocal.filter(student =>
        student.name.toLowerCase().includes(value)
    )
    renderUI(filter)
}

function sortAvg() {
    const sortValue = sort.value
    studentLocal = getData()
    if (sortValue === "avg-desc") {
        studentLocal.sort((a, b) => averageStudent(b) - averageStudent(a))
    }
    if (sortValue === "avg-asc") {
        studentLocal.sort((a, b) => averageStudent(a) - averageStudent(b))
    }
    renderUI(studentLocal)
}

function filterByRank() {
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
sort.addEventListener('click', sortAvg)
filter.addEventListener('click', filterByRank)
renderUI(getData())