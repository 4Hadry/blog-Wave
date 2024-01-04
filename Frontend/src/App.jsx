import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import Register from "./pages/Register";
import Login from "./pages/Login.jsx";
import UserProfile from "./pages/UserProfile";
// import Authors from "./pages/Authors";
import Authors from "./pages/Authors";
import CreatePosts from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import DeletePost from "./pages/DeletePost";
import Logout from "./pages/Logout";
import AuthorsPost from "./pages/AuthorsPosts";
import CategoryPost from "./pages/CategoryPosts";
import Dashboard from "./pages/Dashboard";
import UserProvider from "./Context/UserContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserProvider>
        <Layout />
      </UserProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts/:id", element: <PostDetails /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "profile/:id", element: <UserProfile /> },
      { path: "authors", element: <Authors /> },
      { path: "create", element: <CreatePosts /> },
      { path: "posts/:id/edit", element: <EditPost /> },
      { path: "posts/:id/delete", element: <DeletePost /> },
      { path: "logout", element: <Logout /> },
      { path: "myposts/:id", element: <Dashboard /> },
      { path: "posts/users/:id", element: <AuthorsPost /> },
      { path: "posts/categories/:category", element: <CategoryPost /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
