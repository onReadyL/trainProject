const config = {
  composition: 'portal',
  pageTitle: 'Portal'
}

export default function Portal({ }: any) {
  return;
}

export async function getStaticProps() {
  return {
    props: {
      ...config
    }
  }
}