import Pages from "../pages";

const AppRouteList = [{
    path: "/",
    exact: true,
    component: Pages.Auth.Login
}, {
    path: "/stories",
    exact: true,
    component: Pages.Dashboard.AllStories
}, {
    path: "/stories/:id",
    exact: true,
    component: Pages.Dashboard.StoryInfo
}];
export default AppRouteList;