import React from "react";

function Content() {
    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3 border">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">
                        First Paragaraph in Jumbotton
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Nulla malesuada pellentesque elit eget
                        gravida cum sociis natoque penatibus. Nibh mauris cursus
                        mattis molestie a iaculis. Lobortis mattis aliquam
                        faucibus purus in massa tempor nec feugiat. Lacinia quis
                        vel eros donec ac odio. Laoreet id donec ultrices
                        tincidunt arcu non sodales neque sodales. Posuere urna
                        nec tincidunt praesent semper feugiat nibh sed pulvinar.
                    </p>
                    <button
                        className="btn btn-primary btn-lg"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        Click Here to Show Modal Box
                    </button>
                </div>
            </div>

            {/* Modal */}
            <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                                Modal title
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            Ini adalah modal yang dibuat dengan npm bootstrap
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" class="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content;
