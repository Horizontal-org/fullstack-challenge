
import './App.css';
import Home from './container/Home'
import Col from './component/Col/index.style'
import Row from './component/Row/index.style'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errElement:
      <Row justify="center">
        <Col xs={22} sm={22} md={8} lg={8} xl={6} xxl={5}>
          Not Founds
        </Col>
      </Row>
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    
  );
}

export default App;
