import { getSkills } from '../../lib/posts';
const config = {
  composition: 'portal',
  pageTitle: 'Portal'
}

export default function Portal({ }: any) {
  return <>Index</>;
}

export async function getStaticProps() {
  const skills = await getSkills();
  return {
    props: {
      ...config,
      ...skills
    }
  }
}