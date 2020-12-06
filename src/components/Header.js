import React from "react";

const Header = () => {
    return (
        <header className="blog-header py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4">
                    <a className="blog-header-logo text-dark" href="https://codebysamgan.com">Samgan's Journal</a>
                </div>
                <div className="col-8 d-flex justify-content-end align-items-center">
                    <a className="ml-4" href="https://codebysamgan.com/page/about">ABOUT</a>
                    <a className="ml-4" href="https://codebysamgan.com/page/portfolio">PORTFOLIO</a>
                    <a className="ml-4" href="https://codebysamgan.com/page/tv-series-i-watched">TV SERIES I
                        WATCHED</a>
                    <a className="ml-4" href="https://codebysamgan.com/page/uses">USES</a>
                </div>
            </div>
        </header>
    )
}

export default Header;