import React, { useState } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";

const Setting = () => {
  const [newMsg, setNewMsg] = useState(true);
  return (
    <Tabs defaultTab="general" vertical>
      <TabList className="tab-width height">
        <Tab tabFor="general">General</Tab>
        <Tab tabFor="help">Help us grow</Tab>
        <Tab tabFor="support">Support</Tab>
        <Tab tabFor="about">About</Tab>
      </TabList>

      <TabPanel tabId="general" className="w-100">
        <div className="row">
          <div className="col-lg-6">
            <div className="m-4 p-5 border box d-flex pointer">
              <span className="fa fa-lock fa-2x mr-2 color "></span>{" "}
              <h4>Change Password</h4>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="m-4 p-5 border box d-flex pointer">
              <span className="fa fa-bell fa-2x mr-2 color"></span>{" "}
              <h4>New message notification</h4>
              <div className="custom-control custom-switch ml-2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitches"
                  checked={newMsg}
                />
                <label
                  className="custom-control-label"
                  htmlFor="customSwitches"
                  onClick={() => setNewMsg(!newMsg)}
                ></label>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>

      <TabPanel tabId="help" className="w-100">
        <div className="row">
          <div className="col-lg-6">
            <div className="m-4 p-5 border box d-flex pointer">
              <span className="fa fa-address-card fa-2x mr-2 color"></span>
              <h4>Invite Friends</h4>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="m-4 p-5 border box d-flex pointer">
              <span className="fa fa-star-half-o fa-2x mr-2 color"></span>
              <h4>Rate Us On PlayStore</h4>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="m-4 p-5 border box d-flex pointer">
              <span className="fa fa-exclamation-triangle fa-2x mr-2 color"></span>
              <div>
                <h4>Send Us Feedback</h4>
                <p>Got any queries? We are happy to help!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="m-4 p-5 border box d-flex pointer">
              <span className="fa fa-list fa-2x mr-2 color"></span>{" "}
              <div>
                <h4>Request Feature</h4>
                <p>Want any feature to be added, Tell us</p>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>

      <TabPanel tabId="support" className="w-100">
        <div className="row">
          <div className="col-lg-6">
            <div className="m-4 p-5 border box d-flex pointer">
              <span className="fa fa-question fa-2x mr-2 color"></span>
              <div>
                <h4>FAQ</h4>
                <p>View frequently asked questions</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="m-4 p-5 border box d-flex pointer">
              <span className="fa fa-comments fa-2x mr-2 color"></span>
              <h4>Chat Support</h4>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="m-4 p-5 border box d-flex pointer">
              <span className="fa fa-phone fa-2x mr-2 color"></span>
              <h4>Call Us</h4>
            </div>
          </div>
        </div>
      </TabPanel>

      <TabPanel tabId="about" className="w-100">
        <div className="text-center p-3">
          <h3>About</h3>
          <p>
            A material metaphor is the unifyingtheory of a rationalized space
            and a system of motion. The material is grounded in tactile reality,
            inspired by the study of paper and ink, yet technologically advanced
            and open to imagination and magic.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="m-4 p-5 border box d-flex pointer">
              <span className="fa fa-shield fa-2x mr-2 color"></span>
              <h4>Privacy Policy</h4>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="m-4 p-5 border box d-flex pointer">
              <span className="fa fa-clone fa-2x mr-2 color"></span>
              <h4>Terms & Condition</h4>
            </div>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default Setting;
