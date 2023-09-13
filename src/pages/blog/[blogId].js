import BlogDetail from "@/components/blogDetailPage/BlogDetail";
import { getDataForNewAndInsightsSection } from "../api/graphql";

const BlogDetailPage = ({allPosts}) => {
  //   return <BlogDetail />;
  return (
    <>
      <BlogDetail relatedPosts={allPosts} />
    </>
  );
};
export const getServerSideProps = async () => {
  const allPosts = await getDataForNewAndInsightsSection();
  return { props: { allPosts } };
};


export default BlogDetailPage;
