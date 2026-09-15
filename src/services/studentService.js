const BASE_URL = "http://localhost:5000/api/students";

export function getStudents() {
  return fetch(BASE_URL).then(response => response.json());
}

export function createStudent(student) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  }).then(response => response.json());
}

export function removeStudent(id) {
  return fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
}
export function updateStudent(id, student) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  }).then(response => response.json());
}