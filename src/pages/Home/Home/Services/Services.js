import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import './Services.css'

const Services = () => {
    return (
        <>
            <Navigation></Navigation>

            <h2 className="p-2 bg-dark text-white fw-bold" style={{ marginTop: "100px" }} >Our More Service</h2>
            <div className="container my-5 " style={{ marginTop: "100px", marginBottom: '100px' }} >
                <div className="row g-2">
                    <div className="col-lg-6 ">
                        <div className="p-3">
                            <img className='img-fluid' src="https://images-ext-2.discordapp.net/external/uSfRg68xZfcCOm5SE8435XhWXFwUrqVmU3ZjInZqIMA/%3Fb%3D1%26k%3D20%26m%3D1287311873%26s%3D612x612%26w%3D0%26h%3DX0ecSKTIi_0nCj7Uf7Icq8PkRgL7Lwz5ZLjAHGs0aUg%3D/https/media.istockphoto.com/vectors/young-man-holds-out-an-umbrella-from-the-rain-to-another-in-a-state-vector-id1287311873?width=300&height=300" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6" style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
                        <div className="p-3">
                            <h1>Help</h1>
                            <p className='fw-bold' >We are There for you 24/7. </p>
                            <p className='fw-bold' > if you need any help or quarry bout us then Mail us </p>
                            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new"> <button type="button" class="btn btn-warning"> Contact US </button> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5 " style={{ marginTop: 100, marginBottom: 100 }} >
                <div className="row g-2">
                    <div className="col-lg-6" style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
                        <div className="p-3">
                            <h1>Help</h1>
                            <p className='fw-bold' >We are There for you 24/7. </p>
                            <p className='fw-bold' > if you need any help or quarry bout us then Mail us </p>
                            <a href="01970495849"> <button type="button" class="btn btn-danger"> Contact US </button> </a>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="p-3">
                            <img className='img-fluid' src="https://images-ext-1.discordapp.net/external/rxNIvv1dF-CSKnfhhwaudO-AR6KgLMlaMnMOe0sIFeU/%3Fs%3D612x612/https/media.gettyimages.com/vectors/hospital-emergency-room-medical-healthcare-facility-building-vector-id1216623966?width=400&height=271" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Services;