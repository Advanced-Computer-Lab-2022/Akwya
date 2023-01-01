import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { Card, Row, Button,Col} from "react-bootstrap";
import CreditCardForm from "./CreditCardForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PaymentComponent.css";
import "./elements.css";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

//config of fonts for the stripe prebuilt elements
const ELEMENTS_OPTIONS = {
    fonts: [
        {
            cssSrc: "https://fonts.googleapis.com/css?family=Roboto",
        },
    ],
};

//component
export default function PaymentComponent(props) {
    //history object for redirects
    let history = useNavigate();

    //render
    return (
        
        //bootstrap card container
        <Card border="primary" id="paymentWidgetContainerCard">

            {/* header and back button */}
            <Card.Header>
                <Row>
                    <Col md="auto">
                        <div class="payment">
                        {/* <Button
                            variant="danger"
                            onClick={() => {
                                history.push("/");
                            }}
                        > */}
                            {/* Back
                        </Button> */}
                        </div>
                    </Col>
                </Row>
            </Card.Header>

            {/* body */}
            <Card.Body>

                {/* Elements Wrapper and checkout form component */}
                <Elements
                    stripe={loadStripe(props.keys.stripe)}
                    options={ELEMENTS_OPTIONS}
                >
                    <CreditCardForm t={props.t} c={props.c} p={props.p} />
                </Elements>
            </Card.Body>
        </Card>
    );
}