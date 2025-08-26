"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState } from "react"

export default function ConvergencePage() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-[#4a3c5a]" : "bg-white"}`}>
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image src="/convergence-logo.png" alt="Convergence Logo" width={40} height={40} className="rounded" />
          <span className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Convergence</span>
        </div>
        <nav className="flex items-center gap-6">
          <a
            href="#game"
            className={`${isDarkMode ? "text-white hover:text-orange-400" : "text-gray-900 hover:text-orange-500"} transition-colors`}
          >
            The Game
          </a>
          <a
            href="#seasons"
            className={`${isDarkMode ? "text-white hover:text-orange-400" : "text-gray-900 hover:text-orange-500"} transition-colors`}
          >
            Past Seasons
          </a>
          <a
            href="#testimonials"
            className={`${isDarkMode ? "text-white hover:text-orange-400" : "text-gray-900 hover:text-orange-500"} transition-colors`}
          >
            Testimonials
          </a>
          <Button
            onClick={toggleTheme}
            variant="outline"
            size="sm"
            className={`rounded-full ${
              isDarkMode
                ? "border-white/30 text-white hover:bg-white/10 bg-transparent"
                : "border-gray-300 text-gray-900 hover:bg-gray-100 bg-white"
            }`}
          >
            {isDarkMode ? "☀️" : "🌙"}
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">Join Season 3</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <h1 className={`text-6xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-4`}>Convergence</h1>
        <p className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} italic mb-20`}>
          life changing events for life changing people
        </p>

        <div className="flex gap-8 mb-16">
          <div className="flex flex-col items-center">
            <div
              className={`w-16 h-16 ${isDarkMode ? "bg-white/20" : "bg-gray-100"} rounded-full flex items-center justify-center mb-2`}
            >
              <span className="text-2xl">👤</span>
            </div>
            <span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>50+ new friends</span>
          </div>
          <div className="flex flex-col items-center">
            <div
              className={`w-16 h-16 ${isDarkMode ? "bg-white/20" : "bg-gray-100"} rounded-full flex items-center justify-center mb-2`}
            >
              <span className="text-2xl">🏆</span>
            </div>
            <span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>2 epic seasons</span>
          </div>
          <div className="flex flex-col items-center">
            <div
              className={`w-16 h-16 ${isDarkMode ? "bg-white/20" : "bg-gray-100"} rounded-full flex items-center justify-center mb-2`}
            >
              <span className="text-2xl">📍</span>
            </div>
            <span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>10+ universities</span>
          </div>
        </div>

        <div className="flex gap-4">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3">Join the Fun</Button>
          <Button
            variant="outline"
            className={`rounded-full px-8 py-3 ${
              isDarkMode
                ? "border-white/30 text-white hover:bg-white/10 bg-transparent"
                : "border-gray-300 text-gray-900 hover:bg-gray-100 bg-white"
            }`}
          >
            Watch Season 2
          </Button>
        </div>
      </section>

      {/* The Game Section */}
      <section id="game" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-8`}>The Game</h2>
          <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-12 leading-relaxed`}>
            Convergence is a real-world social game where participants complete challenges, explore places, and make
            friends. Previous seasons have been themed around Tag, Capture The Flag, and Turf Wars.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className={`flex items-center gap-3 p-4 ${isDarkMode ? "bg-white/10" : "bg-gray-50"} rounded-lg`}>
              <span className="text-2xl">🏃‍♂️</span>
              <div className="text-left">
                <h3 className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Run around cities</h3>
                <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Real locations, silly challenges
                </p>
              </div>
            </div>
            <div className={`flex items-center gap-3 p-4 ${isDarkMode ? "bg-white/10" : "bg-gray-50"} rounded-lg`}>
              <span className="text-2xl">🤝</span>
              <div className="text-left">
                <h3 className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Make friends</h3>
                <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Strangers → besties</p>
              </div>
            </div>
            <div className={`flex items-center gap-3 p-4 ${isDarkMode ? "bg-white/10" : "bg-gray-50"} rounded-lg`}>
              <span className="text-2xl">🎯</span>
              <div className="text-left">
                <h3 className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Complete tasks</h3>
                <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Think escape room + tag</p>
              </div>
            </div>
            <div className={`flex items-center gap-3 p-4 ${isDarkMode ? "bg-white/10" : "bg-gray-50"} rounded-lg`}>
              <span className="text-2xl">🗺</span>
              <div className="text-left">
                <h3 className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Cool places</h3>
                <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Toronto, Waterloo, more soon
                </p>
              </div>
            </div>
          </div>

          <blockquote className={`text-lg italic ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            "started as strangers, ended as best friends" — season 2
          </blockquote>
        </div>
      </section>

      {/* Past Seasons Section */}
      <section id="seasons" className={`py-20 px-6 ${isDarkMode ? "bg-[#3d3349]" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-12 text-center`}>
            Past Seasons
          </h2>

          {/* Season 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className={`${isDarkMode ? "bg-white/10" : "bg-white"} p-8 rounded-lg shadow-sm`}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🏫</span>
                <h3 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Season 1: Waterloo Experiment
                </h3>
              </div>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} italic mb-6`}>
                {"Inagural attempt: elaborate tag game."}
              </p>

              <div className="flex gap-4 mb-6">
                <span
                  className={`px-3 py-1 ${isDarkMode ? "bg-white/20" : "bg-gray-100"} rounded-full text-sm ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  UW Campus
                </span>
                <span
                  className={`px-3 py-1 ${isDarkMode ? "bg-white/20" : "bg-gray-100"} rounded-full text-sm ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  March 2025
                </span>
                <span
                  className={`px-3 py-1 ${isDarkMode ? "bg-white/20" : "bg-gray-100"} rounded-full text-sm ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  25 people
                </span>
              </div>

              <h4 className={`font-semibold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                What Made It Special
              </h4>
              <ul className={`space-y-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                <li>• CS majors left their rooms</li>
                <li>• Running around campus</li>
                <li>• Discord Bot for challenges</li>
                <li>• Custom medals and prizes</li>
              </ul>
            </div>
            <div
              className={`${isDarkMode ? "bg-white/10" : "bg-white"} p-8 rounded-lg shadow-sm flex items-center justify-center`}
            >
              <p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} italic`}>season 1 pics coming soon 📸</p>
            </div>
          </div>

          {/* Season 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div
              className={`${isDarkMode ? "bg-white/10" : "bg-white"} p-8 rounded-lg shadow-sm flex items-center justify-center lg:order-1`}
            >
              <p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} italic`}>season 2 pics coming soon 📸</p>
            </div>
            <div className={`${isDarkMode ? "bg-white/10" : "bg-white"} p-8 rounded-lg shadow-sm lg:order-2`}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🏙</span>
                <h3 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Season 2: Toronto Takeover
                </h3>
              </div>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} italic mb-6`}>
                {"Took over Downtown Toronto\n\n"}{" "}
              </p>

              <div className="flex gap-4 mb-6">
                <span
                  className={`px-3 py-1 ${isDarkMode ? "bg-white/20" : "bg-gray-100"} rounded-full text-sm ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Financial District
                </span>
                <span
                  className={`px-3 py-1 ${isDarkMode ? "bg-white/20" : "bg-gray-100"} rounded-full text-sm ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  August 2025
                </span>
                <span
                  className={`px-3 py-1 ${isDarkMode ? "bg-white/20" : "bg-gray-100"} rounded-full text-sm ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  50 players
                </span>
              </div>

              <h4 className={`font-semibold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                What Made It Special
              </h4>
              <ul className={`space-y-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                <li>• 28 challenges across the city</li>
                <li>• Web app that worked</li>
                <li>• Custom shirts and stickers</li>
                <li>• 48 water bottles + Costco snacks</li>
              </ul>
            </div>
          </div>

          {/* Season 3 */}
          <div className="text-center">
            <div
              className={`inline-block ${isDarkMode ? "bg-white/10" : "bg-white"} p-8 rounded-full shadow-sm border-2 border-orange-400/50`}
            >
              <h3 className="text-xl font-bold text-orange-400">Season 3: Coming Soon! 🚀</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-12 text-center`}>
            Testimonials
          </h2>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">80+</div>
              <div className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>New Friends Made</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">10</div>
              <div className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Universities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
              <div className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Had Fun</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">0</div>
              <div className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Regrets</div>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`${isDarkMode ? "bg-white/10" : "bg-gray-50"} p-6 rounded-lg`}>
              <div className="text-2xl mb-3">🤝</div>
              <p className={`italic ${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-3`}>
                "came not knowing anyone, left with 20 new friends"
              </p>
              <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>— CS, UofT</p>
            </div>
            <div className={`${isDarkMode ? "bg-white/10" : "bg-gray-50"} p-6 rounded-lg`}>
              <div className="text-2xl mb-3">🏆</div>
              <p className={`italic ${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-3`}>
                "perfect mix of chaos and friendship"
              </p>
              <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>— engineering, McMaster</p>
            </div>
            <div className={`${isDarkMode ? "bg-white/10" : "bg-gray-50"} p-6 rounded-lg`}>
              <div className="text-2xl mb-3">🌞</div>
              <p className={`italic ${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-3`}>
                "got CS majors outside. revolutionary."
              </p>
              <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>— Waterloo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className={`py-20 px-6 ${isDarkMode ? "bg-[#3d3349]" : "bg-gray-50"}`}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className={`max-w-xl text-2xl font-semibold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Get notified when we announce the next season
          </h2>
          <div className="flex gap-2 mb-4">
            <Input
              type="email"
              placeholder="your.email@university.edu"
              className={`flex-1 rounded-full ${
                isDarkMode
                  ? "border-white/30 bg-white/10 text-white placeholder:text-gray-400"
                  : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-500"
              }`}
            />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">notify me 🦆</Button>
          </div>
          <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            no spam, just game announcements
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center">
        <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-6 max-w-4xl mx-auto`}>
          A silly little game between friends that somehow turned into epic adventures across North America 🦆
        </p>
        <div
          className={`flex flex-col md:flex-row justify-between items-center text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"} max-w-4xl mx-auto`}
        >
          <p>Made with ❤️ by a bunch of engineering nerds.</p>
          <p>Special thanks to Kenny Huang, Shane Chen, Max Sun for the app magic! ✨</p>
        </div>
      </footer>
    </div>
  )
}
