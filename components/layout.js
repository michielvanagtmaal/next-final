const { Fragment } = require("react");
import Navigation from "./navigation";

function Layout (props) {
    return (
        <Fragment>
            <Navigation/>
        <main>{props.children}</main>
        </Fragment>
    );
}

export default Layout;