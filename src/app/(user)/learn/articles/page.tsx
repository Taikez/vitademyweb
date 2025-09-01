import MaintenancePage from "@/components/MaintenancePage";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const categories = [
  {
    categoryId: 1,
    categoryName: "Mathematics",
  },
  {
    categoryId: 2,
    categoryName: "Blockchain",
  },
  {
    categoryId: 3,
    categoryName: "Social Science",
  },
  {
    categoryId: 4,
    categoryName: "For Students",
  },
];

const articles = [
  // Blockchain
  {
    articleId: 1,
    categoryId: 2,
    slug: "decentralized-education",
    title: "Decentralized Education is the Future",
    author: "Julian Nardita",
    createdAt: "19 August 2025",
    shortDescription:
      "Exploring how blockchain can disrupt traditional education systems by enabling trustless, peer-to-peer learning credentials.",
    coverPicture: "/articles/cover-picture-template.jpg",
  },
  {
    articleId: 2,
    categoryId: 2,
    slug: "smart-contracts-in-learning",
    title: "Smart Contracts in Learning Platforms",
    author: "Samantha Lee",
    createdAt: "25 August 2025",
    shortDescription:
      "How smart contracts can automate certification, grading, and rewards in education.",
    coverPicture: "/articles/cover-picture-template.jpg",
  },

  // Mathematics
  {
    articleId: 3,
    categoryId: 1,
    slug: "math-behind-cryptography",
    title: "The Mathematics Behind Cryptography",
    author: "Dr. Alan Cheng",
    createdAt: "15 August 2025",
    shortDescription:
      "A beginner-friendly dive into prime numbers, modular arithmetic, and elliptic curves that secure our digital world.",
    coverPicture: "/articles/cover-picture-template.jpg",
  },
  {
    articleId: 4,
    categoryId: 1,
    slug: "visualizing-calculus",
    title: "Visualizing Calculus with Real-World Examples",
    author: "Maria Rodriguez",
    createdAt: "10 August 2025",
    shortDescription:
      "An intuitive guide to limits, derivatives, and integrals using real-world data and graphs.",
    coverPicture: "/articles/cover-picture-template.jpg",
  },

  // Social Science
  {
    articleId: 5,
    categoryId: 3,
    slug: "ai-and-society",
    title: "AI and Society: Challenges Ahead",
    author: "David Kim",
    createdAt: "05 August 2025",
    shortDescription:
      "Examining how AI will reshape work, privacy, and human interaction in the coming decade.",
    coverPicture: "/articles/cover-picture-template.jpg",
  },
  {
    articleId: 6,
    categoryId: 3,
    slug: "digital-inequality",
    title: "Bridging the Digital Inequality Gap",
    author: "Sarah Johnson",
    createdAt: "01 August 2025",
    shortDescription:
      "Why internet access is the new human right and what can be done to provide it globally.",
    coverPicture: "/articles/cover-picture-template.jpg",
  },

  // For Students
  {
    articleId: 7,
    categoryId: 4,
    slug: "study-hacks",
    title: "10 Study Hacks Backed by Science",
    author: "Karen Angelina",
    createdAt: "28 July 2025",
    shortDescription:
      "From spaced repetition to active recall — discover the most effective study techniques for exams.",
    coverPicture: "/articles/cover-picture-template.jpg",
  },
  {
    articleId: 8,
    categoryId: 4,
    slug: "productivity-for-students",
    title: "The Student’s Guide to Productivity",
    author: "Michael Tan",
    createdAt: "20 July 2025",
    shortDescription:
      "Practical strategies to manage time, avoid burnout, and balance school with life.",
    coverPicture: "/articles/cover-picture-template.jpg",
  },
];

export default function page() {
  if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true") {
    return <MaintenancePage />;
  }

  return (
    <div className=" p-10 md:py-20 md:px-30">
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-bold">
          Explore Ideas. Understand the World.
        </h1>
        <p className="text-justify leading-relaxed md:text-lg">
          Our Articles page brings you scientific journal breakdowns,
          thought-provoking blogs, and educational insights — simplified,
          relevant, and designed to fuel your curiosity. Stay informed on the
          latest discoveries, research, and ideas shaping the future of
          learning.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-center w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-full md:rounded-none md:rounded-l-full border border-gray-300 md:border-r-0 focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-3/4"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full md:rounded-none md:rounded-r-full border border-gray-300 md:border-l-0  hover:bg-gray-800 dark:hover:bg-gray-300 transition w-full md:w-1/2"
          >
            Subscribe
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
          <Button variant="outline" className="border border-gray-300">
            View All
          </Button>
          {categories.map((category) => (
            <Button variant="outline" className="border border-gray-300">
              {category.categoryName}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article) => (
            <Card className="overflow-hidden rounded-lg shadow-md">
              <CardHeader className="relative p-0 m-0 border-0">
                <Image
                  alt={article.slug}
                  src={article.coverPicture}
                  width={400}
                  height={250}
                  className="object-cover w-full h-72"
                />

                {/* Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/70 to-transparent text-white p-4 flex justify-between text-sm">
                  <div>
                    <p className="font-semibold">{article.author}</p>
                    <p className="text-xs opacity-80">{article.createdAt}</p>
                  </div>
                  <span className="bg-white/20 text-white text-xs px-2 py-2 rounded-full">
                    {
                      categories.find(
                        (c) => c.categoryId === article.categoryId
                      )?.categoryName
                    }
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex flex-col gap-5">
                  <Link
                    href={`/learn/articles/${article.slug}`}
                    className="text-3xl font-semibold transition-colors duration-300 ease-in-out hover:underline underline-offset-4"
                  >
                    {article.title}
                  </Link>
                  <p className="text-xl text-neutral-500 dark:text-neutral-400">
                    {article.shortDescription}
                  </p>
                </div>
              </CardContent>

              <CardFooter>
                <Link
                  href={`/learn/articles/${article.slug}`}
                  className="font-bold hover:underline underline-offset-4 flex items-end"
                >
                  Read Post ➚
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
