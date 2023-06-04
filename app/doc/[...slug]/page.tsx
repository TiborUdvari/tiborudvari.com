import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post._raw.flattenedPath === slug); // Not sure why this is like it is

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);
  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto py-6 prose-sm sm:prose-xl prose-invert sm:prose-invert px-8 lg:px-10 overflow-hidden max-w-lg">
      <h1 className="mb-2">{post.title}</h1>
      <hr className="" />
      <Mdx code={post.body.code} />
    </article>
  );
}
