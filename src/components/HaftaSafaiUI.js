

export function UIHaftaSafai({setView}) {


    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <header class="col-md-12">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="nav-logo-name">
                                <a class="navbar-brand" href="#">Hafta Safai</a>
                                <p>Cleanliness is a part of a faith</p>
                            </div>

                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>

                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                </ul>
                                <div class="d-flex">
                                    <button class="btn btn-outline-success" onClick={() => setView("login")}>Login</button>
                                    <button class="btn btn-outline-success" onClick={() => setView("register")}>Register</button>
                                </div>
                            </div>

                        </nav>
                    </header>

                    <section class="col-md-8 ">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Hafta Safai Name</h5>

                            </div>
                            <div>
                                <span className="safai-day m-3">Date</span>
                                <span className="safai-day">Day</span>
                                <span className="safai-day m-3">Time</span>
                            </div>
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <a href="#" class="card-link" role="button">Join</a>
                            </div>
                        </div>
                    </section>
                    <section class="col-md-3 offset-md-1">
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src="..." class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src="..." class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer class="col-md-12">
                     Footer Section
                    </footer>

                </div>
            </div>
        </>
    )
}