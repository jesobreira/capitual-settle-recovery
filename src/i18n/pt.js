export default `
accountinfo:
	title: "Dados bancários"
	recents: "Contas recentes"
	text: "Preencha os campos abaixo para que possamos realizar a sua transação bancária."
	data:
		bank: "Banco"
		agency: "Agência"
		account: "Conta"
		type: "Tipo de Conta"
		optionaccount1: "Conta Corrente"
		optionaccount2: "Conta Poupança"
		name: "Nome"
		cpfcnpj: "CPF/CNPJ"
	button:
		next: "Continuar"
	error:
		blank: "Por favor, selecione seu banco."
		branch: "Por favor, informe sua agência."
		account: "Por favor, informe sua conta."

confirmnumber:
	title: "Confirme seu telefone"
	text: 
		begin: "Insira o código enviado para"
		wrongnumber:
			begin: "Número errado?"
			link: "Clique aqui"
			end: "para corrigir."
		notrecieve:
			begin: "Não recebeu o SMS?"
			link: "Solicite um novo envio."
			time: "Aguarde {{time}} segundos..."
	button: 
		next: "Continuar"
	error:
		success: "Mensagem reenviada!"
		codeinvalid: "Código inválido. Tente novamente."

confirmpartnes:
	title: "Documento em análise"
	text:
		text1: "Insira os dados e escolha o meio de envio mais conveniente para que cada sócio complete seu processo de verificação."
		text2: "Atenção: A verificação só poderá ser finalizada quando todos os sócios concluírem o envio da documentação necessária."
	status:
		waiting: "Aguardando documentos pendentes"
		sent: "Documentos enviados"
	alt:
		user: "Usuário"
		docok: "Os documentos estão OK"
	button:
		modify: "Alterar dados"
		add: "Adicionar novo sócio"
		remove: "Remover sócio"
		next: "Continuar"

depositinfo:
	title: "Dados para depósito"
	text: "Quase tudo pronto! Agora basta você realizar o depósito conforme os dados acima em até 72 horas. Seu depósito é identificado automaticamente, e você será notificado no instante ocorrido."
	data:
		bank: "Banco"
		agency: "Agência"
		account: "Conta-Corrente"
		name: "Titular"
		cnpj: "CNPJ"
		value: "Valor a depositar"

docanalyze:
	title: "Documentos em Análise"
	text:
		text1: "Seus documentos foram enviados com sucesso e serão analisados em breve. Tão logo quanto o processo for concluído, você receberá um e-mail com mais informações."
		text2: "Aproveitamos para deixar claro que todos os documentos e dados enviados são criptografados e arquivados em um ambiente seguro."
	alt:
		docanal: "Documentos em Análise"		

docpicture:
	title: "Foto com Documento"
	intro: "Para finalizar, precisamos de uma foto sua ao lado do seu documento. Segure-o com a sua mão, deixando as informações visíveis para nossa análise."
	taken: "Verifique se os dados em seu documento estão legíveis e se o mesmo não está escondendo sua face."
	another: "Tentar novamente"
	alt:
		pic: "Ilustração"
	button:
		picture: "Capturar Foto com Documento"
		next: "Continuar"
		capture: "Fotografar"

docenterprise:
	title: "Documentos da empresa"
	text: "Preencha os campos abaixo e envie um documento do Contrato Social da empresa, com todas as alterações ou consolidado."
	data:
		name: "Nome Empresarial"
		cnpj: "CNPJ"
		date: "Data de Fundação"
		day: "Dia"
		month: "Mês"
		year: "Ano"
		info: "Tamanho máximo da imagem 8MB, PDF, JPG, PNG"
	button:
		attached: "Anexo do Contrato Social"
		next: "Continuar" 		

index:
	menu:
		meet: "Conheça o Capitual"
		faq: "FAQ"
		help: "Ajuda"

orderresume:
	title:
		loading: "Carregando..."
		deposit: "Depósito"
		withdrawal: "Saque"
	text: "Seja bem-vindo ao Capitual! Antes de prosseguir, confira atentamente os dados do pedido abaixo."
	data:
		loading: "Carregando..."
		deposit: "Depósito"
		withdrawal: "Saque"
		fee: "Taxa do processador"
		email: "Seu endereço de e-mail"
		total: "Total"
		value: "Valor da ordem"
	footer:
		text: "Seu pedido será processado por um processador de pagamento local. Antes de continuar, você deve aceitar os termos e condições."
		terms:
			begin: "Aceito os"
			link: "Termos e Condições"
	button:
		next: "Continuar"

prooflife:
	title: "Prova de vida"
	text: "Posicione sua face no centro e dentro do modelo abaixo e realize os movimentos indicados pelas setas."
	alt:
		pol: "Prova de vida"
	button: 
		picture: "Iniciar Prova de Vida"
		next: "Continuar"

proofresidence:
	title: "Comprovante de residência"
	text: "Envie um comprovante de residência dos últimos 3 meses. Pode ser uma conta de luz, de água, de telefone ou algum comprovante governamental como o IPTU, IPVA, entre outros..."
	data:
		zip: "CEP"
		search: "Buscar CEP"
		address: "Endereço"
		number: "Número"
		complement: "Complemento"
		city: "Cidade"
		state: "Estado"
		info: "Tamanho máximo da imagem 8MB, PDF, JPG, PNG"
	placeholder:
		address: "ex.: Av. Brigadeiro"
		district: "ex.: Pinheiros"
		complement: "ex.: Bloco B, Apto 203"
		city: "ex.: João Pessoa"
		state: "ex.: Paraíba"
	button:
		upload: "Comprovante de Residência"
		next: "Continuar"
	error:
		fileinvalid: "Arquivo inválido. Envie uma imagem JPEG, PNG, BMP ou um arquivo PDF."
		zipinvalid: "Por favor, informe o seu CEP."
		streetinvalid: "Por favor, insira seu endereço."
		numberinvalid: "Por favor, insira o número de sua residência."
		districtinvalid: "Por favor, insira o seu bairro."
		cityinvalid: "Por favor, insira o nome de sua cidade."
		stateinvalid: "Por favor, selecione o seu estado."
		notattached: "Por favor, anexe seu comprovante de residência."

verifyenterprise:
	title: "Verificação da conta empresa"
	text: "Para prosseguir com a solicitação será necessário verificar a conta da empresa, esse processo é realizado apenas uma única vez. Todas as informações enviadas são criptografadas e arquivadas em um lugar seguro."
	footer:
		text: "Vamos precisar que você tenha uma cópia do contrato social da empresa e cada sócio deve ter em mãos um documento de identidade (RG, CNH ou passaporte), um comprovante de residência e uma câmera conectada ao dispositivo."
	alt:
		doc: "Documentos"
		poa: "Comprovante de residência"
		cam: "Câmera no dispositivo"
	button: 
		next: "Continuar"

verifyidentity:
	title: "Verificação de identidade"
	text: "Preencha os campos abaixo e envie um documento de identidade original, frente e verso, podendo ser RG, CNH ou passaporte."
	data:
		name: "Nome Completo"
		rg: "RG"
		cpf: "CPF"
		dob: "Data de Nascimento"
		day: "Dia"
		month: "Mês"
		year: "Ano"
		months: "Janeiro,Fevereiro,Março,Abril,Maio,Junho,Julho,Agosto,Setembro,Outubro,Novembro,Dezembro"
		info: "Tamanho máximo da imagem 8MB, PDF, JPG, PNG"
	button:
		uploadfront: "Frente do Documento"
		uploadback: "Verso do Documento"
		next: "Continuar"
	error:
		fileinvalid: "Arquivo inválido. Envie uma imagem JPEG, PNG, BMP ou um arquivo PDF."
		nameinvalid: "Por favor, informe seu nome."
		rginvalid: "Por favor, informe seu RG."
		cpfinvalid: "Por favor, informe seu CPF."
		dobinvalid: "Por favor, informe sua data de nascimento."
		notattached: "Por favor, envie uma imagem de seu documento."

verifynumber:
	title: "Confirme seu telefone"
	text: "Olá {{name}}, precisamos confirmar um número de telefone para começar."
	button:
		next: "Continuar"

verifypersonal:
	title: "Verificação"
	text:
		begin: "Antes de continuar com a solicitação é necessário verificar seus dados, esse processo é realizado apenas uma vez."
		info: "Vamos precisar que você tenha em mãos um documento para confirmar a identidade (RG, CNH ou passaporte), um comprovante de residência e uma câmera conectada ao seu dispositivo."
		choose: "Escolha em que aparelho gostaria de realizar a verificação:"
		warnIOS: "Aviso aos usuários de iPhone/iPad: certifique-se de estar utilizando o navegador Safari."
		ready: "Tudo pronto?"
	alt:
		doc: "Documentos"
		poa: "Comprovante de residência"
		cam: "Câmera no dispositivo"
	button:
		pc: "Computador"
		mobile: "Smartphone"
		start: "Vamos começar!"
		ready: "Tudo pronto?"

verifysmartphone:
	title: "Verificação no smartphone"
	text:
		begin: "Para continuar a verificação no seu smartphone, te enviamos um SMS com um link. Neste link, você poderá prosseguir com o envio dos documentos. Ao concluir o procedimento essa página será atualizada automaticamente."
		notreceive:
			begin: "Não recebeu o SMS?"
			link: "Enviar novamente"
			end: "Aguarde {{time}} segundos..."
		wait: "Aguardando..."
	alt:
		verifymobile: "Verificação por telefone"
	alert:
		success: "Mensagem reenviada!"

docanalysemodal:
	title: "Documentos em análise"
	text:
		text1: "Seus documentos foram enviados com sucesso e serão analisados em breve. Tão logo quanto o processo for concluído, você receberá um e-mail com mais informações."
		text2: "Aproveitamos para deixar claro que todos os documentos e dados enviados são criptografados e arquivados em um ambiente seguro."
	alt:
		doc: "Documentos em Análise"

docpicturemodal:
	title: "Foto com Documento"
	text: "Para finalizar, precisamos de uma foto sua ao lado do seu documento. Segure-o com a sua mão, deixando as informações visíveis para nossa análise."
	alt:
		ilustration: "Ilustração"
	button:
		picture: "Capturar Foto com Documento"
		next: "Continuar"

prooflifemodal:
	title: "Prova de vida"
	text: "Posicione sua face no centro e dentro do modelo abaixo e realize os movimentos indicados pelas setas."
	alt:
		pol: "Prova de vida"
	button:
		picture: "Iniciar Prova de Vida"
		next: "Continuar"

proofresidencemodal:
	title: "Comprovante de Residência"
	text: "Envie um comprovante de residência dos últimos 3 meses. Pode ser uma conta de luz, de água, de telefone ou algum comprovante governamental como o IPTU, IPVA, entre outros..."
	data:
		zip: "CEP"
		search: "Buscar CEP"
		address: "Endereço"
		number: "Número"
		complement: "Complemento"
		city: "Cidade"
		state: "Estado"
		district: "Bairro"
		info: "Tamanho máximo da imagem 8MB; PDF, JPG, PNG"
	placeholder:
		address: "ex.: Av. Brigadeiro"
		complement: "ex.: Bloco B, Apto 203"
		city: "ex.: João Pessoa"
		state: "ex.: Paraíba"
	button:
		upload: "Comprovante de Residência"
		next: "Continuar"

registerpartnesmodal:
	title: "Cadastro de Sócio"
	text: "Preencha os campos abaixo e envie um documento de identidade original, frente e verso, podendo ser RG, CNH ou passaporte."
	data:
		name: "Nome Completo"
		rg: "RG"
		cpf: "CPF"
		dob: "Data de Nascimento"
		opts:
		day: "Dia"
		month: "Mês"
		year: "Ano"
		info: "Para continuar, escolha em que aparelho gostaria de realizar a verificação desse sócio"
	button:
		pc: "Computador"
		mobile: "Smartphone"

verifyidentitymodal:
	title: "Cadastro de Sócio"
	text: "Preencha os campos abaixo e envie um documento de identidade original, frente e verso, podendo ser RG, CNH ou passaporte."
	data:
		info: "Tamanho máximo da imagem 8MB, PDF, JPG, PNG"
	button:
		uploadfront: "Frente do Documento"
		uploadback: "Verso do Documento"
		next: "Continuar"

verifynumbermodal:
	title: "Telefone para SMS"
	text: "Um SMS será enviado a James Baker, para que o próprio conclua o envio de documentos necessário através do seu smartphone. Digite o número a seguir."
	button:
		next: "Continuar"

verifysmartphonemodal:
	title: "Verificação no smartphone"
	text:
		text1: "Para continuar a verificação no smartphone, enviamos um SMS com um link par ao sócio em questão. Neste link, ele poderá prosseguir com o envio dos documentos."
		text2: "Você pode continuar a cadastrar mais sócios, se necessário. O envio dos dados desse sócio será reconhecido automaticamente."
		notrecieve:
			begin: "Não recebeu o SMS?"
			link: "Enviar novamente"
			end: "em 60..."
	alt:
		verificationmobile: "Verificação por telefone"
	button: 
		next: "Continuar"
`