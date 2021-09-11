import React from 'react'
import 'boxicons'
// import { Link } from "react-router-dom";


function Footer() {
	return (
		<div>
			<footer className="text-white py-4 bg-dark" height="10">
				<div className="container">
					<div className="row">
						
						{/* <Link to="/" className="col-12 col-md-3 d-flex align-items-center justify-content-center"> */}
						<a href="/" className="col-12 col-md-3 d-flex align-items-center justify-content-center">
							<img src="/white.png" className="mx-2" alt="logo" height="100" />
						</a>	
						{/* </Link> */}
						<ul className="col-12 col-md-3 list-unstyled">
							<li className="font-weight-bold b-2">RRSS</li>
							<li className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nisi nam enim perspiciatis, et iste voluptate illum mollitia consectetur quidem?
							</li>
						</ul>
						<ul className="col-12 col-md-3 d-flex align-items-center justify-content-center">
							<li className="d-flex justify-content-between">
								<box-icon className='mr-5' type='logo' name='facebook-circle' size='lg' color="white"></box-icon>
								<box-icon name='youtube' color="white"  size='lg'type='logo' ></box-icon>
								<box-icon name="rocket" color="white" size='lg'></box-icon>
								<box-icon name='amazon' color="white" size='lg' type='logo' ></box-icon>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer
