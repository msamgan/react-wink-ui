import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {
    const [pages, setPages] = useState([])

    useEffect(() => {
        fetchPages()
            .then()
    }, [])

    const fetchPages = async () => {
        await fetch('http://localhost:5000/page/listing')
            .then(response => response.json())
            .then(result => setPages(result.package))
    }

    return (
        <header className="blog-header py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4">
                    <a className="blog-header-logo text-dark" href="/">Samgan's Journal</a>
                </div>
                <div className="col-8 d-flex justify-content-end align-items-center">
                    {pages.map(page =>
                        <Link to={`/page/${page.slug}`} className="ml-4">{page.title}</Link>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header;