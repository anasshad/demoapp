import React from "react";
import { Container, Dropdown, Image, Menu, Input } from "semantic-ui-react";

const TopMenu = () => (
  <Menu fixed="top" height="50px" borderless>
    <Container>
      <Menu.Item as="a" header>
        <Image
          size="mini"
          src="https://placeimg.com/30/30/nature"
          style={{ marginRight: "1.5em" }}
          circular
        />
        SITE.COM
      </Menu.Item>
      <Menu.Item>
        <Input
          transparent
          icon={{ name: "search", link: true }}
          placeholder="Search users..."
        />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>Autos</Menu.Item>
        <Menu.Item>Home & Garden</Menu.Item>
        <Menu.Item>Real Estate</Menu.Item>
        <Menu.Item>Health & Beauty</Menu.Item>
      </Menu.Menu>
      <Dropdown item simple text="All">
        <Dropdown.Menu>
          <Dropdown.Item>List Item</Dropdown.Item>
          <Dropdown.Item>List Item</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Header Item</Dropdown.Header>
          <Dropdown.Item>
            <i className="dropdown icon" />
            <span className="text">Submenu</span>
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>List Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  </Menu>
);

export default TopMenu;
