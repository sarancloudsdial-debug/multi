import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Hero from "../component/Hero";
import Features from "../component/Features";
import Testimonials from "../component/Testimonials";
// import BlogPage from '../component/BlogPage';
function Home() {
    return (_jsxs("div", { children: [_jsx(Hero, {}), _jsx(Features, {}), _jsx(Testimonials, {})] }));
}
export default Home;
