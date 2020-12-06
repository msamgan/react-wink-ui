import React from "react";

const Intro = () => {
    return (
        <div className="row author-box">
            <div className="col-md-12">
                <div className="row mb-3">
                    <div className="col-auto d-none d-lg-block">
                        <img src="https://secure.gravatar.com/avatar/c2acbea3e046c1b8cf7358d8526eda63?s=150"
                             className="rounded-circle author-img" alt="mohammed-samgan-khan"/>
                    </div>
                    <div className="col p-4 d-flex flex-column position-static">
                        <p>Hi, I am Samgan, I excel at solving complex problems involving logic and step by step
                            breakdown of the problem. Besides, to develop complex algorithms, I specialize in
                            problem framing, systems design, and product development strategy. Sometimes I also
                            enjoy public speaking.&nbsp;&nbsp;</p><p>I am also the creator of <a
                        href="https://penit.ink" rel="noopener noreferrer" target="_blank">penit.ink,</a> a site
                        which provides young writers with a free hand place to show their creation to the world.
                        Irrespective of the niche, if you write this place is defiantly for you.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;