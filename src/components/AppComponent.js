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

				<div >
				<header class="masthead text-white text-center">

				</header>
				</div>

				</div>


		)
	}

}

export default AppComponent;
