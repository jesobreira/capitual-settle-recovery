import React, { useState } from "react";

import {
  Header,
  Container,
  LogoContainer,
  Menu,
  Body,
  Box,
  BoxHeader,
  BoxContainer,
  Button,
} from "~/styles/confirm";

import Logo from "~/images/capitual.png";
import PartnerLogo from "~/util/PartnerLogo";
import OrdemSaque from "~/images/ordem-saque.svg";

export default function ConfirmWithdrawal() {
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
          <BoxHeader />
          <BoxContainer>
            <img src={OrdemSaque} alt="ordem de saque" />

            <h1>Reprocessamento de Saque Solicitado</h1>

            <p>Seu saque será reprocessado dentro do expediente bancário.</p>
            <p>
              Caso seu saque retorne mais uma vez, você será notificado por e-mail, novamente.
            </p>
            <p>Atenciosamente, Equipe do Capitual.</p>
          </BoxContainer>
        </Box>
      </Body>
    </>
  );
}
