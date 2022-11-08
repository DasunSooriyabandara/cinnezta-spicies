import './about-us.css';

const AboutUsPage = () => {
    return(
        <>
            <div className="row position-relative g-0">
                <img className="hero-img" height="600px" width="100%" src= "./images/abo.jpg" alt=""/>
                {/* "https://i.pinimg.com/originals/52/00/84/52008442254fc48159db6c4e49f38a78.jpg" */}
                
                <div className="position-absolute mt-5 w-100 d-flex flex-column animate__animated animate__slideInUp">
                    <div className="d-flex w-100 flex-column">
                        <h1 className="fw-bolder text-light p-0 m-0 w-100 text-center fs-100">WHO</h1>
                        <h1 className="fw-bolder text-light p-0 m-0 w-100 text-center fs-100">WE ARE ?</h1>
                        <h1 className="fw-bolder text-light p-0 m-0 w-100 text-center fs-100"></h1>
                    </div>
                </div>
            </div>

            <div className="my-5 g-0 container">
                <h1 className="fw-bolder text-center text-dark p-0 m-0 animate__animated animate__slideInUp">About Us</h1>
                <p className="text-center p-0 m-0 mt-3 animate__animated animate__slideInUp">
                Over 3 generations, more than 70 years it was a family cultivation and production starting from my great grandfather. uplifting the tradition to next stage,
                it is a necessaity to take the production to a new dimension introducing value added cinnamon products to the target market with the brand name “Cinnezta” by Kaveesha Premasiri – 
                the 3rd generation from year 2021
                Value proposition is the promise a business bestows to its customers reasoning why they should choose or purchase its products or services over competitors or substitute suppliers.
                Our value proposition stands upon the quality of the Sri Lankan spices we deliver. Cinnezta mainly focuses on the utmost best quality delivered to its customers. Therefore, we do not process mass production. 
                We only target the niche market who values the quality of the product they consume for the price they spend on our products.
                </p>
                <br/>
                <hr className="bg-success mb-10 mt-100 d-inline-block mx-auto" style={{width:"1150px", height: "2px"}}/>
                <h1 className="fw-bolder text-center text-dark p-0 m-0 animate__animated animate__slideInUp">Our Vision</h1>
                <p className="text-center p-0 m-0 mt-3 animate__animated animate__slideInUp">To embark on the quality and the consumer trust and become the best-selling global Ceylon spices exporter.</p>
                <br/>
                <hr className="bg-success mb-10 mt-100 d-inline-block mx-auto" style={{width:"1150px", height: "2px"}}/>
                <h1 className="fw-bolder text-center text-dark p-0 m-0 animate__animated animate__slideInUp">Our Mision</h1>
                <p className="text-center p-0 m-0 mt-3 animate__animated animate__slideInUp">
                    To deliver the best quality spices for a reasonable price and the best quality spices adhering to the international food standards. In order to achieve this, the company focus on,
                    Security and quality of food standards
                    sustainable food production
                    Improvement of Sri Lankan agricultural practices.</p>
            </div>

            
        </>
    )
}
export default AboutUsPage