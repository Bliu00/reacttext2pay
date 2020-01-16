import React from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';

const TablePanel = (props) => {
  const data_panel = {
    rows: [
      {
        1: "Chipotle charged Julia Liu",
        2 : "Burritos"
      },
      {
        "1": "Unibowl charged Benji",
        "2": "Hot Pot and Boba"
      },
      {
        "1": "Hana Kitchen charged Jeep",
        "2": "BEEEF BOOWL BOIII"
      },
      {
        "1": "Albertsons charged Julia Liu",
        "2": "Ciroc"
      },
      {
        "1": "Albertsons charged Julia Liu",
        "2": "Another Ciroc"
      },
      {
        "1": "Albertsons charged Julia Liu",
        "2": "Another one..."
      },
      {
        "1": "Albertsons charged Julia Liu",
        "2": "Oh boy"
      }
    ]
  };

  return(
    
    <MDBCard narrow style={{marginTop:"25px",width: "80%",display:"inline-block"}}>
      <MDBCardHeader className="view view-cascade gradient-card-header info-color d-flex justify-content-between align-items-center py-2 mx-0 mb-0">
        <a href="#" className="white-text mx-5">Transaction History</a>
        <div>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            Me
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            Friends
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            Public
          </MDBBtn>
        </div>
      </MDBCardHeader>
      <MDBCardBody cascade>
        <MDBTable btn fixed style={{marginTop:"-21px"}} >
          <MDBTableBody rows={data_panel.rows} />
        </MDBTable>
      </MDBCardBody>
    </MDBCard>
  );
};

export default TablePanel;