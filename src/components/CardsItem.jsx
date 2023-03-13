import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function KitchenSinkExample() {
  const [contador, setContador] = useState(0);
  return (
    <>
      <div className="d-flex justify-content-center align-item-center py-5 gap-5 m-5">
        {/* //CARD 1 */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <div className="d-flex justify-content-center p-3 gap-5">
            <Button variant="dark">dark</Button>
            <Button variant="dark">dark</Button>
          </div>
          <div className="d-flex justify-content-center align-items-center p-5 gap-3">
            <button onClick={() => setContador(contador + 1)}>+</button>
            <h5>{contador}</h5>

            <button onClick={() => setContador(contador - 1)}>-</button>
          </div>
        </Card>
        {/* //CARD 2 */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <div className="d-flex justify-content-center p-3 gap-5">
            <Button variant="dark">dark</Button>
            <Button variant="dark">dark</Button>
          </div>
          <div className="d-flex justify-content-center align-items-center p-5 gap-3">
            <button onClick={() => setContador(contador + 1)}>+</button>
            <h5>{contador}</h5>

            <button onClick={() => setContador(contador - 1)}>-</button>
          </div>
        </Card>
        {/* //CARD 3 */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <div className="d-flex justify-content-center p-3 gap-5">
            <Button variant="dark">dark</Button>
            <Button variant="dark">dark</Button>
          </div>
          <div className="d-flex justify-content-center align-items-center p-5 gap-3">
            <button onClick={() => setContador(contador + 1)}>+</button>
            <h5>{contador}</h5>

            <button onClick={() => setContador(contador - 1)}>-</button>
          </div>
        </Card>
        {/* //CARD 4 */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <div className="d-flex justify-content-center p-3 gap-5">
            <Button variant="dark">dark</Button>
            <Button variant="dark">dark</Button>
          </div>
          <div className="d-flex justify-content-center align-items-center p-5 gap-3">
            <button onClick={() => setContador(contador + 1)}>+</button>
            <h5>{contador}</h5>

            <button onClick={() => setContador(contador - 1)}>-</button>
          </div>
        </Card>
        {/* //CARD 5 */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <div className="d-flex justify-content-center p-3 gap-5">
            <Button variant="dark">dark</Button>
            <Button variant="dark">dark</Button>
          </div>
          <div className="d-flex justify-content-center align-items-center p-5 gap-3">
            <button onClick={() => setContador(contador + 1)}>+</button>
            <h5>{contador}</h5>

            <button onClick={() => setContador(contador - 1)}>-</button>
          </div>
        </Card>
      </div>
      <div className="d-flex justify-content-center align-item-center py-5 gap-5 m-5">
        {/* //CARD 6 */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <div className="d-flex justify-content-center p-3 gap-5">
            <Button variant="dark">dark</Button>
            <Button variant="dark">dark</Button>
          </div>
          <div className="d-flex justify-content-center align-items-center p-5 gap-3">
            <button onClick={() => setContador(contador + 1)}>+</button>
            <h5>{contador}</h5>

            <button onClick={() => setContador(contador - 1)}>-</button>
          </div>
        </Card>
        {/* //CARD 7 */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <div className="d-flex justify-content-center p-3 gap-5">
            <Button variant="dark">dark</Button>
            <Button variant="dark">dark</Button>
          </div>
          <div className="d-flex justify-content-center align-items-center p-5 gap-3">
            <button onClick={() => setContador(contador + 1)}>+</button>
            <h5>{contador}</h5>

            <button onClick={() => setContador(contador - 1)}>-</button>
          </div>
        </Card>
        {/* //CARD 8 */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <div className="d-flex justify-content-center p-3 gap-5">
            <Button variant="dark">dark</Button>
            <Button variant="dark">dark</Button>
          </div>
          <div className="d-flex justify-content-center align-items-center p-5 gap-3">
            <button onClick={() => setContador(contador + 1)}>+</button>
            <h5>{contador}</h5>

            <button onClick={() => setContador(contador - 1)}>-</button>
          </div>
        </Card>
        {/* //CARD 9 */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <div className="d-flex justify-content-center p-3 gap-5">
            <Button variant="dark">dark</Button>
            <Button variant="dark">dark</Button>
          </div>
          <div className="d-flex justify-content-center align-items-center p-5 gap-3">
            <button onClick={() => setContador(contador + 1)}>+</button>
            <h5>{contador}</h5>

            <button onClick={() => setContador(contador - 1)}>-</button>
          </div>
        </Card>
        {/* //CARD 10 */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <div className="d-flex justify-content-center p-3 gap-5">
            <Button variant="dark">dark</Button>
            <Button variant="dark">dark</Button>
          </div>
          <div className="d-flex justify-content-center align-items-center p-5 gap-3">
            <button onClick={() => setContador(contador + 1)}>+</button>
            <h5>{contador}</h5>

            <button onClick={() => setContador(contador - 1)}>-</button>
          </div>
        </Card>
      </div>
    </>
  );
}

export default KitchenSinkExample;
