"use client";
import React, { useState } from "react";
import { Menu, X, CheckSquare, List, Settings, User, LogOut, Calendar, Star, Clock, Trash, ChevronDown } from "lucide-react";

const TodoLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isProjectsOpen, setIsProjectsOpen] = useState(true);
  const [todos, setTodos] = useState([
    { id: 1, text: "Complete project proposal", completed: false },
    { id: 2, text: "Review team updates", completed: true },
    { id: 3, text: "Prepare presentation", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const projects = [
    { id: 1, name: "Personal", count: 3 },
    { id: 2, name: "Work", count: 5 },
    { id: 3, name: "Shopping", count: 2 },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const SidebarItem = ({ icon: Icon, text, count, active, onClick }) => (
    <div onClick={onClick} className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors duration-200 ${active ? "bg-indigo-600 text-white" : "hover:bg-gray-700"}`}>
      <Icon size={20} />
      <span className="flex-1">{text}</span>
      {count !== undefined && <span className="bg-gray-600 text-white px-2 py-1 rounded-full text-xs">{count}</span>}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-4 shadow-lg z-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={toggleSidebar} className="p-2 hover:bg-indigo-700 rounded">
              <Menu size={24} />
            </button>
            <h1 className="text-2xl font-bold">Todo App</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-indigo-700 rounded">
              <User size={24} />
            </button>
            <button className="p-2 hover:bg-indigo-700 rounded">
              <Settings size={24} />
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Enhanced Sidebar */}
        <aside
          className={`bg-gray-800 text-gray-300 w-72 transition-all duration-300 ease-in-out overflow-y-auto
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            fixed h-[calc(100vh-4rem)] lg:relative lg:translate-x-0 z-10`}>
          <div className="p-4 space-y-6">
            {/* User Profile Section */}
            <div className="flex items-center space-x-3 mb-8 p-3 bg-gray-700 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
                <User size={24} />
              </div>
              <div>
                <h3 className="font-medium">John Doe</h3>
                <p className="text-sm text-gray-400">john@example.com</p>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="space-y-2">
              <SidebarItem icon={List} text="All Tasks" count={todos.length} active={activeCategory === "all"} onClick={() => setActiveCategory("all")} />
              <SidebarItem icon={Star} text="Important" count={3} active={activeCategory === "important"} onClick={() => setActiveCategory("important")} />
              <SidebarItem icon={Calendar} text="Today" count={2} active={activeCategory === "today"} onClick={() => setActiveCategory("today")} />
              <SidebarItem icon={Clock} text="Upcoming" count={5} active={activeCategory === "upcoming"} onClick={() => setActiveCategory("upcoming")} />
            </div>

            {/* Projects Section */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-3 py-2">
                <h3 className="font-medium text-gray-400 uppercase text-sm">Projects</h3>
                <button onClick={() => setIsProjectsOpen(!isProjectsOpen)} className="p-1 hover:bg-gray-700 rounded">
                  <ChevronDown size={16} className={`transform transition-transform duration-200 ${isProjectsOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
              {isProjectsOpen && (
                <div className="space-y-1 ml-2">
                  {projects.map((project) => (
                    <SidebarItem key={project.id} icon={List} text={project.name} count={project.count} active={activeCategory === `project-${project.id}`} onClick={() => setActiveCategory(`project-${project.id}`)} />
                  ))}
                </div>
              )}
            </div>

            {/* Completed and Trash */}
            <div className="space-y-2 pt-4 border-t border-gray-700">
              <SidebarItem icon={CheckSquare} text="Completed" count={todos.filter((t) => t.completed).length} active={activeCategory === "completed"} onClick={() => setActiveCategory("completed")} />
              <SidebarItem icon={Trash} text="Trash" active={activeCategory === "trash"} onClick={() => setActiveCategory("trash")} />
            </div>

            {/* Logout Section */}
            <div className="pt-4 border-t border-gray-700">
              <div className="flex items-center space-x-3 p-3 text-red-400 hover:bg-gray-700 rounded-lg cursor-pointer">
                <LogOut size={20} />
                <span>Logout</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100">
          <div className="max-w-3xl mx-auto">
            {/* Add Todo Form */}
            <form onSubmit={addTodo} className="mb-8">
              <div className="flex gap-4">
                <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Add a new todo..." className="flex-1 p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Add Todo
                </button>
              </div>
            </form>

            {/* Todo List */}
            <div className="space-y-4">
              {todos.map((todo) => (
                <div key={todo.id} className="flex items-center p-4 bg-white rounded shadow">
                  <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} className="h-5 w-5 text-indigo-600 rounded" />
                  <span className={`ml-3 flex-1 ${todo.completed ? "line-through text-gray-400" : ""}`}>{todo.text}</span>
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <X size={20} className="text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="text-center">
          <p>&copy; 2024 Todo App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TodoLayout;
