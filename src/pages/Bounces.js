import React, { useState, useEffect } from "react";
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
  Footer,
} from "~/styles/withdrawalconfirm";
import LoadingOverlay from "react-loading-overlay";
import axios from "~/services/axios";
import { useParams, useHistory } from "react-router-dom";

import Logo from "~/images/logo-capitual.png";
import PartnerLogo from "~/util/PartnerLogo";
import Select from "react-select";

import alertify from "alertify.js";
import colors from "~/styles/colors";

function Bounces() {
  const { partner, order, token } = useParams();
  const history = useHistory();

  const [value, setValue] = useState("");
  const [bank, setBank] = useState("");
  const [agency, setAgency] = useState("");
  const [account, setAccount] = useState("");
  const [agencyOld, setAgencyOld] = useState("")
  const [accountOld, setAccountOld] = useState("")
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [accountType, setAccountType] = useState("checking");

  const [banks, setBanks] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/bounce/' + order + '/' + token).then(res => {
        if (!res.error) {
          setLoading(false)
          setValue(res.data.data.value)
          setBank({
            value: res.data.data.bank.ISPB,
            label: res.data.data.bank.Code + " - " + res.data.data.bank.Name
          })
          setAgencyOld(res.data.data.branch)
          setAccountOld(res.data.data.account || "")
          setCpf(res.data.data.doc)
          setName(res.data.data.name)
        } else {
          history.push('/' + partner + '/bounce_ok')
        }
      }).catch(() => {
        history.push('/' + partner + '/bounce_ok')
      })

    axios.get('/banklist').then(res => {
      setBanks(res.data.data.map(item => ({
          value: item.ISPB,
          label: item.Code + " - " + item.Name
        })))
      })
  }, [])

  const handleOptionChange = (e) => {
    setAccountType(e.target.value);
  };

  const handleSubmit = () => {

    if (!agency || agency.includes('_') || !parseInt(agency)) {
      return alertify.error("Por favor, digite a agência, sem o dígito.")
    }

    if (!account) {
      return alertify.error("Por favor, digite o número da sua conta com o dígito.")
    }

    alertify
      .okBtn("Sim, processe o saque")
      .cancelBtn("Não, desejo conferir")
      .confirm(
        "<p class='title'>ATENÇÃO</p><p>Caso os dados inseridos estejam inválidos novamente, será necessário aguardar uma nova tentativa e um eventual reembolso do banco destino para efetuar uma nova correção.\nVocê tem certeza que deseja processar seu saque para os dados informados?</p>"
      )
      .then((resp) => {
        if (resp.buttonClicked === "ok") {
          setLoading(true);
          axios
            .post("/bounce/" + order + "/" + token, {
              branch: agency,
              account,
              bankIspb: bank.value,
              accountType,
            })
            .then((res) => {
              history.push("/" + partner + "/bounce_ok");
            });
        }
      });
  };

  return (
    <>
      <Header>
        <Container>
          <LogoContainer>
            <img
              src={Logo}
              width={104.8}
              height={28}
              alt="Capitual"
            />

            <Menu>
              <li>
                <a href="https://www.capitual.com" target="_blank">
                  Conheça o Capitual
                </a>
              </li>
              <li>
                <a href="https://ajuda.capitual.io/faq/" target="_blank">
                  FAQ
                </a>
              </li>
              <li>
                <a href="https://help.capitual.com/" target="_blank">
                  Ajuda
                </a>
              </li>
            </Menu>
          </LogoContainer>

          <img
            src={PartnerLogo}
            width={124}
            height={25}
            alt={partner.substr(0, 1).toUpperCase() + partner.substr(1)}
            partner={partner}
          />
        </Container>
      </Header>

      <Body>
        <Box>
          <BoxContainer>
            <LoadingOverlay active={loading} spinner>
              <h2>Verificação dos Dados para Saque</h2>

              <p>Preencha os campos abaixo com suas informações bancárias.</p>

              <Form onSubmit={() => {}} enctype="multipart/form-data">
                {Boolean(name) && (
                  <>
                    <p>Nome</p>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      disabled
                      style={{ opacity: 0.5 }}
                    />
                  </>
                )}

                <p>Banco Destino</p>
                <Select
                  options={banks}
                  value={bank}
                  onChange={setBank}
                  styles={{
                    container: (provided) => ({
                      ...provided,
                      width: "100%",
                      height: "50px",
                      marginBottom: "20px",
                    }),
                    control: (provided) => ({
                      ...provided,
                      height: "50px",
                      borderRadius: "10px",
                      borderWidth: "2px",
                      borderColor: colors.plate,
                    }),
                    valueContainer: (provided) => ({
                      ...provided,
                      height: "50px",
                      paddingLeft: "20px",
                      paddingTop: "10px",
                    }),
                  }}
                />

                <Row>
                  <div>
                    <p>Agência (<strong>sem</strong> dígito)</p>
                    <MaskedInput
                      mask={[/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                      type="text"
                      value={agency}
                      onChange={(e) => setAgency(e.target.value)}
                      required
                      placeholder={agencyOld}
                    />
                  </div>

                  <div>
                    <p>Conta (<strong>com</strong> digito)</p>
                    <MaskedInput
                      mask={raw => [...Array.from(new Array(Math.min(raw.replace(/[^0-9]/g, '').length ? raw.replace(/[^0-9]/g, '').length-1 : 1, 11)), item => /[0-9]/), '-', /[0-9]/]}
                      type="text"
                      value={account}
                      placeholder={accountOld.substr(0, accountOld.length-1) + '-' + accountOld.substr(accountOld.length-1)}
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
                          value="checking"
                          checked={accountType === "checking"}
                          onChange={(e) => handleOptionChange(e)}
                        />
                        Conta Corrente<br/>ou de Pagamentos
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          value="savings"
                          checked={accountType === "savings"}
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
                      disabled
                      style={{ opacity: 0.5 }}
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
                      style={{ opacity: 0.5 }}
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                      required
                      disabled
                    />
                  </div>
                </Row>
              </Form>

              <Button onClick={() => handleSubmit()}>Confirmar</Button>
            </LoadingOverlay>
          </BoxContainer>
        </Box>
      </Body>

      <Footer>
        <img src={Logo} width={104.8} height={28} alt="Capitual logo" />
        <span>
          Feito com <span className="heart">♥</span>para você
        </span>
      </Footer>
    </>
  );
}

export default Bounces;
