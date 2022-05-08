import React from "react";
import { Typography } from "@material-ui/core/";
import { Link, withRouter } from "react-router-dom";
import { StyledButton } from "../../styled/Button";
const Back = () => {
  

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        <Link  to={{ pathname: "/" }}>
        <StyledButton>
            Go Home
          </StyledButton>
        </Link>
      </Typography>
    </div>
  );
};

export default withRouter(Back);
