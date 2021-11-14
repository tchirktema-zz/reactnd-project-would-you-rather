import React, { Fragment, useState, useEffect } from "react";
import { Button, Header } from "semantic-ui-react";
import { useNavigate } from "react-router";


const colors = {
  green: {
    name: "green",
    hex: "#21ba45",
  },
  blue: {
    name: "blue",
    hex: "#2185d0",
  },
  grey: {
    name: null,
    hex: "#d4d4d5",
  },
};

const RatherAll = (props) => {
    const { question, unanswered } = props;
    const [viewRather, setViewRather] = useState(false)
    const buttonColor = unanswered === true ? colors.green : colors.blue;
    const buttonContent = unanswered === true ? "Answer" : "Results";
    const navigate = useNavigate()

    
    useEffect(() => {
      if (viewRather === true) {
          navigate(`/questions/${question.id}`, {
            state: {
              question: question.id
            },
          });
      }
    });

    const handleClick = (e) => {
      e.preventDefault()
      setViewRather(!viewRather)
    };
    
    
    return (
      <Fragment>
        <Header as="h5" textAlign="left">
          Would you rather
        </Header>
        <p style={{ textAlign: "center" }}>
          {question.optionOne.text}
          <br />
          or...
        </p>
        <Button
          color={buttonColor.name}
          size="tiny"
          fluid
          onClick={handleClick}
          content={buttonContent}
        />
      </Fragment>
    );

}
export default RatherAll 