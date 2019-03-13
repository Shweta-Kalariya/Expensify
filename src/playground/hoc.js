import React from "react";
import ReactDOM from "react-dom";

const Info = props => {
  return <p>Info: {props.info}</p>;
};

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

// const requireAuthentication = WrappedComponent => {
//   return props => (
//     <div>
//       {props.isAuthenticated ? (
//         <WrappedComponent {...props} />
//       ) : (
//         <p>Please login to view the info</p>
//       )}
//     </div>
//   );
// };

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuth ? <WrappedComponent {...props} /> : <p>Please Login!</p>}
    </div>
  );
};
const AdminInfo = withAdminWarning(Info);
const AuthenticateUser = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="There are the details" />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthenticateUser isAuth={true} info="There are the details" />,
  document.getElementById("app")
);
