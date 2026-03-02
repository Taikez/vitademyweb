import SafeHtml from "./safe-html";
import { ArticleWithRelations } from "@/lib/actions/articleActions";
import CategoryBadge from "./ui/CategoryBadge";

type Props = {
  article: ArticleWithRelations;
};

export default function ArticleContent({ article }: Props) {
  function formatDate(date: Date | string) {
    const d = new Date(date);
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  return (
    <div>
      <div>
        <div className="space-y-4">
          {article.articleCategory && (
            <CategoryBadge>{article.articleCategory.name}</CategoryBadge>
          )}

          <h1 className="text-4xl font-bold leading-tight">{article.title}</h1>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>By {article.author.name}</span>
            <span>•</span>
            <span>{formatDate(article.createdAt)}</span>
          </div>
        </div>

        {/* Thumbnail */}
        {article.thumbnail && (
          <img
            src={article.thumbnail}
            alt={article.title}
            className="my-6 rounded-xl"
          />
        )}

        <SafeHtml html={article.content} />
      </div>
    </div>
  );
}
