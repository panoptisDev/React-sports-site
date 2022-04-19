import React from "react";
import { Card } from "react-bootstrap";

const Blogs = () => {
  return (
    <div id="blogs" className="container my-4">
      <h2 className="text-center text-primary my-5">Blogs</h2>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Card
          className="col  mx-auto"
          border="secondary"
          style={{ width: "18rem" }}
        >
          <Card.Header>
            Difference between authorization and authentication
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Authentication verifies who the user is.We use authentication
              through passwords, one-time pins, biometric information, and other
              information which are provided or entered by the
              user.Authentication is visible to and user can partially change
              it.
              <br />
              In Authorization it determines what resources a user can access.Authorization always takes place after authentication.Authorization is not visible to or changeable by the user.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="col  mx-auto"
          border="secondary"
          style={{ width: "18rem" }}
        >
          <Card.Header>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Card.Header>
          <Card.Body>
            <Card.Text>
              At this moment i am using firebase authentication.Like google,email,github etc sign in,authentication,reset password 
              we can use firebase for Cloud Messaging, hosting, realtime database, storage etc
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="col  mx-auto"
          border="secondary"
          style={{ width: "18rem" }}
        >
          <Card.Header>
            What other services does firebase provide other than authentication
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Blogs;
