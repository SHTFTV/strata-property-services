import { Link } from "wouter";
import { blogPosts, getUniqueCategories } from "@/data/blogPosts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Calendar, Clock, ArrowRight, Tag, BookOpen } from "lucide-react";
import { useState } from "react";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categories = getUniqueCategories();

  const filteredPosts = activeCategory
    ? blogPosts.filter(p => p.category === activeCategory)
    : blogPosts;

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 selection:text-primary-foreground">
      <SEO
        title="Blog — Strata Property Maintenance Tips & Guides"
        description="Expert guides, maintenance tips, and industry insights for Strata property managers and councils. Covering snow removal, HVAC, plumbing, roofing, restoration, and more across the Lower Mainland."
      />
      <Navbar />

      <header className="bg-secondary text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Strata Property Blog</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight max-w-3xl">
            Expert Guides & <span className="text-primary">Maintenance Tips</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Practical advice for Strata councils, property managers, and building owners. Written by our team with 35+ years of hands-on experience across 13 trade divisions.
          </p>
        </div>
      </header>

      <div className="bg-primary text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-6 text-sm md:text-base font-bold uppercase tracking-widest text-center">
          <span>Est. 1989</span>
          <span className="hidden md:inline">&#8226;</span>
          <span>13 Trade Divisions</span>
          <span className="hidden md:inline">&#8226;</span>
          <span>{blogPosts.length} Expert Articles</span>
          <span className="hidden lg:inline">&#8226;</span>
          <span>Serving the Lower Mainland</span>
        </div>
      </div>

      <main className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                !activeCategory
                  ? "bg-primary text-white shadow-lg"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              All Articles ({blogPosts.length})
            </button>
            {categories.map(cat => {
              const count = blogPosts.filter(p => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-lg"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all group cursor-pointer h-full flex flex-col">
                  <div className="bg-secondary p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">{post.category}</span>
                    </div>
                    <h2 className="text-lg font-black text-white group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h2>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{new Date(post.date).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" })}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <section className="py-16 px-6 bg-secondary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">Need Help With Your Strata Property?</h2>
          <p className="text-slate-300 mb-8">Our team of 13 trade divisions is ready to help with any building maintenance or improvement project across the Lower Mainland.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:6047611518" className="bg-primary hover:bg-accent text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg inline-flex items-center justify-center gap-2 text-lg">
              Call 604-761-1518
            </a>
            <Link href="/#contact" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-secondary transition-all inline-flex items-center justify-center text-lg">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
