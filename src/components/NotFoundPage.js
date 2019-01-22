import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    <p>
      404 <Link to="/">Go to Home</Link>
    </p>
  </div>
);

export default NotFoundPage;
