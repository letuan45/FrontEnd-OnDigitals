import BlogDetail from "@/components/blogDetailPage/BlogDetail";
import {
  GetPostDetailById,
  getDataForNewAndInsightsSection,
} from "../api/graphql";
import { useRouter } from "next/router";

const BlogDetailPage = ({ allPosts, dataPostDetail }) => {
  const router = useRouter();
  console.log(router.query.blogId);
  //   return <BlogDetail />;
  return (
    <>
      <BlogDetail relatedPosts={allPosts} postDetail={dataPostDetail} />
    </>
  );
};
export const getServerSideProps = async (context) => {
  const { query } = context;
  const postId = parseInt(query.blogId);
  const dataPostDetail = await GetPostDetailById(postId);
  const allPosts = await getDataForNewAndInsightsSection();
  return { props: { allPosts, dataPostDetail } };
};

export default BlogDetailPage;
