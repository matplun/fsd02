const Login = () => {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Login Form</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label for="" className="form-label">Email</label>
                            <input type="email" className="form-control" name="" id="" aria-describedby="emailHelpId"
                                placeholder="abc@mail.com" />
                        </div>
                        <div className="mb-3">
                            <label for="" className="form-label">Password</label>
                            <input type="password" className="form-control" name="" id="" placeholder="" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
