"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Todo() {
  const [inputTodo, setInputTodo] = useState("");
  const [todo, setTodo] = useState([
    "belajar nextJS",
    "nyoba buat todo",
    "belajar event handler",
  ]);

  function handleInput(e: any) {
    setInputTodo(e.target.value);
  }

  function addTodo(e: any) {
    e.preventDefault();
    setTodo([...todo, inputTodo]);

    setInputTodo("");
  }

  return (
    <div className="w-3/5 h-96 m-auto mt-16 border-2 border-gray-900 p-4 rounded-2xl  ">
      <h1 className="text-3xl tracking-wide font-bold text-center mb-5">To Do List</h1>
      <form action="" className="flex flex-row gap-2">
        <Input
          type="text"
          placeholder="input your todo.."
          value={inputTodo}
          onChange={handleInput}
        />
        <Button onClick={addTodo}>Add</Button>
      </form>

      <div className="mt-5 h-60 flex flex-col gap-4 overflow-auto">
        {todo.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}
