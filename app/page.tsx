"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Zap, Sparkles, ArrowRight, Check, Lightbulb, RefreshCw, Workflow, Menu, X } from "lucide-react"

export default function LandingPage() {
  const [currentDemo, setCurrentDemo] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const demoSteps = [
    {
      text: "The quick brown fox jumps over the lazy dog.",
      suggestion: "Consider adding more descriptive language to enhance engagement.",
      highlight: "quick brown fox",
    },
    {
      text: "The swift, copper-colored fox leaps gracefully over the drowsy dog.",
      suggestion: "Excellent improvement. The descriptive language creates vivid imagery.",
      highlight: "swift, copper-colored fox leaps gracefully",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true)
      setTimeout(() => {
        setCurrentDemo((prev) => (prev + 1) % demoSteps.length)
        setIsTyping(false)
      }, 1000)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-900 rounded-md flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">Tabs Editor</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#product" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                Product
              </a>
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                Pricing
              </a>
              <a href="#docs" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                Documentation
              </a>
              <div className="flex items-center space-x-4 ml-8">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                  Sign in
                </Button>
                <Button size="sm" className="bg-gray-900 hover:bg-gray-800 text-white">
                  Get started
                </Button>
              </div>
            </nav>

            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-6 space-y-4">
              <a href="#product" className="block text-gray-600 hover:text-gray-900 text-sm font-medium">
                Product
              </a>
              <a href="#features" className="block text-gray-600 hover:text-gray-900 text-sm font-medium">
                Features
              </a>
              <a href="#pricing" className="block text-gray-600 hover:text-gray-900 text-sm font-medium">
                Pricing
              </a>
              <a href="#docs" className="block text-gray-600 hover:text-gray-900 text-sm font-medium">
                Documentation
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  Sign in
                </Button>
                <Button size="sm" className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  Get started
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-8 bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-100">
              <Sparkles className="w-3 h-3 mr-2" />
              Introducing AI-powered writing assistance
            </Badge>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 tracking-tight leading-none">
              The text editor
              <br />
              <span className="text-gray-600">built for professionals</span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Tabs Editor combines powerful writing tools with intelligent AI assistance. Streamline your workflow,
              enhance your writing, and collaborate seamlessly—all in one platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 h-12 text-base font-medium">
                Start free trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 h-12 text-base font-medium border-gray-300 hover:border-gray-400 bg-transparent"
              >
                View documentation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="text-sm text-gray-500">Free 14-day trial • No credit card required • Enterprise-ready</div>
          </div>
        </div>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[length:24px_24px]"></div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section id="product" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI assistance that understands context</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience intelligent writing assistance that adapts to your style, provides contextual suggestions, and
              helps you craft better content.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="p-0 shadow-xl border-0 bg-white overflow-hidden">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Editor Panel */}
                <div className="lg:col-span-3 p-8">
                  <div className="border border-gray-200 rounded-lg bg-white">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="text-xs text-gray-500 font-medium">untitled.md</div>
                      <div className="w-12"></div>
                    </div>

                    <div className="p-6 min-h-[300px]">
                      <div className="prose max-w-none">
                        <p className="text-lg leading-relaxed text-gray-900 font-normal">
                          {demoSteps[currentDemo].text
                            .split(demoSteps[currentDemo].highlight)
                            .map((part, index, array) => (
                              <span key={index}>
                                {part}
                                {index < array.length - 1 && (
                                  <span className="bg-blue-100 border-b-2 border-blue-400 px-1">
                                    {demoSteps[currentDemo].highlight}
                                  </span>
                                )}
                              </span>
                            ))}
                          {isTyping && <span className="animate-pulse text-gray-400">|</span>}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Assistant Panel */}
                <div className="lg:col-span-2 p-8 bg-gray-50 border-l border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center mr-3">
                      <MessageCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="font-medium text-gray-900 text-sm">AI Assistant</span>
                    <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Lightbulb className="w-3 h-3 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-900 mb-2">Suggestion</p>
                          <p className="text-sm text-gray-600 leading-relaxed">{demoSteps[currentDemo].suggestion}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs border-gray-300 hover:border-gray-400 bg-white"
                      >
                        <RefreshCw className="w-3 h-3 mr-1" />
                        Rewrite
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs border-gray-300 hover:border-gray-400 bg-white"
                      >
                        <Zap className="w-3 h-3 mr-1" />
                        Enhance
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need to write better</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional-grade features designed for teams and individuals who demand excellence in their writing
              workflow.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                <Zap className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Intelligent feedback</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advanced AI analyzes your writing in real-time, providing contextual suggestions for grammar, style, and
                clarity improvements.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                  Real-time grammar and style checking
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                  Tone and voice optimization
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                  Readability enhancement
                </li>
              </ul>
            </div>

            <div className="group">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                <MessageCircle className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom AI prompts</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Configure AI assistance to match your specific needs, writing style, and industry requirements with
                custom prompts and templates.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                  Personalized writing assistance
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                  Industry-specific templates
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                  Team collaboration settings
                </li>
              </ul>
            </div>

            <div className="group">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                <Workflow className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise integration</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Seamlessly integrate with your existing tools and workflows. Built for teams with enterprise-grade
                security and compliance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                  SSO and advanced security
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                  API and webhook support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                  Multi-format export options
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-sm text-gray-600">Active writers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">2M+</div>
              <div className="text-sm text-gray-600">Documents created</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-sm text-gray-600">Enterprise customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to transform your writing workflow?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of professionals who trust Tabs Editor for their most important writing projects. Start your
            free trial today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 h-12 text-base font-medium">
              Start free trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 h-12 text-base font-medium border-gray-300 hover:border-gray-400 bg-transparent"
            >
              Contact sales
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="text-sm text-gray-500">14-day free trial • No setup fees • Cancel anytime</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gray-900 rounded-md flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-semibold text-gray-900">Tabs Editor</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                The professional text editor with intelligent AI assistance. Built for teams and individuals who demand
                excellence.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">Product</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">Company</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">Support</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© 2024 Tabs Editor, Inc. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
