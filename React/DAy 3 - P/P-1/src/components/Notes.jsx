import React, { useEffect, useState } from "react";

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("notes-MSV"));

    if (data.length > 0) {
      setNotes(data);
    }
  }, []);

  function formSubmit(el) {
    el.preventDefault();

    const title = el.target.elements.title.value;
    const content = el.target.elements.content.value;

    const newNote = { title, content };

    const updatedNotes = [newNote, ...notes];

    setNotes(updatedNotes);

    localStorage.setItem("notes-MSV", JSON.stringify(updatedNotes));
  }

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-neutral-950 via-black to-neutral-900 flex">
      {/* Left Side */}
      <form
        onSubmit={formSubmit}
        className="w-1/3 backdrop-blur-xl bg-white/5 border-r border-white/10 p-12 flex flex-col justify-center space-y-6"
      >
        <h2 className="text-3xl font-bold text-white tracking-tight">
          Create New Note
        </h2>

        <input
          id="title"
          type="text"
          placeholder="Enter Notes Heading"
          className="w-full bg-black text-white placeholder-neutral-400 border border-neutral-600 rounded-2xl px-6 py-4 text-lg outline-none focus:ring-2 focus:ring-neutral-400 focus:border-neutral-400 transition-all duration-300"
        />

        <textarea
          id="content"
          placeholder="Write Details..."
          rows="6"
          className="w-full bg-black text-white placeholder-neutral-400 border border-white/20 rounded-2xl px-6 py-4 text-lg outline-none focus:border-white focus:ring-2 focus:ring-white/30 transition-all duration-300 resize-none"
        ></textarea>

        <button className="w-full bg-white text-black font-semibold py-4 rounded-2xl text-lg hover:bg-neutral-200 active:scale-95 transition-all duration-200 shadow-lg">
          Add Note
        </button>
      </form>

      {/* Right Side */}
      <div className="w-2/3 p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-auto">
        {/* -- cards -- */}

        {notes.map((note, index) => (

        <div
          key={index}
          className="relative rounded-3xl overflow-hidden shadow-xl group"
        >
          <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-3xl flex flex-col justify-between h-64">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {note.title}
              </h3>
              <p className="text-neutral-300 text-sm">{note.content}</p>
            </div>

            <button className="mt-6 bg-white text-black text-sm font-medium py-2 rounded-xl hover:bg-neutral-200 transition">
              Delete
            </button>
          </div>
        </div>
        ))}

        {/* -- cards ended -- */}
      </div>
    </div>
  );
}

export default Notes;
