import { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, CardBody, Card, Button } from "reactstrap";
import Icon from "./Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const itemArray = new Array(9).fill("empty");

export default function App() {
  const [winMsg, setWinMsg] = useState("");
  //const [player, setPlayer] = useState("circle");
  const [isCross, setIsCross] = useState(false);
  const checkWinner = () => {
    if (
      itemArray[0] !== "empty" &&
      itemArray[1] !== "empty" &&
      itemArray[2] !== "empty" &&
      itemArray[3] !== "empty" &&
      itemArray[4] !== "empty" &&
      itemArray[5] !== "empty" &&
      itemArray[6] !== "empty" &&
      itemArray[7] !== "empty" &&
      itemArray[8] !== "empty"
    ) {
      setWinMsg("DRAW");
    }

    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMsg(`${itemArray[0]} WINS`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      setWinMsg(`${itemArray[3]} WINS`);
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      setWinMsg(`${itemArray[6]} WINS`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      setWinMsg(`${itemArray[0]} WINS`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      setWinMsg(`${itemArray[1]} WINS`);
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      setWinMsg(`${itemArray[2]} WINS`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      setWinMsg(`${itemArray[0]} WINS`);
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== "empty"
    ) {
      setWinMsg(`${itemArray[2]} WINS`);
    }
  };

  const handleClick = (index) => {
    // this line will restrict the clicking after displaying win msg
    if (winMsg !== "") {
      return toast(winMsg, { type: "success" });
    }
    if (itemArray[index] === "empty") {
      itemArray[index] = isCross ? "circle" : "cross";
      setIsCross(!isCross);
    } else {
      return toast("Already filled", { type: "error" });
    }
    // setPlayer(player === "circle" ? "cross" : "circle");
    checkWinner();
  };

  const reloadGame = () => {
    setWinMsg("");
    itemArray.fill("empty", 0, 8);
    setIsCross(false);
  };

  return (
    <Container className="container">
      <div className="div1">
        <ToastContainer position="bottom-left" />

        {winMsg ? (
          <div className="mb-3 mt-3">
            <h1>{winMsg}</h1>
            <Button block color="warning" onClick={reloadGame}>
              Reload Game
            </Button>
          </div>
        ) : (
          <h1>{isCross ? "Circle" : "Cross"} Turn</h1>
        )}

        <Row>
          <Col md={6} className="offset-md-3">
            <div className="grid  mb-4  ">
              {itemArray.map((value, index) => (
                <Card onClick={() => handleClick(index)}>
                  <CardBody>
                    <Icon name={value} />
                  </CardBody>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
