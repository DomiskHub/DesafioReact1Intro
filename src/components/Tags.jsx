import Badge from "react-bootstrap/Badge";

const Tags = ({ texto, color }) => {
  return <Badge bg={color}>{texto}</Badge>;
};

export default Tags;
