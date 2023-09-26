let Navbar = () => {
    return (<>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="">Navigation</a>
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" href="#basic_info" aria-current="page">Basic Info<span class="visually-hidden">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#role">Role</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#professional_experience">Professional Experience</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#technology_summary">Technology Summary</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact_me">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>);
}

export default Navbar;