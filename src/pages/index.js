import HomePage from "@/components/homePage/HomePage";
import {getDataForNewAndInsightsSection} from "./api/graphql"
export default function Home({allPosts}) {
  return (
    <>
      <HomePage allPosts={allPosts}/>
    </>
  )
}
export const getServerSideProps = async () => {
  const allPosts = await getDataForNewAndInsightsSection()
  return { props: { allPosts } }
}