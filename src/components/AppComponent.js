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
		        <a className="navbar-brand js-scroll-trigger" href="#">Home</a>
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

				<div >
				<header className="masthead text-white text-center">

				</header>
				</div>


				<section className='testimonials text-center bg-light' ref={(section) => { this.stalls = section; }}>
				<h2 className="mb-5">Stalls</h2>
				<h5>
				You've got a passion. We want to help you share it. We provide everything you need to make your event a success with a simple, easy to use platform.
Selling tickets that aren't free? Our fees are low and can be passed through to the ticket buyer, making it completely free for you
				</h5>
				</section>

				


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
