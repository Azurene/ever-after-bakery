import React from 'react';

function BakedGoods(){
    return (
        <div>
            <h1>Baked Goods</h1>

            <section className="gallery row" id="gallery">
    <h2 className="fw-bold text-center">Gallery</h2>
    {/* <!-- Insert gallery stuff here --> */}
    <div id="myCarousel" className="carousel slide" data-bs-ride="true">
        {/* <!-- Indicators --> */}
        <ol className="carousel-indicators">
            <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="4"></li>
        </ol>

        {/* <!-- Wrapper for slides --> */}
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-50 mx-auto" src={require('../../assets/cakes/IMG_7872.jpg')} alt="bakedgoods0" />
                <div className="carousel-caption">
                    <h3>Wheel</h3>
                    <p>Professional </p>
                </div>
            </div>

            <div className="carousel-item">
                <img className="d-block w-50 mx-auto" src={require('../../assets/specialty/IMG_7899.jpg')} alt="bakedgoods" />
                <div className="carousel-caption">
                    <h3>Exterior</h3>
                    <p>Targeting</p>
                </div>
            </div>

            <div className="carousel-item">
                <img className="d-block w-50 mx-auto pics" src={require('../../assets/specialty/IMG_7895.jpg')} alt="backedgoods1" />
                <div className="carousel-caption">
                    <h3>Wax</h3>
                    <p>Protecting</p>
                </div>
            </div>

            <div className="carousel-item">
                <img className="d-block w-50 mx-auto pics" src={require('../../assets/cakes/IMG_7889.jpg')} alt="bakedgoods2" />
                <div className="carousel-caption">
                    <h3>Buffer</h3>
                    <p>Buffer</p>
                </div>
            </div>

            <div className="carousel-item">
                <img className="d-block w-50 mx-auto pics" src={require('../../assets/specialty/IMG_7870.jpg')} alt="backedgoods3" />
                <div className="carousel-caption">
                    <h3>Engine</h3>
                    <p>Spotless</p>
                </div>
            </div>

        </div>

        {/* <!-- Left and right controls --> */}
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
</section>

            <div>
                <h2>Cakes:</h2>
                {/* cakes */}
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/cakes/IMG_7837.jpg`)}
                    alt="cake1"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/cakes/IMG_7839.jpg`)}
                    alt="cake2"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/cakes/IMG_7841.jpg`)}
                    alt="cake3"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/cakes/IMG_7844.jpg`)}
                    alt="cake4"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/cakes/IMG_7845.jpg`)}
                    alt="cake5"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/cakes/IMG_7846.jpg`)}
                    alt="cake6"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/cakes/IMG_7849.jpg`)}
                    alt="cake7"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/cakes/IMG_7851.jpg`)}
                    alt="cake8"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/cakes/IMG_7854.jpg`)}
                    alt="cake9"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/cakes/IMG_7855.jpg`)}
                    alt="cake10"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
            
            </div>

            <div>
                <h2>Cookies:</h2>
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/cookies/IMG_7833.jpg`)}
                    alt="cookie1"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/cookies/IMG_7834.jpg`)}
                    alt="cookie2"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/cookies/IMG_7836.jpg`)}
                    alt="cookie3"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/cookies/IMG_7838.jpg`)}
                    alt="cookie4"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/cookies/IMG_7840.jpg`)}
                    alt="cookie5"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/cookies/IMG_7850.jpg`)}
                    alt="cookie6"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                 <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/cookies/IMG_7852.jpg`)}
                    alt="cookie7"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/cookies/IMG_7853.jpg`)}
                    alt="cookie8"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/cookies/IMG_7856.jpg`)}
                    alt="cookie9"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/cookies/IMG_7857.jpg`)}
                    alt="cookie10"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
            </div>

            <div>
                <h2>Other:</h2>
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/other/IMG_7847.jpg`)}
                    alt="other1"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/other/IMG_7848.jpg`)}
                    alt="other2"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/other/IMG_7860.jpg`)}
                    alt="other3"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/other/IMG_7880.jpg`)}
                    alt="other4"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/other/IMG_7894.jpg`)}
                    alt="other6"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
            </div>

            <div>
                <h2>Specialty Items:</h2>
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/specialty/IMG_7835.jpg`)}
                    alt="specialty1"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/specialty/IMG_7869.jpg`)}
                    alt="specialty2"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                 <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/specialty/IMG_7843.jpg`)}
                    alt="specialty3"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/specialty/IMG_7865.jpg`)}
                    alt="specialty4"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/specialty/IMG_7868.jpg`)}
                    alt="specialty5"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/specialty/IMG_7904.jpg`)}
                    alt="specialty6"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/specialty/IMG_7903.jpg`)}
                    alt="specialty7"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/specialty/IMG_7902.jpg`)}
                    alt="specialty8"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/specialty/IMG_7901.jpg`)}
                    alt="specialty9"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
                <img
                    //src assignd required expression | incremental naming of the imgs using i
                    // default property --> is where the img has been saved. To render img, default property must be invoked  
                    src={require(`../../assets/specialty/IMG_7900.jpg`)}
                    alt="specialty10"
                    className="img-thumbnail"
                    style={{width:"20%"}}
                />
            </div>

            <p>"Everything I make is custom. I take what ideas my clients have and turn them into delicious edible art pieces." -Wendy R.</p>

        </div>

        
        
    )
}

export default BakedGoods;