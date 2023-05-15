// import NotFoundPage from "pages/NotFoundPage";
// import SignInPage from "pages/SignInPage";
// import React, { Suspense } from "react";

// import { Route, Routes } from "react-router-dom";
// import { AuthProvider } from "./contexts/auth-context";
// import SignUpPage from "./pages/SignUpPage";
// import PostDetailsPage from "pages/PostDetailsPage";
// import DashboardLayout from "module/dashboard/DashboardLayout";
// import DashboardPage from "pages/DashboardPage";
// import PostAddNew from "module/post/PostAddNew";
// import PostManage from "module/post/PostManage";
// import CategoryManage from "module/category/CategoryManage";
// import CategoryAddNew from "module/category/CategoryAddNew";
// import CategoryUpdate from "module/category/CategoryUpdate";
// import UserManage from "user/UserManage";
// import UserAddNew from "user/UserAddNew";
// import UserUpdate from "user/UserUpdate";
// import UserProfile from "user/UserProfile";
// import PostUpdate from "module/post/PostUpdate";
// import CategoryPage from "pages/CategoryPage";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
const HomePage = React.lazy(() => import("pages/HomePage"));
const CategoryPage = React.lazy(() => import("pages/CategoryPage"));
const DashboardPage = React.lazy(() => import("pages/DashboardPage"));
const SignInPage = React.lazy(() => import("pages/SignInPage"));
const PostDetailsPage = React.lazy(() => import("pages/PostDetailsPage"));
const NotFoundPage = React.lazy(() => import("pages/NotFoundPage"));
const UserUpdate = React.lazy(() => import("user/UserUpdate"));
const UserAddNew = React.lazy(() => import("user/UserAddNew"));
const UserManage = React.lazy(() => import("user/UserManage"));
const UserProfile = React.lazy(() => import("user/UserProfile"));
const PostAddNew = React.lazy(() => import("module/post/PostAddNew"));
const PostManage = React.lazy(() => import("module/post/PostManage"));
const PostUpdate = React.lazy(() => import("module/post/PostUpdate"));
const CategoryAddNew = React.lazy(() =>
  import("module/category/CategoryAddNew")
);
const CategoryManage = React.lazy(() =>
  import("module/category/CategoryManage")
);
const CategoryUpdate = React.lazy(() =>
  import("module/category/CategoryUpdate")
);
const DashboardLayout = React.lazy(() =>
  import("module/dashboard/DashboardLayout")
);
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));
function App() {
  return (
    <div>
      <AuthProvider>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
            <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>

            <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
            <Route
              path="/:slug"
              element={<PostDetailsPage></PostDetailsPage>}
            ></Route>
            <Route
              path="/category/:slug"
              element={<CategoryPage></CategoryPage>}
            ></Route>
            <Route element={<DashboardLayout></DashboardLayout>}>
              <Route
                path="/dashboard"
                element={<DashboardPage></DashboardPage>}
              ></Route>
              <Route
                path="/manage/post"
                element={<PostManage></PostManage>}
              ></Route>
              <Route
                path="/manage/add-post"
                element={<PostAddNew></PostAddNew>}
              ></Route>
              <Route
                path="/manage/update-post"
                element={<PostUpdate></PostUpdate>}
              ></Route>
              <Route
                path="/manage/category"
                element={<CategoryManage></CategoryManage>}
              ></Route>
              <Route
                path="/manage/add-category"
                element={<CategoryAddNew></CategoryAddNew>}
              ></Route>
              <Route
                path="/manage/update-category"
                element={<CategoryUpdate></CategoryUpdate>}
              ></Route>
              <Route
                path="/manage/user"
                element={<UserManage></UserManage>}
              ></Route>
              <Route
                path="/manage/add-user"
                element={<UserAddNew></UserAddNew>}
              ></Route>
              <Route
                path="/manage/update-user"
                element={<UserUpdate></UserUpdate>}
              ></Route>
              <Route
                path="/profile"
                element={<UserProfile></UserProfile>}
              ></Route>
            </Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </div>
  );
}

export default App;
