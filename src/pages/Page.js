import React, {useEffect, useState} from "react";

const Page = ({match}) => {

    const [page, setPage] = useState({})

    useEffect(() => {
        fetchPage()
    }, [match.params.slug])

    const fetchPage = async () => {
        await fetch(`http://localhost:5000/page/${match.params.slug}`)
            .then(res => res.json())
            .then(result => {
                setPage(result.package)
            })
    }

    return (
        <div className="row mb-2 mt-5">
            <div className="col-md-12 blog-main">
                <div className="blog-post">
                    <h1 className="blog-post-title">{page.title}</h1>
                    <p className="blog-post-meta mt-2">Updated On: October 29, 2020</p>
                    <hr/>
                    <div dangerouslySetInnerHTML={{__html: page.body}} />
                </div>
            </div>
        </div>
    )
}

export default Page;