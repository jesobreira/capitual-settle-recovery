import React, { useState } from "react";
import MaskedInput from "react-text-mask";
import {
  Header,
  Container,
  LogoContainer,
  Menu,
  Body,
  Box,
  BoxContainer,
  Form,
  Row,
  Button,
} from "~/styles/withdrawalconfirm";

import Logo from "~/images/capitual.png";
import PartnerLogo from "~/util/PartnerLogo";

function WithdrawalConfirm() {
  const [value, setValue] = useState("");
  const [bank, setBank] = useState("");
  const [agency, setAgency] = useState("");
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    window.location.href = "confirm-withdrawal";
  };

  return (
    <>
      <Header>
        <Container>
          <LogoContainer>
            <img src={Logo} width={117} height={28} alt="Capitual logo" />

            <Menu>
              <li>
                <a href="https://www.capitual.com" target="_blank">
                  Conheça o Capitual
                </a>
              </li>
              <li>
                <a href="https://help.capitual.com/settle/faq" target="_blank">
                  FAQ
                </a>
              </li>
              <li>
                <a href="https://help.capitual.com/settle" target="_blank">
                  Ajuda
                </a>
              </li>
            </Menu>
          </LogoContainer>

          <img src={PartnerLogo} width={124} height={25} alt="" />
        </Container>
      </Header>

      <Body>
        <Box>
          <BoxContainer>
            <h2>Verificação dos Dados para Saque</h2>

            <p>Preencha os campos abaixo com suas informações bancárias.</p>

            <Form onSubmit={() => {}} enctype="multipart/form-data">
              <p>Nome</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Edson Lucas N. Annichine"
                required
                disabled
              />

              <p>Banco Destino</p>
              <input
                type="text"
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                required
              />

              <Row>
                <div>
                  <p>Agência (sem dígito)</p>
                  <input
                    type="text"
                    value={agency}
                    onChange={(e) => setAgency(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <p>Conta (com digito)</p>
                  <input
                    type="text"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                    required
                  />
                </div>
              </Row>

              <div>
                <p>Tipo de Conta</p>
                <Row>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value="corrente"
                        checked={selectedOption === "corrente"}
                        onChange={(e) => handleOptionChange(e)}
                      />
                      Conta Corrente
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value="poupança"
                        checked={selectedOption === "poupança"}
                        onChange={(e) => handleOptionChange(e)}
                      />
                      Conta Poupança
                    </label>
                  </div>
                </Row>
              </div>

              <Row>
                <div>
                  <p>Valor</p>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    required
                    placeholder="R$ 50,00"
                    disabled
                  />
                </div>

                <div>
                  <p>CPF</p>
                  <MaskedInput
                    mask={[
                      /\d/,
                      /\d/,
                      /\d/,
                      ".",
                      /\d/,
                      /\d/,
                      /\d/,
                      ".",
                      /\d/,
                      /\d/,
                      /\d/,
                      "-",
                      /\d/,
                      /\d/,
                    ]}
                    type="text"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    placeholder="127.987.357-15"
                    required
                    disabled
                  />
                </div>
              </Row>
            </Form>

            <Button onClick={() => handleSubmit()}>Confirmar</Button>
          </BoxContainer>
        </Box>
      </Body>
    </>
  );
}

export default WithdrawalConfirm;
