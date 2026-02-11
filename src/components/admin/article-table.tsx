import {
  ArticleWithRelations,
  getArticleAction,
} from "@/lib/actions/articleActions";
import { useEffect, useState } from "react";
import { AdminTable } from "./admin-data-table";
import { TableCell, TableRow } from "../ui/table";
import Link from "next/link";
import ArticleAdminActions from "./actions/article-admin-actions";

export default function ArticleTable() {
  const [articles, setArticles] = useState<ArticleWithRelations[]>([]);

  useEffect(() => {
    getArticleAction().then((res) => {
      if (res.success) setArticles(res.articles ?? []);
    });
  }, []);

  return (
    <AdminTable
      caption="A list of your articles."
      columns={[
        { key: "thumbnail", label: "Thumbnail" },
        { key: "title", label: "Title" },
        { key: "desc", label: "Description" },
        { key: "category", label: "Category" },
        { key: "date", label: "Created Date" },
        { key: "author", label: "Author" },
        { key: "published", label: "Published" },
        { key: "actions", label: "Actions" },
      ]}
      data={articles}
      renderRow={(a) => (
        <TableRow key={a.id}>
          <TableCell>
            {a.thumbnail && <img src={a.thumbnail} width={100} />}
          </TableCell>
          <TableCell>
            <Link href={`/learn/articles/${a.slug}`}>{a.title}</Link>
          </TableCell>
          <TableCell>{a.shortDesc}</TableCell>
          <TableCell>{a.articleCategory?.name}</TableCell>
          <TableCell>{new Date(a.createdAt).toLocaleDateString()}</TableCell>
          <TableCell>{a.author?.name}</TableCell>
          <TableCell>{a.published ? "Yes" : "No"}</TableCell>
          <TableCell>
            <ArticleAdminActions articleId={a.id} slug={a.slug} />
          </TableCell>
        </TableRow>
      )}
    />
  );
}
