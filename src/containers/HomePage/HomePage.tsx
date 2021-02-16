import Dropdown from "components/Dropdown/Dropdown";
import DropdownPanel from "components/Dropdown/DropdownPanel";
import DropdownTrigger from "components/Dropdown/DropdownTrigger";
import Modal from "components/Modal/Modal";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Modal id="home" />
      <Dropdown>
        <DropdownTrigger>OKOK</DropdownTrigger>
        <DropdownPanel>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sequi
          beatae hic accusantium illum amet eum blanditiis voluptatum,
          necessitatibus at similique velit, enim doloribus unde provident,
          error facilis consectetur voluptates animi dignissimos? Consequatur
          aperiam error sequi in assumenda quam at, officia dolorem est.
        </DropdownPanel>
      </Dropdown>
    </div>
  );
}
