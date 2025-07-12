import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Alert,
  Table,
  Badge,
} from "react-bootstrap";

const OrderPage = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`https://localhost:3000/orders/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setOrder(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <Spinner animation="border" variant="success" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">Error al cargar la orden: {error}</Alert>
      </Container>
    );
  }

  if (!order) {
    return (
      <Container className="mt-5">
        <Alert variant="warning">No se encontró la orden solicitada</Alert>
      </Container>
    );
  }

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return (
          <Badge bg="warning" className="text-dark">
            Pendiente
          </Badge>
        );
      case "completed":
        return <Badge bg="success">Completada</Badge>;
      case "cancelled":
        return <Badge bg="danger">Cancelada</Badge>;
      default:
        return <Badge bg="secondary">{status}</Badge>;
    }
  };

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-black">Detalle de la Orden</h1>
          <hr className="bg-success" style={{ height: "2px" }} />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <Card.Title className="text-black">
                Información de la Orden
              </Card.Title>
              <Table borderless className="text-black">
                <tbody>
                  <tr>
                    <td>
                      <strong>Número de Orden:</strong>
                    </td>
                    <td>{order.id}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Fecha:</strong>
                    </td>
                    <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Estado:</strong>
                    </td>
                    <td>{getStatusBadge(order.status)}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Cliente:</strong>
                    </td>
                    <td>{order.clientUser?.name || "N/A"}</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <Card.Title className="text-black">Resumen de Pago</Card.Title>
              <Table borderless className="text-black">
                <tbody>
                  <tr>
                    <td>
                      <strong>Subtotal:</strong>
                    </td>
                    <td>
                      $
                      {order.items
                        .reduce(
                          (sum, item) => sum + item.price * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Envío:</strong>
                    </td>
                    <td>$0.00</td>
                  </tr>
                  <tr className="fw-bold">
                    <td>
                      <strong>Total:</strong>
                    </td>
                    <td>
                      $
                      {order.items
                        .reduce(
                          (sum, item) => sum + item.price * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <Card.Title className="text-black">Productos</Card.Title>
              <Table striped bordered hover className="text-black">
                <thead className="bg-light">
                  <tr>
                    <th>Producto</th>
                    <th>Precio Unitario</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item, index) => (
                    <tr key={index}>
                      <td>
                        {item.product?.name || `Producto ${item.productId}`}
                      </td>
                      <td>${item.price.toFixed(2)}</td>
                      <td>{item.quantity}</td>
                      <td>${(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderPage;
