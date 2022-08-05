import React from 'react';

function Newsletter() {
    return (
        <section>
            <h1>Upcoming Events</h1>
            <div>
                {/* Logo Cookies */}
                <div>
                    <img
                        //src assignd required expression | incremental naming of the imgs using i
                        // default property --> is where the img has been saved. To render img, default property must be invoked  
                        src={require(`../../assets/images/newsletter/newsletterOne.webp`)}
                        alt="logoCookies"
                        className="img-thumbnail"
                        style={{ width: "20%" }}
                    />
                    <h2>Logo Cookies</h2>
                    <p>Want to give the attendees at your corporate event or conference a memento that they won’t soon forget!?
                        A cookie with your logo on it is an effective way to get your guests talking at their table.
                        Trying to increase your brand recognition?
                        Try this unique method thats surprisingly delicious and will get your customers to return for more! </p>
                </div>

                {/* Warner Center Park */}
                <div>
                    <img
                        //src assignd required expression | incremental naming of the imgs using i
                        // default property --> is where the img has been saved. To render img, default property must be invoked  
                        src={require(`../../assets/images/newsletter/newsletterTwo.webp`)}
                        alt="parkMovies"
                        className="img-thumbnail"
                        style={{ width: "20%" }}
                    />
                    <h2>Movies at Warner Center Park!</h2>
                    <p>Address: 5800 Topanga Canyon Blvd. Woodland Hills 91367</p>
                    <p>Info: Ever Saturday in August at 7:30pm catch a FREE movie in the park.</p>
                </div>

                 {/* Back to School Cookies */}
                 <div>
                    <img
                        //src assignd required expression | incremental naming of the imgs using i
                        // default property --> is where the img has been saved. To render img, default property must be invoked  
                        src={require(`../../assets/images/newsletter/newsletterThree.webp`)}
                        alt="schoolCookies"
                        className="img-thumbnail"
                        style={{ width: "20%" }}
                    />
                    <h2>Back to School Cookies</h2>
                    <p>Check out our Back to School cookies available to order now! Gifts for teachers and students!</p>
                </div>

                {/* Farmers Market */}
                <div>
                    <h2>Check Us Throughout the Week at the Farmer's Market!</h2>
                    <img
                        //src assignd required expression | incremental naming of the imgs using i
                        // default property --> is where the img has been saved. To render img, default property must be invoked  
                        src={require(`../../assets/images/newsletter/newsletterFarm1.webp`)}
                        alt="farmersMarket"
                        className="img-thumbnail"
                        style={{ width: "20%" }}
                    />
                    <img
                        //src assignd required expression | incremental naming of the imgs using i
                        // default property --> is where the img has been saved. To render img, default property must be invoked  
                        src={require(`../../assets/images/newsletter/newsletterFarm2.webp`)}
                        alt="farmersMarket"
                        className="img-thumbnail"
                        style={{ width: "20%" }}
                    />
                    <img
                        //src assignd required expression | incremental naming of the imgs using i
                        // default property --> is where the img has been saved. To render img, default property must be invoked  
                        src={require(`../../assets/images/newsletter/newsletterFarm3.webp`)}
                        alt="farmersMarket"
                        className="img-thumbnail"
                        style={{ width: "20%" }}
                    />
                    <img
                        //src assignd required expression | incremental naming of the imgs using i
                        // default property --> is where the img has been saved. To render img, default property must be invoked  
                        src={require(`../../assets/images/newsletter/newsletterFarm4.webp`)}
                        alt="farmersMarket"
                        className="img-thumbnail"
                        style={{ width: "20%" }}
                    />
                    <img
                        //src assignd required expression | incremental naming of the imgs using i
                        // default property --> is where the img has been saved. To render img, default property must be invoked  
                        src={require(`../../assets/images/newsletter/newsletterFarm5.webp`)}
                        alt="farmersMarket"
                        className="img-thumbnail"
                        style={{ width: "20%" }}
                    />
                    
                </div>
            </div>
        </section>

    )
}

export default Newsletter;