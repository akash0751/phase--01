const fs = require("fs/promises");
const path = require("path");

const tasksFile = path.join(__dirname, "tasks.json");

async function readTasks() {
    try {
        const data = await fs.readFile(tasksFile, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

async function writeTasks(tasks) {
    await fs.writeFile(tasksFile, JSON.stringify(tasks, null, 2));
}

async function addTask(title, description, dueDate) {
    const tasks = await readTasks();
    const newTask = {
        id: Date.now().toString(),
        title,
        description,
        status: "pending",
        dueDate: dueDate || null
    };
    tasks.push(newTask);
    await writeTasks(tasks);
    console.log("Task added successfully!");
}

async function listTasks(filter) {
    const tasks = await readTasks();
    let filteredTasks = tasks;
    if (filter === "pending" || filter === "completed") {
        filteredTasks = tasks.filter(task => task.status === filter);
    }
    console.table(filteredTasks);
}

async function updateTask(id, updates) {
    let tasks = await readTasks();
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) return console.log("Task not found");
    
    tasks[taskIndex] = { ...tasks[taskIndex], ...updates };
    await writeTasks(tasks);
    console.log("Task updated successfully!");
}

async function deleteTask(id) {
    let tasks = await readTasks();
    tasks = tasks.filter(task => task.id !== id);
    await writeTasks(tasks);
    console.log("Task deleted successfully!");
}

const command = process.argv[2];
const args = process.argv.slice(3);

(async () => {
    switch (command) {
        case "add":
            await addTask(args[0], args[1], args[2]);
            break;
        case "list":
            await listTasks(args[0]);
            break;
        case "update":
            await updateTask(args[0], { title: args[1], description: args[2], status: args[3], dueDate: args[4] });
            break;
        case "delete":
            await deleteTask(args[0]);
            break;
        default:
            console.log("Invalid command");
    }
})();
