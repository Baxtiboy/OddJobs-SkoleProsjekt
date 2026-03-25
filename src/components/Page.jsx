import "../css/Page.css"

const Page = ({children}) => {
    return (
        <main className="page">{children}</main>
    );
}

export default Page