import React from 'react';
import Hero from './Hero';
import img1 from './img/2.jpg';
import img3 from './img/img3.jpeg';
import img4 from './img/paper.jpeg';
import Para from './Para';
import Button from '@material-ui/core/Button';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';



const Home = () => {

    return (
        <>
            {/* ====================   hero-section  ========================== */}

            <Hero
                title="The 1st Social Network Where "
                para="LEMON provides a  unique way for Users to create, post & profit from their connect. Based on other user opinion, Your opinion matters"
                get="LEMON FOR SALE "
                sale="WHITE PAPER "
                imgsrc={img1}
            />

            {/* ====================   About-section  ========================== */}

            <div className="about-section py-5">
                <div className="container">
                    <div className="title text-center mb-4">
                        <h2>About LEMONET</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <div className="full">
                                <div className="para text-center">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque inventore, explicabo sapiente quasi dolor reprehenderit obcaecati, iusto aspernatur illo illum expedita repudiandae, laudantium atque vel animi maxime labore suscipit enim?
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-12">
                            <div className="full">
                                <div className="videos m-auto text-center mt-5">
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/ZyOtZ8-WT7k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                        {/* ====================   APP-section  ========================== */}

            <div className="document_section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="full">
                                <div className="img-section mt-5">
                                    <img src={img4} width="100%" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="full">
                                <div className="title mt-3 text-white py-3">
                                    <h2> Read Our Documents</h2>
                                </div>
                                <div className="para text-white">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et cupiditate eaque accusantium vel inventore id illo est ullam saepe nobis, sit rem pariatur, repudiandae alia.</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <Button type="button"
                                            variant="contained"
                                            color="primary"
                                            className='mx-3 my-2'
                                        >  white paper &nbsp; <ArrowDropDownRoundedIcon  /> </Button>
                                        <Button type="button"
                                            variant="contained"
                                            color="primary"
                                            className='mx-3 my-2'
                                        >  One paper &nbsp; <ArrowDropDownRoundedIcon  /> </Button>
                                    </div>
                                    <div className="col-md-12">
                                        <Button type="button"
                                            variant="contained"
                                            color="primary"
                                            className='mx-3 my-2'
                                        >  Privacy Policy </Button>
                                        <Button type="button"
                                            variant="contained"
                                            color="primary"
                                            className='mx-3 '
                                        >  Terms of sale   </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ====================   APP-section  ========================== */}

            <div className="app-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="full">
                                <div className="title py-3">
                                    <h2> Creator-To-Consumer <br /> Decentralized Platform</h2>
                                </div>
                                <div className="app d-flex">
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel commodi sequi, id, velit expedita veritatis maiores possimus. </p>

                                    </div>
                                </div>
                                <div className="app d-flex">
                                    <div className="content">
                                        <Para />
                                    </div>
                                </div>
                                <div className="app d-flex">
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel commodi sequi, id, velit expedita veritatis maiores possimus amet consectetur, adipisicing elit  consectetur, adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                                <div className="btn1">
                                <Button type="button"
                                            variant="contained"
                                            color="primary"
                                            className='mx-3 lern_more my-2'
                                        >  Learnr More </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="full">
                                <div className="img-section mt-5">
                                    <img src={img3} width="100%" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            



        </>
    )
}

export default Home;
