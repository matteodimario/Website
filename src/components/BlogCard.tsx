import { Link } from "react-router-dom";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  slug: string;
  featured?: boolean;
  className?: string;
}

const BlogCard = ({
  title,
  excerpt,
  date,
  readTime,
  category,
  tags,
  slug,
  featured = false,
  className = "",
}: BlogCardProps) => {
  return (
    <Card
      className={`group hover:shadow-lg transition-all duration-300 border-academic-gray-medium hover:border-academic-blue/30 ${featured ? "ring-1 ring-academic-blue/20" : ""} ${className}`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          {featured && (
            <Badge
              variant="outline"
              className="text-xs text-academic-blue border-academic-blue"
            >
              Featured
            </Badge>
          )}
        </div>

        <Link to={`/blog/${slug}`} className="no-underline">
          <h3 className="text-xl font-normal text-academic-blue group-hover:text-academic-blue-hover transition-colors duration-200 leading-tight">
            {title}
          </h3>
        </Link>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-academic-text text-academic-base leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-academic-text-light">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{readTime}</span>
            </div>
          </div>

          <Link
            to={`/blog/${slug}`}
            className="flex items-center space-x-1 text-academic-blue hover:text-academic-blue-hover transition-colors group/link"
          >
            <span className="text-xs">Read more</span>
            <ArrowRight className="h-3 w-3 group-hover/link:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {tags.length > 0 && (
          <div className="flex items-center flex-wrap gap-1 mt-3 pt-3 border-t border-academic-gray-light">
            <Tag className="h-3 w-3 text-academic-text-light" />
            {tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs px-2 py-0 h-5 text-academic-text-light border-academic-gray-medium hover:bg-academic-gray-light transition-colors"
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <span className="text-xs text-academic-text-light">
                +{tags.length - 3} more
              </span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BlogCard;
