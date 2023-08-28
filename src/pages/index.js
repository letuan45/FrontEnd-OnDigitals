import HomePage from "@/components/homepage/HomePage";
import {getDataForNewAndInsightsSection} from "./api/graphql"
export default function Home({allPosts}) {
  return (
    <div>
      <HomePage allPosts={allPosts}/>
    </div>
  )
}
export const getServerSideProps = async () => {
  const allPosts = await getDataForNewAndInsightsSection()
  return { props: { allPosts } }
}