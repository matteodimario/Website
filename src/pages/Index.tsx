import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  // Sample blog posts - in a real app, these would come from an API
  const featuredPosts = [
    {
      title: "On the Distribution of Prime Numbers in Arithmetic Progressions",
      excerpt:
        "A comprehensive analysis of the density of prime numbers within arithmetic sequences, building upon the foundational work of Dirichlet and extending recent breakthroughs in analytic number theory.",
      date: "March 15, 2024",
      readTime: "12 min read",
      category: "Number Theory",
      tags: ["primes", "analytic-number-theory", "arithmetic-progressions"],
      slug: "prime-distribution-arithmetic-progressions",
      featured: true,
    },
    {
      title: "Interactive Visualization of Complex Dynamical Systems",
      excerpt:
        "Modern computational tools allow us to explore the intricate beauty of complex dynamical systems. This post introduces new interactive methods for understanding Julia sets and the Mandelbrot set.",
      date: "March 8, 2024",
      readTime: "8 min read",
      category: "Complex Analysis",
      tags: ["complex-dynamics", "visualization", "fractals"],
      slug: "complex-dynamical-systems-visualization",
    },
    {
      title: "Recent Advances in Harmonic Analysis Applications",
      excerpt:
        "Exploring the latest developments in harmonic analysis and their applications to partial differential equations, signal processing, and quantum mechanics.",
      date: "February 28, 2024",
      readTime: "15 min read",
      category: "Harmonic Analysis",
      tags: ["harmonic-analysis", "pde", "applications"],
      slug: "harmonic-analysis-advances",
    },
  ];

  const recentPublications = [
    {
      title: "Spectral Properties of Random Matrix Ensembles",
      journal: "Journal of Mathematical Analysis",
      year: "2024",
      link: "https://arxiv.org/abs/2401.12345",
    },
    {
      title: "Optimal Control in Stochastic Differential Equations",
      journal: "Annals of Probability",
      year: "2024",
      link: "https://arxiv.org/abs/2312.67890",
    },
    {
      title: "Machine Learning Approaches to Mathematical Discovery",
      journal: "Communications in Mathematical Physics",
      year: "2023",
      link: "https://arxiv.org/abs/2309.11111",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-academic-gray-light to-white py-16 md:py-24">
        <div className="max-w-academic-wide mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* Left Column - Profile Image */}
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-academic-blue/20 to-academic-blue/5 rounded-full flex items-center justify-center border border-academic-gray-medium">
                  <BookOpen className="w-20 h-20 text-academic-blue" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-academic-blue text-white rounded-full p-2">
                  <Award className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Right Column - Bio */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-normal text-academic-blue mb-4">
                  Dr. Academic Researcher
                </h1>
                <p className="text-lg text-academic-gray mb-2">
                  Professor of Mathematics • Research Scientist • Mathematical
                  Explorer
                </p>
                <p className="text-sm text-academic-text-light">
                  University of Knowledge • Department of Mathematical Sciences
                </p>
              </div>

              <div className="academic-content">
                <p className="text-academic-base leading-relaxed">
                  Welcome to my academic homepage, where mathematics meets
                  modern digital interaction. I am a researcher specializing in{" "}
                  <Link
                    to="/research"
                    className="text-academic-blue hover:underline"
                  >
                    analytic number theory
                  </Link>
                  ,
                  <Link
                    to="/research"
                    className="text-academic-blue hover:underline"
                  >
                    {" "}
                    harmonic analysis
                  </Link>
                  , and
                  <Link
                    to="/research"
                    className="text-academic-blue hover:underline"
                  >
                    {" "}
                    computational mathematics
                  </Link>
                  .
                </p>
                <p className="text-academic-base leading-relaxed">
                  This site combines the simplicity of traditional academic
                  presentation with interactive features for modern mathematical
                  discourse. Explore my research, read my thoughts on
                  mathematical discoveries, and engage with the mathematical
                  community.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link to="/research">
                    View Research
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/cv">Academic CV</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <a href="mailto:researcher@university.edu">Contact</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16 md:py-20">
        <div className="max-w-academic-wide mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-normal text-academic-blue mb-2">
                Recent Thoughts
              </h2>
              <p className="text-academic-gray">
                Mathematical insights and research updates
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/blog">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <BlogCard
                key={post.slug}
                {...post}
                className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-16 md:py-20 bg-academic-gray-light">
        <div className="max-w-academic-wide mx-auto px-6">
          <h2 className="text-3xl font-normal text-academic-blue mb-12 text-center">
            Research Highlights
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Recent Publications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-academic-blue">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Recent Publications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentPublications.map((pub, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-academic-blue/20 pl-4"
                  >
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <h4 className="font-medium text-academic-text group-hover:text-academic-blue transition-colors">
                        {pub.title}
                        <ExternalLink className="inline ml-1 h-3 w-3" />
                      </h4>
                      <p className="text-sm text-academic-text-light mt-1">
                        {pub.journal} • {pub.year}
                      </p>
                    </a>
                  </div>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="w-full mt-4"
                >
                  <Link to="/research">View All Publications</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-academic-blue">
                  <Users className="mr-2 h-5 w-5" />
                  Academic Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-academic-blue">
                      42
                    </div>
                    <div className="text-sm text-academic-text-light">
                      Publications
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-academic-blue">
                      1,247
                    </div>
                    <div className="text-sm text-academic-text-light">
                      Citations
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-academic-blue">
                      15
                    </div>
                    <div className="text-sm text-academic-text-light">
                      Collaborators
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-academic-blue">
                      8
                    </div>
                    <div className="text-sm text-academic-text-light">
                      Awards
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-academic-gray-light">
                  <h5 className="font-medium text-academic-text mb-3">
                    Research Areas
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Number Theory</Badge>
                    <Badge variant="secondary">Harmonic Analysis</Badge>
                    <Badge variant="secondary">Complex Analysis</Badge>
                    <Badge variant="secondary">Computational Math</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20">
        <div className="max-w-academic mx-auto px-6 text-center">
          <h2 className="text-3xl font-normal text-academic-blue mb-4">
            Join the Mathematical Conversation
          </h2>
          <p className="text-academic-gray text-lg mb-8 max-w-2xl mx-auto">
            Stay updated with the latest mathematical insights, research
            breakthroughs, and academic discussions. Subscribe to receive new
            posts and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button asChild className="flex-1">
              <Link to="/blog">Explore Blog</Link>
            </Button>
            <Button variant="outline" asChild className="flex-1">
              <a href="/rss">Subscribe to RSS</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
