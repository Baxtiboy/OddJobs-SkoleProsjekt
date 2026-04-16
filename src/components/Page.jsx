import "../css/Page.css"

const Page = ({children}) => {
    return (
        <main className="page">
            {children}
        </main>
    );
}

export default Page

// denne greie blir ikke brukt i nettsiden, jeg bare eksperimenterte litt med greier. Den er litt kul da.