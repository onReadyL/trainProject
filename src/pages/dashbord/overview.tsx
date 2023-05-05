
const Index = () => {
    return ( <><h1>预览页面</h1></>)
}
export default Index;

export async function getStaticProps () {
    return {
        props: {
            pageTitle: '预览页面'
        }
    }
}