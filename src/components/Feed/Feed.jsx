import React from "react";
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  Newspaper,
  Award,
  Calendar as CalendarIcon,
  User,
  Settings,
  Heart,
  MessageCircle,
  MoreHorizontal,
} from "lucide-react";

export default function Feed() {
  return (
    <div className="flex min-h-screen bg-[#f5f6fa] text-gray-900">

      {/* ================= LEFT SIDEBAR ================= */}
      <aside className="w-64 bg-[#0b1445] text-white p-6 flex flex-col gap-8">

        {/* HRMS Logo */}
        <h1 className="text-2xl font-bold tracking-wide">HRMS</h1>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/80?img=47"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <div>
            <p className="font-semibold">Maria</p>
            <p className="text-xs text-gray-300">HR Manager</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 text-sm space-y-4">
          <p className="flex items-center gap-3 hover:text-gray-300 cursor-pointer">
            <LayoutDashboard size={18} /> Dashboard
          </p>

          <p className="flex items-center gap-3 hover:text-gray-300 cursor-pointer">
            <MessageSquare size={18} /> Chat
          </p>

          <p className="flex items-center gap-3 hover:text-gray-300 cursor-pointer">
            <Users size={18} /> Employees
          </p>

          <p className="flex items-center gap-3 bg-white text-[#0b1445] px-3 py-2 rounded-lg font-semibold">
            <Newspaper size={18} /> Feed
          </p>

          <p className="flex items-center gap-3 hover:text-gray-300 cursor-pointer">
            <Award size={18} /> Recognition
          </p>

          <p className="flex items-center gap-3 hover:text-gray-300 cursor-pointer">
            <CalendarIcon size={18} /> Event
          </p>

          <p className="flex items-center gap-3 hover:text-gray-300 cursor-pointer">
            <User size={18} /> Profile
          </p>

          <p className="flex items-center gap-3 hover:text-gray-300 cursor-pointer">
            <Settings size={18} /> Settings
          </p>
        </nav>
      </aside>

      {/* ================= MAIN FEED CONTENT ================= */}
      <main className="flex-1 px-10 py-8">

        <h1 className="text-3xl font-semibold mb-6">Feed</h1>

        {/* FEED CARD 1 */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">

          {/* Header */}
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/40?img=13"
                className="w-10 h-10 rounded-full"
              />
              <p className="text-sm">
                <span className="font-semibold">Martin Swanson</span> gave{" "}
                <span className="font-bold text-[#4a3aff]">130 points</span> to{" "}
                <span className="font-semibold">Rosia Thorpe</span>
              </p>
            </div>
            <MoreHorizontal className="text-gray-400" />
          </div>

          {/* Message Card */}
          <div className="bg-[#2a1e74] text-white p-6 rounded-lg mt-4">
            <p className="text-lg leading-relaxed">
              Thanks for leading one of the most productive design sprints ever,
              Rosia. Great win for the team and even greater outcome for the challenge.
            </p>

            <div className="flex justify-between items-center mt-5">
              <div className="flex gap-3">
                <span className="bg-white text-[#2a1e74] px-3 py-1 rounded-md text-sm font-semibold">
                  #BornLeader
                </span>
                <span className="bg-white text-[#2a1e74] px-3 py-1 rounded-md text-sm font-semibold">
                  #Goodworker
                </span>
              </div>

              <p className="text-3xl font-bold">130 Points</p>
            </div>
          </div>

          {/* Likes + Comments */}
          <div className="flex gap-6 mt-4 text-gray-500 ml-12">
            <p className="flex items-center gap-2">
              <Heart size={18} /> 8
            </p>
            <p className="flex items-center gap-2">
              <MessageCircle size={18} /> 3
            </p>
          </div>

          {/* Comment Input */}
          <div className="flex items-center gap-3 mt-3">
            <img
              src="https://i.pravatar.cc/40?img=15"
              className="w-9 h-9 rounded-full"
            />
            <input
              placeholder="Write a comment"
              className="w-full bg-gray-100 rounded-lg p-3 text-sm outline-none"
            />
          </div>

          {/* Clarence Gale */}
          <div className="mt-4 p-4 border rounded-lg bg-gray-50 text-sm flex gap-3">
            <img
              src="https://i.pravatar.cc/40?img=18"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">Clarence Gale</p>
              <p>
                Had an amazing experience working on the sprint and Rosia was a great
                manager. Learned a lot from her.
              </p>
            </div>
          </div>
        </div>

        {/* FEED CARD 2 */}
        <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40?img=20"
              className="w-10 h-10 rounded-full"
            />
            <p className="text-sm">
              <span className="font-bold">OM Raut</span> &nbsp;+6 more wished Om a
              happy birthday.
              <span className="font-semibold text-[#2a1e74] cursor-pointer">
                &nbsp;Wish him now!
              </span>
            </p>
          </div>

          <button className="bg-[#2a1e74] text-white px-6 py-2 rounded-lg font-semibold">
            SEND
          </button>
        </div>

        {/* Messages + Complaints */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold mb-2">Messages</h2>
            <p className="text-sm text-gray-600 mb-4">Message from Manager</p>
            <button className="bg-[#2a1e74] text-white px-4 py-1 rounded">Reply</button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold mb-2">Complaints</h2>
            <p className="text-sm text-gray-600 mb-4">Message to Office</p>
            <button className="bg-[#2a1e74] text-white px-4 py-1 rounded">Send</button>
          </div>
        </div>
      </main>

      {/* ================= RIGHT SIDEBAR ================= */}
      <aside className="w-[350px] p-6 bg-white shadow-lg border-l">

        {/* POINTS */}
        <div className="bg-[#2a1e74] text-white p-6 rounded-xl mb-8">
          <p>Your Points</p>
          <h1 className="text-4xl font-bold">1500</h1>

          <div className="flex gap-3 mt-4">
            <button className="bg-white text-[#2a1e74] px-6 py-1 rounded font-semibold">
              SEND
            </button>
            <button className="bg-white text-[#2a1e74] px-6 py-1 rounded font-semibold">
              REDEEM
            </button>
          </div>
        </div>

        {/* MONTH */}
        <h2 className="text-xl font-semibold">March</h2>

        {/* MON 7 CALENDAR HEADER */}
        <div className="flex gap-2 mt-4 mb-4">
          <div className="bg-[#2a1e74] text-white px-4 py-2 rounded-lg text-center">
            <p className="text-xs font-semibold">MON</p>
            <p className="text-xl font-bold">7</p>
          </div>

          <div className="bg-gray-100 px-4 py-2 rounded-lg text-center">
            <p className="text-xs text-gray-500">TUE</p>
            <p className="font-semibold">8</p>
          </div>

          <div className="bg-gray-100 px-4 py-2 rounded-lg text-center">
            <p className="text-xs text-gray-500">WED</p>
            <p className="font-semibold">9</p>
          </div>

          <div className="bg-gray-100 px-4 py-2 rounded-lg text-center">
            <p className="text-xs text-gray-500">THU</p>
            <p className="font-semibold">10</p>
          </div>

          <div className="bg-gray-100 px-4 py-2 rounded-lg text-center">
            <p className="text-xs text-gray-500">FRI</p>
            <p className="font-semibold">11</p>
          </div>
        </div>

        {/* EVENTS LIST */}
        <div className="space-y-4">

          <div className="border p-3 rounded-lg shadow-sm">
            <p className="text-sm font-semibold">Birthdays</p>
            <div className="flex -space-x-2 mt-2">
              {[10,11,12,13].map((img) => (
                <img
                  key={img}
                  src={`https://i.pravatar.cc/40?img=${img}`}
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
          </div>

          <div className="border p-3 rounded-lg shadow-sm">
            <p className="text-sm font-semibold">Work Anniversary</p>
            <div className="flex -space-x-2 mt-2">
              {[14,15,16,17,18].map((img) => (
                <img
                  key={img}
                  src={`https://i.pravatar.cc/40?img=${img}`}
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
          </div>

          <div className="border p-3 rounded-lg shadow-sm">
            <p className="text-sm font-semibold">Weekly Review Meeting</p>
            <p className="text-xs text-gray-500">11:00 AM – 12:00 PM</p>
            <div className="flex -space-x-2 mt-2">
              {[19,20,21,22].map((img) => (
                <img
                  key={img}
                  src={`https://i.pravatar.cc/40?img=${img}`}
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
          </div>

          <div className="border p-3 rounded-lg shadow-sm">
            <p className="text-sm font-semibold">Client Meeting - RAB</p>
            <p className="text-xs text-gray-500">01:00 PM – 03:00 PM</p>
            <div className="flex -space-x-2 mt-2">
              {[23,24,25,26,27].map((img) => (
                <img
                  key={img}
                  src={`https://i.pravatar.cc/40?img=${img}`}
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
          </div>
        </div>

        {/* UPCOMING EVENTS */}
        <div className="mt-10 p-6 bg-gray-100 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Upcoming Events</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <p>Team Building Workshop</p>
              <p className="font-bold">13 Oct</p>
            </div>

            <div className="flex justify-between">
              <p>Employee of the Month Award</p>
              <p className="font-bold">20 Oct</p>
            </div>

            <div className="flex justify-between">
              <p>Diversity & Inclusion Seminar</p>
              <p className="font-bold">5 Nov</p>
            </div>
          </div>

          <button className="mt-4 text-[#2a1e74] font-semibold text-sm">More…</button>
        </div>
      </aside>
    </div>
  );
}
