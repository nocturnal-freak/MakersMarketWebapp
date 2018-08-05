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
import getInvoled from "./images/get.png"
import background from "./images/Background.png"
import Stalls from "./images/Stalls.png"
import StallIcons from "./images/StallIcons.png"
import Aboutus from "./images/AboutUs.png"
import Logo from "./images/Logo.png"
import Comingsoon from "./images/Comingsoon.png"


const aws = require('aws-sdk')

const Styles = {
	mainLogo: {
		height: 'auto',
		width: '100%'
	},
	heading: {
		width: "100%"
	},
	contact: {
		color: "black",
		fontFamily: "Grind Zero"
	},
	headingIcons: {
		marginTop: "-52px",
		width: "75%"
	}
}

class AppComponent extends React.Component {

    /*
    * Defining the Routes for the application
    */
		constructor(props){
			super(props);
			this.state={contact_email:""}
		}
		handleChange(e){
			this.setState({contact_email:e.target.value})
		}
		  sendMail=()=> {

				aws.config.update({
				  accessKeyId: "AKIAJL4PARAP76H6O2CA",
				  secretAccessKey: "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",
				  region: "us-east-1"
				});
				const ses = new aws.SES()
				var params = {
				  Destination: {
				    ToAddresses: ['info@makersmarket.co.in']
				  },
				  Source: 'info@makersmarket.co.in',
				  Message: {
				    Body: {
				      Text: {
				        Charset: 'UTF-8',
				        Data: this.state.contact_email
				      }
				    },
				    Subject: {
				      Data: 'Hey, I wanted to contact you!'
				    }
				  }
				}
				ses.sendEmail(params, (err, data) => {
				  if (err) {
				    console.log(err)
				  }

				  console.log('email sent');
					this.setState({contact_email: ""})
				})


			}


	render() {
		return (
			<div className='main-background'>

				<section className='text-center' ref={(section) => { this.stalls = section; }}>
					<nav className="navbar navbar-expand-lg navbar-light bg-light static-top fixed-top text-uppercase">
			      <div className="container">
			        <a className="navbar-brand js-scroll-trigger" href="#">Home</a>
			        <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">

			          <i className="fa fa-bars"></i>
			        </button>
			        <div className="collapse navbar-collapse" id="navbarResponsive">
			          <ul className="navbar-nav ml-auto">
			            <li className="nav-item mx-0 mx-lg-1">
			              <div className="pointer-nav nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" onClick={() => scrollToComponent(this.stalls, { offset:-70, align: 'top', duration: 1500})}>Stalls</div>
			            </li>
			            <li className="nav-item mx-0 mx-lg-1">
			              <div className="pointer-nav nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" onClick={() => scrollToComponent(this.maps, { offset: -70, align: 'top', duration: 1500})}  >Maps</div>
			            </li>
			            <li className="nav-item mx-0 mx-lg-1">
			              <div className="pointer-nav nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" onClick={() => scrollToComponent(this.about, { offset:-70, align: 'top', duration: 1500})}>About</div>
			            </li>
			            <li className="nav-item mx-0 mx-lg-1">
			              <div className="pointer-nav nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" onClick={() => scrollToComponent(this.contact, { offset:-70, align: 'top', duration: 1500})}>Contact Us</div>
			            </li>
			            <li className="nav-item mx-0 mx-lg-1">
			              <div className="pointer-nav nav-link py-3 px-0 px-lg-3  js-scroll-trigger" onClick={() => scrollToComponent(this.signup, { offset:-70, align: 'top', duration: 1500})}>Sign up</div>
			            </li>
			            <li className="nav-item mx-0 mx-lg-1">
			              <div className="pointer-nav nav-link py-3 px-0 px-lg-3  js-scroll-trigger" onClick={() => scrollToComponent(this.signin, { offset:-70, align: 'top', duration: 1500})}>Sign In</div>
			            </li>
			      </ul>
			        </div>
			      </div>
			    </nav>
					<img className="mb-4 mainLogo-ak" style={Styles.heading} src={Logo} />
					<img className="mb-4" style={Styles.heading} src={Comingsoon} />



				</section>


				<section className='text-center' ref={(section) => { this.stalls = section; }}>
					<img className="mb-4" style={Styles.heading} src={Stalls} />
					<h2 style={Styles.contact} className="mb-4 col-md-8">VENDOR'S STALL </h2>
					<h5 className="marker col-md-10 col-lg-8 col-xl-7 mx-auto">
					You've got a passion. We want to help you share it. We provide everything you need to make your event a success with a simple, easy to use platform.
	Selling tickets that aren't free? Our fees are low and can be passed through to the ticket buyer, making it completely free for you
</h5>
						<img className="mb-4" style={Styles.headingIcons} src={StallIcons} />
						<div className="col-12 col-md-12 mb-2 mb-md-0 text-center">
							<button className="btn btn-primary" type="submit" onClick={this.sendMail}>Send!</button>
						</div>

				</section>
				<section className='text-center ' ref={(section) => { this.stalls = section; }}>

					<h2 style={Styles.contact} className="mb-4 col-md-8">ARTIST'S </h2>
					<h5 className="mb-4 marker col-md-10 col-lg-8 col-xl-7 mx-auto">
					You've got a passion. We want to help you share it. We provide everything you need to make your event a success with a simple, easy to use platform.
	Selling tickets that aren't free? Our fees are low and can be passed through to the ticket buyer, making it completely free for you
</h5>
						<img className="" style={Styles.headingIcons} src={StallIcons} />
						<div className="col-12 col-md-12 mb-2 mb-md-0 text-center">
							<button className="btn btn-primary" type="submit" onClick={this.sendMail}>Send!</button>
						</div>

				</section>





				<section className="text-center" ref={(section) => { this.about = section; }}>
					<div className="container">
							<img className="" style={Styles.heading} src={Aboutus} />
						<div className="col-md-10 marker col-lg-8 col-xl-7 mx-auto">
							You've got a passion. We want to help you share it. We provide everything you need to make your event a success with a simple, easy to use platform.
			Selling tickets that aren't free? Our fees are low and can be
						</div>
					</div>
				</section>
				<img className="mb-4" style={Styles.heading} src={getInvoled} />
				<section className="" ref={(section) => { this.contact = section; }}>

					<div className="overlay"></div>
					<div className="container">
						<div className="row">
							<div className="col-xl-9 mx-auto">


							</div>
							<div className="col-md-10 col-lg-8 col-xl-7 mx-auto">

										<div className="col-12 col-md-12 mb-2 mb-md-0" style={{'margin-bottom':'2px'}}>
											<h2 style={Styles.contact} className="mb-4">VENDOR / SPONSOR </h2>
											<input type="email" className="rounder form-control form-control-lg" placeholder="Name :"
											onChange={e => this.handleChange(e)}
											value={this.state.contact_email}
											/>
											<input type="email" className="rounder form-control form-control-lg" placeholder="Email :"
											onChange={e => this.handleChange(e)}
											value={this.state.contact_email}
											/>
											<input type="email" className="rounder form-control form-control-lg" placeholder="Phone Number :"
											onChange={e => this.handleChange(e)}
											value={this.state.contact_email}
											/>
											<textarea
												className="rounder form-control form-control-lg" placeholder="Tell about you here......"
												onChange={e => this.handleChange(e)}
												value={this.state.contact_email}

											/>
										</div>
										<div className="col-12 col-md-12 mb-2 mb-md-0">
											<button className="btn btn-block btn-lg btn-primary" type="submit" onClick={this.sendMail}>Send!</button>
										</div>

							</div>
							<div className="col-md-10 col-lg-8 col-xl-7 mx-auto">

										<div className="col-12 col-md-12 mb-2 mb-md-0" style={{'margin-bottom':'2px'}}>
											<h2 style={Styles.contact} className="mb-4">VOLUNTEER </h2>
											<input type="email" className="rounder form-control form-control-lg" placeholder="Name :"
											onChange={e => this.handleChange(e)}
											value={this.state.contact_email}
											/>
											<input type="email" className="rounder form-control form-control-lg" placeholder="Email :"
											onChange={e => this.handleChange(e)}
											value={this.state.contact_email}
											/>
											<input type="email" className="rounder form-control form-control-lg" placeholder="Phone Number :"
											onChange={e => this.handleChange(e)}
											value={this.state.contact_email}
											/>
											<textarea
												className="rounder form-control form-control-lg" placeholder="Tell about you here......"
												onChange={e => this.handleChange(e)}
												value={this.state.contact_email}

											/>
										</div>
										<div className="col-12 col-md-12 mb-2 mb-md-0">
											<button className="btn btn-block btn-lg btn-primary" type="submit" onClick={this.sendMail}>Send!</button>
										</div>

							</div>

						</div>
					</div>
				</section>



				<footer className="footer text-center">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<ul className="list-inline mb-0">
									<li className="list-inline-item mr-3">
										<a href="#">
											<i className="fa fa-facebook fa-2x fa-fw"></i>
										</a>
									</li>
									<li className="list-inline-item mr-3">
										<a href="#">
											<i className="fa fa-google fa-2x fa-fw"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="#">
											<i className="fa fa-instagram fa-2x fa-fw"></i>
										</a>
									</li>
								</ul>
								<ul className="list-inline mb-2">
									<li className="list-inline-item">
										<a style={Styles.contact} href="#">About</a>
									</li>
									<li className="list-inline-item">&sdot;</li>
									<li className="list-inline-item">
										<a style={Styles.contact} href="#">Contact</a>
									</li>
									<li className="list-inline-item">&sdot;</li>
									<li className="list-inline-item">
										<a style={Styles.contact} href="#">Terms of Use</a>
									</li>
									<li className="list-inline-item">&sdot;</li>
									<li className="list-inline-item">
										<a style={Styles.contact} href="#">Privacy Policy</a>
									</li>
								</ul>
								<p className="text-muted marker small mb-4 mb-lg-0">&copy; Makers Market 2018. All Rights Reserved @nocturnal-techies.</p>
							</div>
							<div className="col-lg-6 h-100 text-center text-lg-right my-auto">

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
