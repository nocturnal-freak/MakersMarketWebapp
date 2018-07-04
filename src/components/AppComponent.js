import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
/*
* Importing components
*/
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Home from './Home';
import NotFound from './NotFound';


class AppComponent extends React.Component {
    /*
    * Defining the Routes for the application
    */
	render() {
		return (
			<div className='container'>
				<div className='text-center'>
					<h1> Single page application in ReactJs</h1>
				</div>
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<ul className="nav navbar-nav">
							<li>
								<Link to='/'>
									<div>Home</div>
								</Link>
							</li>
							<li>
								<Link to='/contact-us'>
									<div>Contact Us</div>
								</Link>
							</li>
							<li>
								<Link to='/about-us'>
									<div>About Us</div>
								</Link>
							</li>
						</ul>
					</div>
				</nav>
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
