import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategory, getTopic, getAllTopicPaths } from "@/data/awareness-topics";
import TopicContent from "@/components/TopicContent";

interface Props {
  params: Promise<{ category: string; topic: string }>;
}

export async function generateStaticParams() {
  return getAllTopicPaths().map(({ category, topic }) => ({ category, topic }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: catSlug, topic: topicSlug } = await params;
  const topic = getTopic(catSlug, topicSlug);
  if (!topic) return { title: "Not Found" };
  return {
    title: topic.title,
    description: topic.summary,
  };
}

export default async function TopicPage({ params }: Props) {
  const { category: catSlug, topic: topicSlug } = await params;
  const category = getCategory(catSlug);
  const topic = getTopic(catSlug, topicSlug);
  if (!category || !topic) notFound();

  return <TopicContent category={category} topic={topic} />;
}
