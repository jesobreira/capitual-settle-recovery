export default `
accountinfo:
	title: "Banking details"
	recents: "Recent accounts"
	text: "Fill in the fields below to proceed with your transaction."
	data:
		bank: "Bank"
		agency: "Agency"
		account: "Account"
		type: "Account Type"
		optionaccount1: "Checking Account"
		optionaccount2: "Savings Account"
		name: "Name"
		cpfcnpj: "CPF/CNPJ"
	button:
		next: "Continue"
	error:
		blank: "Please, select your bank."
		branch: "Please, inform your agency number"
		account: "Please, inform your account number"	

confirmnumber:
	title: "Confirm your phone"
	text: 
		begin: "Enter the code sent to"
		wrongnumber:
			begin: "Wrong number?"
			link: "Click here"
			end: "to change."
		notrecieve:
			begin: "Didn't receive the SMS?"
			link: "Send again"
			end: "Wait {{time}} seconds."
	button: 
		next: "Continue"
	error:
		success: "Message resent successfully!"
		codeinvalid: "Invalid code. Try again."

confirmpartnes:
	title: "Document under review"
	text:
		text1: "Fill in the fields below and choose the most convenient submission method for each member to complete their verification process."
		text2: "Important:: The verification can only be finished when all members have completed sending the necessary documentation."
	status:
		waiting: "Waiting for pending documents"
		sent: "Documents sent"
	alt:
		user: "User"
		docok: "Documents are OK"
	button:
		modify: "Change Info"
		add: "Add new partner"
		remove: "Remove partner"
		next: "Continue"

depositinfo:
	title: "Deposit details"
	text: "Almost ready! Now you just have to make the deposit according to the banking details above within 72 hours. Your deposit will be identified automatically, and you will be notified when confirmed."
	data:
		bank: "Bank"
		agency: "Agency"
		account: "Checking Account"
		name: "Holder"
		cnpj: "CNPJ"
		value: "Amount to deposit"

docanalyze:
	title: "Document under review"
	text:
		text1: "Your documents have been successfully submitted and will be reviewed shortly. As soon as the process is complete, you will receive an email with more information."
		text2: "We take the opportunity to clarify that all documents and data sent are encrypted and archived in a secure environment."
	alt:
		docanal: "Documents under review"		

docpicture:
	title: "Selfie with ID"
	intro: "Finally, we need a photo of you next to your identity document. Hold it with your hand, leaving the information visible for our analysis."
	taken: "Please ensure the data in your document is readable and the document is not hiding part of your face."
	another: "Try again"
	alt:
		pic: "Illustration"
	button:
		picture: "Capture Photo with Document"
		capture: "Snap"
		next: "Continue"

docenterprise:
	title: "Company Documents"
	text: "Fill in the fields below and send the company's Social Contract, with all changes or consolidated."
	data:
		name: "Company Name"
		cnpj: "CNPJ"
		date: "Date of establishment"
		day: "Day"
		month: "Month"
		year: "Year"
		info: "Maximum image size 8MB, PDF, JPG, PNG"
	button:
		attached: "Attach Social Contract"
		next: "Continue"	

index:
	menu:
		meet: "Meet Capitual"
		faq: "FAQ"
		help: "Help"

orderresume:
	title:
		loading: "Loading..."
		deposit: "Deposit"
		withdrawal: "Withdrawal"
	text: "Welcome to Capitual! Before proceeding, check carefully the order details below."
	data:
		loading: "Loading..."
		deposit: "Deposit"
		withdrawal: "Withdrawal"
		fee: "Processor's fee"
		email: "Your email address"
		total: "Total"
		value: "Order value"
	footer:
		text: "Your order will be processed by a local payment processor. Before proceeding, you must accept the terms and conditions."
		terms:
			begin: "I accept the"
			link: "Terms of Use"
	button:
		next: "Continue"

prooflife:
	title: "Proof of Life"
	text: "Position your face in the center and inside the model below and perform the movements indicated by the arrows."
	alt:
		pol: "Proof of Life"
	button: 
		picture: "Start Proof of Life"
		next: "Continue"

proofresidence:
	title: "Proof of Residence"
	text: "Upload a proof of residency for the past 3 months. It can be a bill for electricity, water, telephone or some government proof such as IPTU, IPVA, among others..."
	data:
		zip: "Postal Code"
		search: "Search Postal Code"
		address: "Address"
		number: "Number"
		complement: "Complement"
		city: "City"
		state: "State"
		info: "Maximum image size 8MB, PDF, JPG, PNG"
	placeholder:
		address: "e.g.: Brigadeiro Ave"
		district: "e.g. Pinheiros"
		complement: "e.g.: Block B, Apartment 203"
		city: "e.g.: Joao Pessoa"
		state: "e.g.: Paraiba"
	button:
		upload: "Proof of Residence"
		next: "Continue"
	error:
		fileinvalid: "Invalid file. Please, Upload a JPEG, PNG, BMP or PDF file."
		zipinvalid: "Please, enter your ZIP code."
		streetinvalid: "Please, enter your address."
		numberinvalid: "Please, enter your home number."
		districtinvalid: "Please, enter your district."
		cityinvalid: "Please, enter the name of your city."
		stateinvalid: "Please, select your state."
		notattached: "Please, attach your proof of address."

verifyenterprise:
	title: "Verification"
	text: "To proceed with the request it will be necessary to verify the company's account, this process is performed only once. All information sent is encrypted and stored in a safe place."
	footer:
		text: "We will need you to have a copy of the company's social contract and each partner must have an identity document (RG, CNH or passport), proof of residence and a camera connected to the device."
	alt:
		doc: "Documents"
		poa: "Proof of Residence"
		cam: "Device's camera"
	button: 
		next: "Continue"

verifyidentity:
	title: "Identity Verification"
	text: "Fill in the fields below and send an identity card, front and back, which can be RG, CNH or passport."
	data:
		name: "Full Name"
		rg: "RG"
		cpf: "CPF"
		dob: "Date of Birth"
		day: "Day"
		month: "Month"
		year: "Year"
		months: "January,February,March,April,May,June,July,August,September,October,November,December"
		info: "Maximum image size 8MB, PDF, JPG, PNG"
	button:
		uploadfront: "Front of Document"
		uploadback: "Back of Document"
		next: "Continue"
	error:
		fileinvalid: "Invalid file. Please, Upload a JPEG, PNG, BMP or PDF file."
		nameinvalid: "Please, inform your name."
		rginvalid: "Please, inform your RG."
		cpfinvalid: "Please, inform your CPF."
		dobinvalid: "Please, inform your date of birth."
		notattached: "Please, send an image of your document."

verifynumber:
	title: "Confirm your phone"
	text: "Hello {{name}}, we need to verify a phone number to get started."
	button:
		next: "Continue"

verifypersonal:
	title: "Verification"
	text:
		begin: "Before proceeding with the request, it is necessary to verify your data, this process is performed only once."
		info: "We will need you to have a document to confirm your identity (RG, CNH or passport), a proof of residence and a camera connected to your device."
		choose: "Choose which device you would like to perform the process:"
		warnIOS: "For iOS users: please ensure that you are using Safari browser."
		ready: "All set?"
	alt:
		doc: "Documents"
		poa: "Proof of Residence"
		cam: "Device's camera"
	button:
		pc: "Desktop"
		mobile: "Smartphone"
		start: "Let's begin?"
		ready: "All set?"

verifysmartphone:
	title: "Verification in Smartphone"
	text:
		begin: "To continue the verification process on your smartphone, we send you an SMS with a link. On this link, you can proceed with the submission of documents. Upon completion of the procedure, this page will be updated automatically."
		notreceive:
			begin: "Didn't receive the SMS?"
			link: "Send again"
			end: "Wait {{time}} seconds..."
		wait: "Waiting..."
	alt:
		verifymobile: "Verification in Smartphone"
	alert:
		success: "Message resent successfully!"

docanalysemodal:
	title: "Documents Under Review"
	text:
		text1: "Your documents have been successfully submitted and will be reviewed shortly. As soon as the process is complete, you will receive an email with more information."
		text2: "We take the opportunity to clarify that all documents and data sent are encrypted and archived in a secure environment."
	alt:
		doc: "Documents Under Review"

docpicturemodal:
	title: "Selfie with ID"
	text: "Finally, we need a photo of you next to your identity document. Hold it with your hand, leaving the information visible for our analysis."
	alt:
		ilustration: "Illustration"
	button:
		picture: "Capture Photo with Document"
		next: "Continue"

prooflifemodal:
	title: "Proof of Life"
	text: "Position your face in the center and inside the model below and perform the movements indicated by the arrows."
	alt:
		pol: "Proof of Life"
	button:
		picture: "Start Proof of Life"
		next: "Continue"

proofresidencemodal:
	title: "Proof of Residence"
	text: "Send proof of residency for the past 3 months. It can be a bill for electricity, water, telephone or some government proof such as IPTU, IPVA, among others..."
	data:
		zip: "Postal Code"
		search: "Search"
		address: "Address"
		number: "Number"
		complement: "Complement"
		city: "City"
		district: "District"
		state: "State"
		info: "Maximum image size 8MB; PDF, JPG, PNG"
	placeholder:
		address: "e.g.: Brigadeiro Ave"
		complement: "e.g.: Block B, Apartment 203"
		city: "e.g.: Joao Pessoa"
		state: "e.g.: Paraiba"
	button:
		upload: "Proof of Residence"
		next: "Continue"

registerpartnesmodal:
	title: "Partner Registration"
	text: "Fill in the fields below and send an identity card, front and back, which can be RG, CNH or passport."
	data:
		name: "Full Name"
		rg: "RG"
		cpf: "CPF"
		dob: "Date of Birth"
		day: "Day"
		month: "Month"
		year: "Year"
		info: "To continue, choose which device you would like to continue the member verification process:"
	button:
		pc: "Desktop"
		mobile: "Smartphone"

verifyidentitymodal:
	title: "Partner Registration"
	text: "Fill in the fields below and send an identity card, front and back, which can be RG, CNH or passport."
	data:
		info: "Maximum image size 8MB, PDF, JPG, PNG"
	button:
		uploadfront: "Front of Document"
		uploadback: "Back of Document"
		next: "Continue"

verifynumbermodal:
	title: "Phone to SMS"
	text: "An SMS will be sent to James Baker in order to proceed with the documents submission via smartphone. Enter the number below."
	button:
		next: "Continue"

verifysmartphonemodal:
	title: "Verification in Smartphone"
	text:
		text1: "To continue the verification process on the smartphone, we sent an SMS with a link to the company partner in question. On this link, he can proceed with the submission of documents."
		text2: "You can continue to register more members if necessary. The sending of this partner's data will be automatically recognized."
		notrecieve:
			begin: "Didn't receive the SMS?"
			link: "Send again"
			end: "in 60..."
	alt:
		verificationmobile: "Phone verification"
	button: 
		next: "Continue"
`