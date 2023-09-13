import BlogPage from "@/components/blogPage/BlogPage";
import { getDataForNewAndInsightsSection } from "../api/graphql";

export default function Blog({ allPosts }) {
  return (
    <>
      <BlogPage blogsData={allPosts} />
    </>
  );
}
export const getServerSideProps = async () => {
  const allPosts = await getDataForNewAndInsightsSection();
  return { props: { allPosts } };
};
