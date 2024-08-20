import { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Toast,
  ToastBody,
  ToastHeader,
} from "reactstrap";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function submit(e) {
    // This will prevent page refresh
    e.preventDefault();
    // Debugging: Check if email matches the regex
    const isEmailValid = emailRegex.test(email);
    console.log("Is email valid?", isEmailValid, email);

    // If email is invalid, show error toast and stop form submission
    if (!isEmailValid) {
      setToastType("danger");
      setToastMessage("Please enter a valid email address.");
      setShowToast(true);
      return;
    }

    // replace this with your own unique endpoint URL
    fetch("https://formcarry.com/s/6yAqt0jJvst", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name: name, email: email, message: message }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setToastType("success");
          setToastMessage("We've received your message, thank you!");
          setShowToast(true);

          // Clear form fields

          setName("");
          setEmail("");
          setMessage("");

          // setSubmitted(true);
        } else {
          setToastType("danger");
          setToastMessage(
            res.message || "Something went wrong, please try again."
          );
          setShowToast(true);

          // setError(res.message);
        }
      })
      .catch((error) => {
        setToastType("danger");
        setToastMessage("An error occurred. Please try again later.");
        setShowToast(true);
      });
  }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  // if (submitted) {
  //   return <p>We've received your message, thank you for contacting us!</p>;
  // }

  //   useEffect(() => {
  //     const elementsToObserve = [
  //       document.querySelectorAll(".contact.title"),
  //       document.querySelector(".formgroup"),
  //     ];

  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           if (entry.isIntersecting) {
  //             entry.target.classList.add("visible");
  //           } else {
  //             entry.target.classList.remove("visible");
  //           }
  //         });
  //       },
  //       { threshold: 0.1 }
  //     );

  //     elementsToObserve.forEach((element) => {
  //       observer.observe(element);
  //     });

  //     return () => {
  //       elementsToObserve.forEach((element) => {
  //         observer.unobserve(element);
  //       });
  //     };
  //   }, []);

  return (
    <>
      <section className="contact" id="contact">
        <h2 className="contact-title">Contact</h2>

        <Container>
          <Row className="justify-content-center">
            <Col lg={6} md={8} sm={12}>
              {/* Toast Notification */}
              <div
                aria-live="polite"
                aria-atomic="true"
                style={{
                  position: "relative",
                  minHeight: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Toast
                  isOpen={showToast}
                  style={{
                    backgroundColor:
                      toastType === "success" ? "#d02a5b" : "#dc3545",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <ToastHeader
                    toggle={() => setShowToast(false)}
                    icon={toastType === "success" ? "success" : "danger"}
                  >
                    {toastType === "success" ? "Success" : "Error"}
                  </ToastHeader>
                  <ToastBody>{toastMessage}</ToastBody>
                </Toast>
              </div>

              <Form className="contact-form" onSubmit={submit}>
                <FormGroup className="formgroup">
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup className="formgroup">
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup className="formgroup">
                  <Label for="message">Message</Label>
                  <Input
                    type="textarea"
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </FormGroup>
                <Button type="submit" color="primary">
                  Send
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
