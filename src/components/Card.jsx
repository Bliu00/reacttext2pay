import React, { Component } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


class Card extends Component {
    render(){
        return ( 
            <MDBCol>
                <MDBCard className = "homecard">
                <MDBCardImage className = "img-fluid"
                src = "https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                    <MDBCardBody >
                        <MDBCardTitle > 
                            {this.props.title} 
                        </MDBCardTitle> 
                        <MDBCardText >
                            {this.props.desc}
                        </MDBCardText> 
                        <MDBBtn href = "#" color="info" > 
                            Pay ${this.props.cost} 
                        </MDBBtn> 
                    </MDBCardBody> 
                </MDBCard> 
            </MDBCol>
        );
    }
    
}

export default Card;