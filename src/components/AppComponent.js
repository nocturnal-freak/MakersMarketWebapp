import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Home from './Home';
import NotFound from './NotFound';
import "./Style/index.css"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import scrollToComponent from 'react-scroll-to-component';
import makersmarket from "./images/main.jpeg"

const Styles = {
	mainLogo: {
		height: 'auto',
		width: '100%'
	}
}
class AppComponent extends React.Component {
    /*
    * Defining the Routes for the application
    */
		componentDidMount() {

 }
	render() {
		return (
			<div className=''>
				<nav className="navbar navbar-expand-lg navbar-light bg-light static-top fixed-top text-uppercase">
		      <div className="container">
		        <a className="navbar-brand" href="#">Home</a>
		        <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">

		          <i className="fa fa-bars"></i>
		        </button>
		        <div className="collapse navbar-collapse" id="navbarResponsive">
		          <ul className="navbar-nav ml-auto">
		            <li className="nav-item mx-0 mx-lg-1">
		              <div className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" onClick={() => scrollToComponent(this.stalls, { offset:-70, align: 'top', duration: 1500})}>Stalls</div>
		            </li>
		            <li className="nav-item mx-0 mx-lg-1">
		              <div className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" onClick={() => scrollToComponent(this.maps, { offset: -70, align: 'top', duration: 1500})}  >Maps</div>
		            </li>
		            <li className="nav-item mx-0 mx-lg-1">
		              <div className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" onClick={() => scrollToComponent(this.about, { offset:-70, align: 'top', duration: 1500})}>About</div>
		            </li>
		            <li className="nav-item mx-0 mx-lg-1">
		              <div className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" onClick={() => scrollToComponent(this.contact, { offset:-70, align: 'top', duration: 1500})}>Contact Us</div>
		            </li>
		            <li className="nav-item mx-0 mx-lg-1">
		              <div className="nav-link py-3 px-0 px-lg-3  js-scroll-trigger" onClick={() => scrollToComponent(this.signup, { offset:-70, align: 'top', duration: 1500})}>Sign up</div>
		            </li>
		            <li className="nav-item mx-0 mx-lg-1">
		              <div className="nav-link py-3 px-0 px-lg-3  js-scroll-trigger" onClick={() => scrollToComponent(this.signin, { offset:-70, align: 'top', duration: 1500})}>Sign In</div>
		            </li>
		      </ul>
		        </div>
		      </div>
		    </nav>

				<div className="masthead text-white text-center">
					<img style={Styles.mainLogo} src={makersmarket} />

				</div>
				<section className='stalls' ref={(section) => { this.stalls = section; }}>Violet
Group of Monuments at Hampi
UNESCO World Heritage site
Hampi virupaksha temple.jpg
Location	Ballari district, Karnataka, India
Includes	Virupaksha Temple
Criteria	Cultural: i, iii, iv
Reference	241
Inscription	1986 (10th Session)
Endangered	1999–2006
Area	4,187.24 ha
Buffer zone	19,453.62 ha
Website	Archaeological Survey of India - Hampi
Coordinates	15°20′04″N 76°27′44″E
Hampi is located in IndiaHampi
Location of Hampi
Show map of India
Show map of Karnataka
Show all
Hampi, also referred to as the Group of Monuments at Hampi, is a UNESCO World Heritage Site located in east-central Karnataka, India.[1] It became the centre of the Hindu Vijayanagara Empire capital in the 14th century.[2] Chronicles left by Persian and European travellers, particularly the Portuguese, state Hampi was a prosperous, wealthy and grand city near the Tungabhadra River, with numerous temples, farms and trading markets. By 1500 CE, Hampi-Vijayanagara was the world's second-largest medieval-era city after Beijing, and probably India's richest at that time, attracting traders from Persia and Portugal.[3][4] The Vijayanagara Empire was defeated by a coalition of Muslim sultanates; its capital was conquered, pillaged and destroyed by sultanate armies in 1565, after which Hampi remained in ruins.[2][5][6]

Located in Karnataka near the modern-era city of Hosapete, Hampi's ruins are spread over 4,100 hectares (16 sq mi) and it has been described by UNESCO as an "austere, grandiose site" of more than 1,600 surviving remains of the last great Hindu kingdom in South India that includes "forts, riverside features, royal and sacred complexes, temples, shrines, pillared halls, mandapas, memorial structures, water structures and others".[7] Hampi predates the Vijayanagara Empire; there is evidence of Ashokan epigraphy, and it is mentioned in the Ramayana and the Puranas of Hinduism as Pampaa Devi Tirtha Kshetra.[2][8] Hampi continues to be an important religious centre, housing the Virupaksha Temple, an active Adi Shankara-linked monastery and various monuments belonging to the old city.[5][9]
The Vijayanagara Empire built its capital around Hampi, calling it Vijayanagara. They expanded the infrastructure and temples. According to Nicholas Gier and other scholars,[3] by 1500 CE Hampi-Vijayanagara was the world's second-largest medieval-era city after Beijing, and probably India's richest. Its wealth attracted 16th-century traders from across the Deccan area, Persia and the Portuguese colony of Goa.[4][31] The Vijayanagara rulers fostered developments in intellectual pursuits and the arts, maintained a strong military and fought many wars with sultanates to its north and east. They invested in roads, waterworks, agriculture, religious buildings and public infrastructure. This included, states UNESCO, "forts, riverside features, royal and sacred complexes, temples, shrines, pillared halls, mandapas (halls for people to sit), memorial structures, gateways, check posts, stables, water structures, and more".[7] The site was multi-religious and multi-ethnic; it included Hindu and Jain monuments next to each other. The buildings predominantly followed South Indian Hindu arts and architecture dating to the Aihole-Pattadakal styles, but the Hampi builders also used elements of Indo-Islamic architecture in the Lotus Mahal, the public bath and the elephant stables.[7]

According to historical memoirs left by Portuguese and Persian traders to Hampi, the city was of metropolitan proportions; they called it "one of the most beautiful cities". While prosperous and in infrastructure, the Muslim-Hindu wars between Muslim Sultanates and Vijayanagara Empire continued. In 1565, at the Battle of Talikota, a coalition of Muslim sultanates entered into a war with the Vijayanagara Empire.[7] They captured and b</section>
        <section className='indigo' ref={(section) => { this.Indigo = section; }}>Indigo</section>

        <section className='green' ref={(section) => { this.Green = section; }}>Green</section>

				<section className="testimonials text-center bg-light" ref={(section) => { this.about = section; }}>
		      <div className="container">
		        <h2 className="mb-5">What people are saying...</h2>
		        <div className="row">
		          <div className="col-lg-4">
		            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
		              <img className="img-fluid rounded-circle mb-3" src="img/testimonials-1.jpg" alt="" />
		              <h5>Margaret E.</h5>
		              <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
		            </div>
		          </div>
		          <div className="col-lg-4">
		            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
		              <img className="img-fluid rounded-circle mb-3" src="img/testimonials-2.jpg" alt="" />
		              <h5>Fred S.</h5>
		              <p className="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
		            </div>
		          </div>
		          <div className="col-lg-4">
		            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
		              <img className="img-fluid rounded-circle mb-3" src="img/testimonials-3.jpg" alt="" />
		              <h5>Sarah	W.</h5>
		              <p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
		            </div>
		          </div>
		        </div>
		      </div>
		    </section>
				<section className="call-to-action text-white text-center" ref={(section) => { this.contact = section; }}>
		      <div className="overlay"></div>
		      <div className="container">
		        <div className="row">
		          <div className="col-xl-9 mx-auto">
		            <h2 className="mb-4">Wanna get touch with us? Drop your email now!</h2>
		          </div>
		          <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
		            <form>
		              <div className="form-row">
		                <div className="col-12 col-md-9 mb-2 mb-md-0">
		                  <input type="email" className="form-control form-control-lg" placeholder="Enter your email..." />
		                </div>
		                <div className="col-12 col-md-3">
		                  <button type="submit" className="btn btn-block btn-lg btn-primary">Send!</button>
		                </div>
		              </div>
		            </form>
		          </div>
		        </div>
		      </div>
		    </section>

				<section className='blue features-icons bg-light text-center' ref={(section) => { this.Blue = section; }}>
					<div className="container">
		        <div className="row">
		          <div className="col-lg-4">
		            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
		              <div className="features-icons-icon d-flex">
		                <i className="icon-screen-desktop m-auto text-primary"></i>
		              </div>
		              <h3>Fully Responsive</h3>
		              <p className="lead mb-0">This theme will look great on any device, no matter the size!</p>
		            </div>
		          </div>
		          <div className="col-lg-4">
		            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
		              <div className="features-icons-icon d-flex">
		                <i className="icon-layers m-auto text-primary"></i>
		              </div>
		              <h3>Bootstrap 4 Ready</h3>
		              <p className="lead mb-0">Featuring the latest build of the new Bootstrap 4 framework!</p>
		            </div>
		          </div>
		          <div className="col-lg-4">
		            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
		              <div className="features-icons-icon d-flex">
		                <i className="icon-check m-auto text-primary"></i>
		              </div>
		              <h3>Easy to Use</h3>
		              <p className="lead mb-0">Ready to use with your own content, or customize the source files!</p>
		            </div>
		          </div>
		        </div>
		      </div>
				</section>


				<footer className="footer bg-light">
		      <div className="container">
		        <div className="row">
		          <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
		            <ul className="list-inline mb-2">
		              <li className="list-inline-item">
		                <a href="#">About</a>
		              </li>
		              <li className="list-inline-item">&sdot;</li>
		              <li className="list-inline-item">
		                <a href="#">Contact</a>
		              </li>
		              <li className="list-inline-item">&sdot;</li>
		              <li className="list-inline-item">
		                <a href="#">Terms of Use</a>
		              </li>
		              <li className="list-inline-item">&sdot;</li>
		              <li className="list-inline-item">
		                <a href="#">Privacy Policy</a>
		              </li>
		            </ul>
		            <p className="text-muted small mb-4 mb-lg-0">&copy; Makers Market 2018. All Rights Reserved @nocturnal-techies.</p>
		          </div>
		          <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
		            <ul className="list-inline mb-0">
		              <li className="list-inline-item mr-3">
		                <a href="#">
		                  <i className="fa fa-facebook fa-2x fa-fw"></i>
		                </a>
		              </li>
		              <li className="list-inline-item mr-3">
		                <a href="#">
		                  <i className="fa fa-twitter fa-2x fa-fw"></i>
		                </a>
		              </li>
		              <li className="list-inline-item">
		                <a href="#">
		                  <i className="fa fa-instagram fa-2x fa-fw"></i>
		                </a>
		              </li>
		            </ul>
		          </div>
		        </div>
		      </div>
		    </footer>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about-us' component={AboutUs} />
					<Route path='/contact-us' component={ContactUs} />
					<Route path='*' component={NotFound} />
				</Switch>
			</div>
		)
	}

}

export default AppComponent;
