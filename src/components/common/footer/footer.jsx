const Footer = () => {
    return(
        <footer className="page-footer bg-light ">
            <div className="bg-dark">
                <div className="container">
                    <div className="row pay-2 d-flex align-item-center">
                        <div className="col-md-12 text-center">
                            <a href="https://www.facebook.com/search/top/?q=cinnezta"><i className="fab mx-2 my-2 fa-facebook-f text-white mr-4"></i></a>
                            <a href="https://www.instagram.com/cinnezta/"><i className="fab mx-2 my-2 fa-instagram text-white mr-4"></i></a>
                            <a href=""><i className="fab mx-2 my-2 fa-linkedin text-white mr-4"></i></a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container text-center text-md-left mt-3 bg- ">
                <div className="row">

                    <div className="col-md-3 mx-auto mb-4 bg-">
                                <div>
                                    <img className="rounded-circle"
                                        src="./images/footer-logo-1.png"
                                        width="100" height="100" alt=""/>
                                    <p className="text-center text-uppercase fw-bold">100% Pure Ceylon Product</p>
                                    <br/>
                                    <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width:"300px", height: "2px"}}/>
                                    <br/>
                                    <br/>
                                </div>
                        <h6 className="text-uppercase fw-bold  text-black font-weight-bold ">About</h6>
                        <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width:"125px", height:"2px"}}/>
                            <p className="mt-2 text-DimGray">Farmed and harvested under organic and Fair Trade practices, our products are geared to contribute towards a healthier lifestyle. We follow good agricultural practices across farming and harvesting so we can preserve and maintain the quality of the soil and our ecosystem as a whole. </p>
                    </div>

                    <div className="col-md-3 mx-auto mb-4 text-DimGray">
                                <div>
                                    <img className="rounded-circle"
                                        src="./images/footer-logo-2.png"
                                        width="100" height="100" alt=""/>
                                    <p className="text-center text-uppercase fw-bold">International Shipping</p>
                                    <br/>
                                    <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width:"300px", height: "2px"}}/>
                                    <br/>
                                    <br/>
                                </div>
                        <h6 className="text-uppercase fw-bold  text-black font-weight-bold">Categories</h6>
                        <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width:"100px", height: "2px"}}/>
                            <ul className="list-unstyled text-">
                                {/* <li className="my-2 text-black"><a className="text-decoration-none text-start text-light" href="">Full Kit</a></li> */}
                                <li className="my-2 "><a className="text-decoration-none text-dark " href="">Cinnamon</a></li>
                                <li className="my-2"><a className="text-decoration-none text-dark  " href="">Organic</a></li>
                                <li className="my-2"><a className="text-decoration-none text-dark  " href="">Pepper</a></li>
                                {/* <li className="my-2"><a className="text-decoration-none text-start text-light" href="">Pots</a></li> */}

                            </ul>
                    </div>


                    <div className="col-md-3 mx-auto mb-4">
                                <div>
                                    <img className="rounded-circle"
                                        src="./images/footer-logo-3.png"
                                        width="100" height="100" alt=""/>
                                    <p className="text-center text-uppercase fw-bold">No Artificial Colors, Flavors</p>
                                    <br/>
                                    <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width:"300px", height: "2px"}}/>
                                    <br/>
                                    <br/>
                                </div>

                        <h6 className="text-uppercase  fw-bold text-black font-weight-bold">Contact Details</h6>
                        <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{width:"110px", height: "2px"}}/>
                            <ul className="list-unstyled ">
                                <li className="my-2 text text-DimGray"><i className="fas fa-home mr-3"></i> 171/2,4th milepost,Police station road, Karandeniya.</li>
                                <li className="my-1 text text-DimGray"><i className="fas fa-envelope mr-3"></i><i> info@cinnezta.com</i>
                            </li>
                            <li className="my-2 text text-DimGray"><i className="fas fa-phone mr-3"></i>  077 89 106 63/091 22 351 90</li> 
                        </ul>
                    </div>


                </div>
            </div>

            <div className="footer-copyright text-center py-0.5">
                <p className="m-0 text-black">&copy; Copyright <a className="text-decoration-none" href="A">2022 Cinnezta. All Right Reserved.Designed & Developed By Cinnezta</a></p>
            </div>

        </footer>
    )
}
export default Footer;