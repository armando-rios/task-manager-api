async function getTasks() {
  const response = await fetch('/api/tasks/');
  const data = await response.json();
  tasks.innerHTML = '';
  tasks.innerHTML = data.map((task) => {
    return `
      <!-- Task Item -->
      <div class="bg-[#313244] p-4 rounded-lg shadow-lg hover:scale-[1.02] transition-transform cursor-pointer"
        onclick="toggleTaskDetails(this)">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <input type="checkbox" class="w-5 h-5 text-green-500 border-2 border-[#A6E3A1] rounded focus:ring-0">
<p class="text-lg">${task.title}</p>
          </div>
          <div class="flex gap-2">
            <button class="bg-[#89B4FA] px-3 py-1 rounded-lg hover:bg-[#74C7EC] transition">Edit</button>
            <button class="bg-[#F38BA8] px-3 py-1 rounded-lg hover:bg-[#E06C75] transition">Delete</button>
          </div>
        </div>
<p class="hidden desc mt-2 text-sm text-[#A6ADC8]">${task.description}</p>
      </div>
  `
  }).join("")
}


const createTask = async (task) => {
  await fetch('/api/tasks/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })
    .then(response => response.json()) // Convertir la respuesta en JSON
    .then(data => console.log('Éxito:', data))
    .catch(error => console.error('Error:', error));
}

document.querySelector("#modalForm").addEventListener("submit", (e) => {
  e.preventDefault()

  const title = document.querySelector("#title")
  const description = document.querySelector("#description")

  const task = {
    title: title.value,
    description: description.value
  }

  createTask(task)

  title.value = ""
  description.value = ""

  getTasks()

  const taskModal = document.getElementById("modal-container");
  taskModal.classList.add("hidden");

})

getTasks()
