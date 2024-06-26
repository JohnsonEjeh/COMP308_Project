import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';

//import ReactDOM from 'react-dom';
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

import axios from "axios";
function NursePage(props) {
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  // const { screen, setScreen } = props;
  const [screen, setScreen] = useState("auth");

  const deleteCookie = async () => {
    try {
      await axios.get('http://localhost:5000/signout', {withCredentials: true});
      setScreen('auth');
      props.history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log("start");
    axios
      .get("http://localhost:5000/patients", { withCredentials: true })
      .then((result) => {
        console.log("result.data:", result.data);
        //check if the user has logged in
        setData(result.data);
        setShowLoading(false);
    })
    .catch((error) => {
        console.log("error in fetchData:", error);
        setShowLoading(false);
      });
  }, []);
  return (
    <div className="container">
      <h3>Welcome Nurse {props.nurse.fullName}!</h3>
      <Button variant="danger" className="my-1" href="/emergenies_alerts">View Emergency Alerts</Button>
      {showLoading && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      <h3>Here are patients: </h3>
      <ListGroup>
        {data.screen != "auth" && data.length !== 0 &&data.map((patient, idx) => (
          <ListGroup.Item key={idx}>
            <div className="d-flex justify-content-between">
              {patient.fullName}
              <div>
                <Button  variant="primary" className="mr-1 bg-success"  href={"/patient_vital_signs/" + patient._id}>
                  Check Vital Signs
                </Button>
                <Button  variant="primary"  className="mr-1 bg-success" href={"/patient_daily_tip/" + patient._id}>
                  Send Daily Tip
                </Button>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button className="mr-1 bg-success mt-3" variant="primary" href="/checklist">
        Check Symptoms
      </Button> &nbsp;
      <Button className="mr-1 bg-success mt-3" variant="primary" onClick={deleteCookie}>
        Log Out
      </Button>
    </div>
  );
}

export default withRouter(NursePage);
