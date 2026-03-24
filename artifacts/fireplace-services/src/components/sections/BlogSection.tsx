import { Link } from "wouter";
import { blogPosts } from "../../data/blogPosts";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export function BlogSection() {
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <section id="blog" className="py-20 px-6 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-bold text-sm uppercase tracking-widest">Industry Knowledge</span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3 mb-4">
            Latest From Our Blog
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expert insights on Strata property maintenance, building systems, and contractor best practices for the Lower Mainland.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all group cursor-pointer h-full flex flex-col">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${post.image}`}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-primary uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-sm font-black text-foreground group-hover:text-primary transition-colors leading-snug mb-2 line-clamp-3">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mt-auto pt-3 border-t border-slate-100">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString("en-CA", { month: "short", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/blog" className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white font-bold py-3 px-8 rounded-full transition-colors">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
