"use client";

import { Article } from "@prisma/client";
import Link from "next/link";

type Props = {
  otherArticles?: Article[];
};

export default function ArticleOthers({ otherArticles }: Props) {
  if (!otherArticles || otherArticles.length === 0) return null;

  return (
    <section className="mt-16 pt-10 border-t">
      <h2 className="text-2xl font-semibold mb-6">Recommended for you</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {otherArticles.map((article) => (
          <Link
            key={article.id}
            href={`/learn/articles/${article.slug}`}
            className="group block rounded-xl border bg-card hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            {/* Thumbnail */}
            <div className="aspect-video overflow-hidden bg-muted">
              {article.thumbnail ? (
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                  No image
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-base line-clamp-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>

              {article.shortDesc && (
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {article.shortDesc}
                </p>
              )}

              <p className="text-xs text-muted-foreground pt-1">
                {new Date(article.createdAt).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
