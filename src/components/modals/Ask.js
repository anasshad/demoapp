import React from "react";
import { Button, Header, Modal, Form } from "semantic-ui-react";

const inlineStyle = {
  modal: {
    marginTop: "1em !important",
    marginLeft: "auto",
    marginRight: "auto"
  }
};

const Ask = () => (
  <Modal
    style={inlineStyle.modal}
    dimmer={"dimmer"}
    trigger={<Button>Ask</Button>}
  >
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <Header>Ask</Header>
        <Form>
          <Form.Field>
            <input placeholder="Add Title" />
          </Form.Field>
          <Form.Field>
            <input placeholder="Tag a person, organization, product or group" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default Ask;
