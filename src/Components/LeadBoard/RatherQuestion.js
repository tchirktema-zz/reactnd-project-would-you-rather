import React, { Fragment, useState } from "react";
import {
  Header,
  Form,
  FormField,
  Radio,
  Button,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import {connect} from 'react-redux'
import { handleSaveQuestionAnswer } from "../../Actions/UserActions";

const RatherQuestion = (props) => {
    const { question, authUser, handleSaveQuestionAnswer } = props;
    const [value, setValue] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [loading, setLoading] = useState(false);


    const handleSubmit = (e) => {
      e.preventDefault();
      new Promise((res, rej) => {
        setLoading(true);
        setTimeout(() => res(), 500);
      }).then(() => {
        if(value !== ''){
           handleSaveQuestionAnswer(authUser,question.id,value)
        }
        setLoading(false);
      });
    }

    const handleChange = (e,data) => {
        setValue(data.value)
        setDisabled(false)
    }


    return (
      <Fragment>
        <Header as="h4">Would you rather</Header>
        {loading === true && (
          <Dimmer active inverted>
            <Loader inverted content="Loading" />
          </Dimmer>
        )}
        <Form onSubmit={handleSubmit}>
          <FormField>
            <Radio
              label={question.optionOne.text}
              name="radioGroup"
              value="optionOne"
              checked={value === "optionOne"}
              onChange={handleChange}
            />
            <br />
            <br />
            <Radio
              label={question.optionTwo.text}
              name="radioGroup"
              value="optionTwo"
              checked={value === "optionTwo"}
              onChange={handleChange}
            />
            <br />
            <br />
            <Button positive fluid disabled={disabled}>
              Submit
            </Button>
          </FormField>
        </Form>
      </Fragment>
    );

}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSaveQuestionAnswer: (userId, question_id, answer) => {
      dispatch(handleSaveQuestionAnswer(userId, question_id, answer));
    },
  };
};

const mapStateToProps = ({authUser}) => {
  return {
    authUser
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RatherQuestion); 