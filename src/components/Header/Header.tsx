import "./Header.scss";
import Logo from "assets/icons/logo.svg";
import { FaMapMarkerAlt, FaAngleDown } from "react-icons/fa";
import { Button, Dropdown, MenuProps, Modal, Space } from "antd";
import { useState } from "react";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const registerItems: MenuProps["items"] = [
    {
      label: <a href="#">Quero ser cliente</a>,
      key: "0",
    },
    {
      label: <a href="#">Quero anunciar</a>,
      key: "1",
    },
  ];

  const loginItems: MenuProps["items"] = [
    {
      label: <a href="#">Entrar como cliente</a>,
      key: "0",
    },
    {
      label: <a href="#">Entrar como anunciante</a>,
      key: "1",
    },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="home-header">
      <nav className="header-nav">
        <a href="/">
          <img src={Logo} alt="Fatal Model Logo" />
        </a>
        <Button
          className="header-select-city"
          onClick={openModal}
          icon={<FaMapMarkerAlt />}
        >
          Selecionar cidade
        </Button>
        <Modal
          className="header-modal"
          onCancel={closeModal}
          title={
            <p>
              SELECIONAR <strong>CIDADE</strong>
            </p>
          }
          open={isModalOpen}
        >
          <p>Some contents...</p>
        </Modal>
        <Dropdown
          className="header-dropdown register-dropdown"
          menu={{ items: registerItems }}
          trigger={["click"]}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              CADASTRE-SE GRÁTIS
              <FaAngleDown />
            </Space>
          </a>
        </Dropdown>
        <Dropdown
          className="header-dropdown login-dropdown"
          menu={{ items: loginItems }}
          trigger={["click"]}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              LOGIN
              <FaAngleDown />
            </Space>
          </a>
        </Dropdown>
      </nav>
    </header>
  );
}

export default Header;
