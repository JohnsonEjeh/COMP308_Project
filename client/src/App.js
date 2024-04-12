import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
//
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./App.css";
import SignUp from "./components/SignUp";
import AddVitalSignForm from "./components/AddVitalSignForm";
import PatientVitalSignsPage from "./components/PatientVitalSignsPage";
import Checklist from "./components/Checklist";
import ChecklistResults from "./components/ChecklistResults";

import Login from "./components/Login";
import AddEmergency from "./components/AddEmergency";
import SendDailyTip from "./components/SendDailyTip";
import EmergencyAlerts from "./components/EmergencyAlerts"
import PatientDailyTips from "./components/PatientDailyTips";
//
function App() {
  return (
    <Router>

      <header className="mb-5 pt-4 pb-4">
      <div className="container">
        <div className="col-lg-12 text-center">
          <a className="mt-1 h2 text-dark" href="/">
            Group 4 Vital Sign Monitoring System
          </a>
          <img className="mx-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTokM4qrGNH7XFk-ZqmsZoUrlyaWq4ezAmjVw&s" />         
        </div>
        {/* <img className="text-center" src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" /> */}
           
      </div>
      </header>
      
      <br />
      <br />

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/create">
          <SignUp />
        </Route>
        <Route render={() => <AddVitalSignForm />} path="/add_vital_sign/:id" />
        <Route render={() => <AddVitalSignForm />} path="/add_vital_sign" />
        <Route
          render={() => <PatientVitalSignsPage />}
          path="/patient_vital_signs/:id"
        />
        <Route
          render={() => <PatientVitalSignsPage />}
          path="/patient_vital_signs"
        />
        <Route
          render={() => <SendDailyTip />}
          path="/patient_daily_tip/:id"
        />
        <Route
          render={() => <AddEmergency />}
          path="/add_emergency"
        />
        
        <Route
          render={() => <EmergencyAlerts />}
          path="/emergenies_alerts"
        />
        <Route
          render={() => <PatientDailyTips />}
          path="/patient_daily_tips/:id"
        />
        <Route component={Checklist} path="/checklist" />
        <Route component={ChecklistResults} path="/checklistResults" />
      </Switch>
      <Route path="/" exact>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <Row>
                <Col>
                  <Button className="bg-success" href="/create">Register</Button>
                </Col>
                <Col>
                  <Button className="bg-success" href="/login">Log In</Button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Route>
      <footer className="fixed-bottom footer text-center text-lg-start text-muted p-4 card-footer ">©2024 Group 4 Vital Sign Monitoring System </footer>
    </Router>
  );
}
export default App;
