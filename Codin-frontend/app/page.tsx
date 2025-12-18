"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Terminal, Zap, Target, BarChart3, Github, Code2 } from "lucide-react"

const codeSnippets = {
  java: `public class QuickSort {
    public static void sort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            sort(arr, low, pi - 1);
            sort(arr, pi + 1, high);
        }
    }
}`,
  python: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`,
}

export default function CodinLanding() {
  const [typedText, setTypedText] = useState("")
  const [currentSnippet, setCurrentSnippet] = useState("java")
  const fullText = "Measure How Fast You Code."
  const [cursorVisible, setCursorVisible] = useState(true)

  // Typing animation for headline
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [typedText])

  // Cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  // Switch between code snippets
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippet((prev) => (prev === "java" ? "python" : "java"))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-cyan-500/20 backdrop-blur-sm">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-mono">Codin v1.0</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-balance">
            {typedText}
            <span
              className={`inline-block w-1 h-20 md:h-32 bg-cyan-400 ml-2 ${cursorVisible ? "opacity-100" : "opacity-0"}`}
            />
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto text-balance">
            Codin tracks real coding speed using <span className="text-cyan-400 font-mono">CPM</span> — CodeLines Per
            Minute.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/60 hover:scale-105"
            >
              Start Typing
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 px-8 py-6 text-lg rounded-xl backdrop-blur-sm bg-transparent"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </div>

          {/* Animated Code Block */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000" />
              <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-zinc-800 overflow-hidden">
                <div className="flex items-center gap-2 px-6 py-4 border-b border-zinc-800 bg-zinc-950/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-sm text-gray-500 font-mono">
                      {currentSnippet === "java" ? "QuickSort.java" : "binary_search.py"}
                    </span>
                  </div>
                  <div className="text-xs text-cyan-400 font-mono bg-cyan-500/10 px-3 py-1 rounded-md">
                    {currentSnippet === "java" ? "Java" : "Python"}
                  </div>
                </div>
                <pre className="p-6 overflow-x-auto">
                  <code className="text-sm font-mono text-gray-300 leading-relaxed">
                    {codeSnippets[currentSnippet as keyof typeof codeSnippets]}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Built for <span className="text-cyan-400">Developers</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Practice with real code, track meaningful metrics, and benchmark your coding speed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
              <div className="relative h-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Real Code, Not Words</h3>
                <p className="text-gray-400 leading-relaxed">
                  Practice with real Java and Python code snippets, not fake text.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
              <div className="relative h-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">CPM — CodeLines Per Minute</h3>
                <p className="text-gray-400 leading-relaxed">A new metric designed specifically for developers.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
              <div className="relative h-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Accuracy & Syntax Tracking</h3>
                <p className="text-gray-400 leading-relaxed">
                  Visual indicators for errors, accuracy percentage, and speed.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
              <div className="relative h-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Developer-First Analytics</h3>
                <p className="text-gray-400 leading-relaxed">
                  Minimal charts showing speed progression, accuracy trends, and benchmarks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000" />
            <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-3xl border border-zinc-800 p-12 md:p-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Track Your Progress</h2>
                <p className="text-xl text-gray-400">See your coding speed improve over time</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-2xl bg-zinc-950/50 border border-zinc-800">
                  <div className="text-5xl font-bold text-cyan-400 mb-2 font-mono">87</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">CPM Average</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-zinc-950/50 border border-zinc-800">
                  <div className="text-5xl font-bold text-blue-400 mb-2 font-mono">94%</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Accuracy</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-zinc-950/50 border border-zinc-800">
                  <div className="text-5xl font-bold text-purple-400 mb-2 font-mono">142</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Sessions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold text-balance">
            Ready to level up your <span className="text-cyan-400">coding speed</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start training today and see how fast you can really code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-12 py-7 text-xl rounded-xl shadow-2xl shadow-cyan-500/50 transition-all hover:shadow-3xl hover:shadow-cyan-500/60 hover:scale-105"
            >
              Start Typing
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-zinc-900 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Codin
              </div>
              <div className="text-sm text-gray-500 font-mono">Train. Type. Benchmark.</div>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-900 text-center text-sm text-gray-500">
            Built for developers who care about speed.
          </div>
        </div>
      </footer>
    </div>
  )
}
