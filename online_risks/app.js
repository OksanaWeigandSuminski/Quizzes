/*
	quiz web app
*/

// html references
const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
const endButton = document.getElementById('end');
const message = document.getElementById('message');
const quizContainer = document.getElementById('quiz');
const returnButton = document.getElementById('return');

// quiz questions
let questions = [];
let currentQuestion = 0;
let score = 0;

questions.push(new Question("Do you ever share your Password or Personal Identification Number (PIN) with anyone?", "No", ["Yes"],"Never share your Password or PIN with anyone. Doing so allows that person to access personal and possibly sensitive information protected by that password. The best practice is to use mixed case alphanumeric passwords (a combination of letters and numbers), with a minimum of seven characters. An additional precaution is to always use a different password for each system you access. When creating passwords, don't use information that could be easily linked to you (like your birth date, Social Security Number, phone number, or the names of pets or hobbies). Do not store your password on a computer. Function keys should not be programmed with your password to complete a log-in procedure. Change your online account password often. We recommend that you change your password every 30 days."));
questions.push(new Question("Do you use public computers (e.g., internet Cafe, internet kiosk, etc.) to access confidential information?", "No", ["Yes"], "You should only access your personal financial information from a computer you 'trust'. Internet kiosks and cafes are not as secure as your personal computer. Also, never leave your computer unattended while logged into any online banking or investing service."));
questions.push(new Question("Do you know how to ensure that you're on a secure website?", "Yes", ["No"], "Look for a web address (URL) that begins with 'https://' and the 'closed padlock' icon. The location of the closed padlock icon will vary according to your browser. However, malicious software can actually make a site look secure even when it is not, so it is always best to type in a website address whenever possible instead of clicking on links in e-mails or being directed from other websites."));
questions.push(new Question("Do you open e-mail attachments or links without checking to see who they are from?", "No", ["Yes"], "Even if the e-mail appears to be from someone you know, if you are not expecting attachments or the e-mail looks suspicious, delete it without reading it. Viruses are frequently transmitted through e-mail attachments. They can compromise the security of your personal data, and also infect the computers of those in your address book."));
questions.push(new Question("When you finish using secure online sessions (those that require a password and log-in), do you always remember to log out?", "Yes", ["No"], "Even if you think it is a legitimate survey, there is no need to take the risk of providing your personal information to strangers. You should never give out your SSN, credit card number or other personal information over the phone, unless you have a trusted business relationship with the company and you have initiated the contact."));
questions.push(new Question("Do you have anti-virus protection software on your computer and update it regularly?", "Yes", ["No"], "These offers, when tossed into the garbage, are a potential target of identity thieves who use them to order credit cards in your name. Even if you don't frequently receive pre-approved credit offers, you may want to remove your name from the marketing lists of the three credit reporting bureaus - Equifax, Experian (formerly TRW) and Trans Union. Call 888-5OPTOUT or go online to www.optoutprescreen.com."));
questions.push(new Question("Do you have firewall protection on your computer?", "Yes", ["No"], "Do not toss pre-approved credit offers in your trash or recycling bin without first tearing them into small pieces or shredding them. They can be used by 'dumpster divers' to order credit cards in your name and mail them to their address. Do the same with other sensitive information like credit card receipts, phone bills, bank account statements, investment account reports, etc. Reasonably priced home shredders can be purchased in many office supply stores. We recommend cross-cut shredders."));
questions.push(new Question("Do you have computer software that can detect if adware/spyware has been installed?", "Yes", ["No"], "Any canceled checks, financial statements, credit solicitations, personal information, and financial data that is no longer needed for tax or business purposes should be destroyed prior to disposal. We recommend using a cross-cut shredder to ensure that there is no legible information that can be stolen."));
questions.push(new Question("Do you regularly download updates for your computer's operating system, browser, and other programs (Microsoft Windows, MAC OS, MS Office, Internet Explorer, etc.)?", "Yes", ["No"], "You always want to be sure that your sensitive personal information is kept in a secure location. Never write your Personal Identification Number (PIN) on your ATM card, debit card, or credit card. If any of your cards are stolen, you would be providing thieves will all the information they would need to access your accounts and withdraw funds or rack up charges. Memorize your PINs. If you must keep a list, create a file, store it on a disk or CD, and lock it in a fireproof safe and/or your bank safe deposit box. Do not store important financial information on a website or in e-mail files. Do not leave important financial information in an unsecured location."));
questions.push(new Question("Do you use any service or program that blocks unsolicited e-mail (spam)?", "Yes", ["No"], "Identity thieves have been known to 'dumpster dive' to retrieve financial information. You need to shred or safely store your ATM, debit card, and credit card receipts as some receipts may bear the account number and/or expiration date. You should also know that legislation has been enacted to truncate or abbreviate your account number on receipts, but some merchants are not yet in compliance. The best practice is to shred financial information in a cross-cut shredder."));
questions.push(new Question("Do you use online banking and online bill payment?", "Yes", ["No"], "Review your bank statements promptly and report any discrepancies or suspect transactions immediately. Prompt reporting of unauthorized transactions may decrease your potential losses."));
questions.push(new Question("Do you change your password on a regular basis (every 30 to 60 days) and use passwords that are difficult for someone else to guess?", "Yes", ["No"], "Report lost or stolen checks, ATM cards, debit cards or credit cards to the applicable financial institution as soon as you discover they are missing. Prompt reporting of unauthorized transactions may decrease your potential losses."));
questions.push(new Question("Have you requested a credit report this year?", "Yes", ["No"], "With the passage of the Fair and Accurate Credit Transactions Act (FACT Act) in December 2003, you are entitled to receive one free copy of your credit report from each credit reporting agency (Equifax, Experian, TransUnion) during any 12-month period. You can order your free annual credit report online at www.annualcreditreport.com, by calling 877-322-8228, or by completing the Annual Credit Report Request Form and mailing it to: Annual Credit Report Request Service, P.O. Box 105281, Atlanta, GA 30348-5281."));
questions.push(new Question("Do you currently subscribe to a credit reporting service that will notify you of any changes on your credit report?", "Yes", ["No"], "A credit monitoring service is a paid program in which consumers enroll (either online or by mail) to receive monthly or daily monitoring alerts - preferably daily e-mail alerts. They are designed to keep you informed of changes to your credit report, which might be an early warning of identity theft. Subscribing to a credit monitoring service is a great way to stay up-to-date on the status of your credit report."));
questions.push(new Question("Have you ever donated or disposed of a personal computer, Personal Digital Assistant (PDA) or cell phone without destroying your hard drive/memory chip?", "No", ["Yes"], "If you plan to donate or dispose of equipment, erase hard drives or memory cards with personal and financial information. Before disposing of your computer, remove data by using a strong 'wipe' utility program. Wipe programs, which can be downloaded from the internet, write over hard drive data with zeroes or random patterns, making it unreadable by data-restoration software. For PDAs or cell phones, reset the internal memory. Do not rely on the 'delete' function to remove files containing sensitive information. Wireless devices such as PDAs and cell phones should have the internal memory reset to ensure that all personal data is removed (most devices of this nature have a reset button - simply removing a battery from devices does not always delete the information). Be aware of environmental impacts as well. Be sure to check with your waste management services/recycling company to follow proper environmentally safe guidelines for disposing of this type of equipment."));


console.log(questions);


// events
startButton.addEventListener('click', function () {
	startButton.classList.add('disable');
	answerResponse.textContent = "CHOOSE AN ANSWER!";
	loadNextQuestion();
});

nextButton.addEventListener('click', function () {
	quizContainer.textContent = ''; // hacky way to remove quiz html
	nextButton.classList.add('disable');
	currentQuestion++;
	loadNextQuestion();
	answerResponse.textContent = "CHOOSE AN ANSWER!";
	example.textContent = '';
});

endButton.addEventListener('click', function () {

	//old code 

	quizContainer.textContent = ''; // hacky way to remove quiz html
	endButton.classList.add('disable');
	answerResponse.textContent = `YOU GOT ${score} OUT OF ${questions.length}! `;
	example.textContent = '';

	// add extra message 
	if (score == 0) {
		answerResponse.textContent += "Try again!";
		example.textContent = '';
	}
	addReferences();

	returnButton.classList.remove("disable");
});
returnButton.addEventListener('click', function () {
	location.href = " https://oksanaweigandsuminski.github.io/Make-A-Thon/"
});

// add references
var referenceList = [
	{ url: 'https://www.youtube.com/watch?v=kDFeSUUwRnA', text: 'What is Identity Theft?' },
	{ url: 'https://www.youtube.com/watch?v=Fztuohj3Fck', text: 'Identity Theft Prevention – Don’t Become a Victim of ID Theft' },
	{ url: 'https://www.youtube.com/watch?v=X_fjVgAIgKc', text: 'How to Protect Your Personal and Financial Information from Identity Theft' },
	{ url: 'https://www.youtube.com/watch?v=qBDCnKfExw4', text: 'How to Prevent Identity Theft' },
	{ url: 'https://www.youtube.com/watch?v=00M-hiXwCek', text: 'Recovering from Identity Theft' },
	{ url: 'https://www.youtube.com/watch?v=9DeOQmE55vA', text: 'What to do if You are a Victim of Identity Theft' }
];

function addReferences() {
	for (let i = 0; i < referenceList.length; i++) {
		const ref = referenceList[i];
		addReferenceHTML(ref.url, ref.text);
	}
}

function addReferenceHTML(url, text) {
	const p = document.createElement('p');
	p.classList.add('reference-p');
	const a = document.createElement('a');
	a.classList.add('reference-link');
	a.href = url;
	a.textContent = text;
	p.appendChild(a);
	document.body.appendChild(p);
}

// callback function
function loadNextQuestion() {

	let question = questions[currentQuestion].getHTML();
	quizContainer.appendChild(question);
	quizContainer.classList.remove("disable");

}

function questionAnswered(isCorrect, exampleText) {
	if (isCorrect) {
		answerResponse.textContent = "CORRECT! "
		example.textContent = exampleText;
		score++;
	} else {
		answerResponse.textContent = "INCORRECT! "
		example.textContent = exampleText;
	}

	// if there are more questions
	if (currentQuestion < questions.length - 1) {
		nextButton.classList.remove('disable');
		example.classList.remove('disable');
	} else {
		endButton.classList.remove('disable');
	}
	quizContainer.classList.add("disable");
}


// helper function to create html elements
function createElement(tagName, className, text) {
	const elem = document.createElement(tagName);
	elem.classList.add(className);
	elem.textContent = text;
	return elem;
}