const json = `{
    "AccountName": "Current Account",
    "BankBalance": "XXXXX",
    "transactionamount": 16000,
    "transactiondate": "2022-08-12 15:55",
    "PaymentType": {
      "Id": "X",
      "Name": "Bank to Wallet Transfer"
    },
    "senderDetails": {
      "sender": "Saurabh Sharma",
      "bank": "SBI",
      "IFSC": "SBIN016095",
      "accountno": "xxxxxxxxx5736",
      "transactiondate": "2022-08-12 15:55"
    },
    "recieverDetails": {
      "reciever": "Saurabh Sharma",
      "wallet": " Growpital Wallet ",
      "referenceno": "DBTR/222201998174",
      "transactiondate": "2022-08-12 15:55"
    },
    "paymentmethod": "UPI",
    "transactionId": "DBTR/222201998174"
  }`;

const data = JSON.parse(json);
console.log(data.AccountName);

const transactionamount = document.querySelector(".amount");
const transactiondate = document.querySelector(".date");
const sender = document.querySelector(".sender");
const bank = document.querySelector(".bank");
const accountno = document.querySelector(".account");
const reciever = document.querySelector(".reciever");
const wallet = document.querySelector(".wallet");
const referenceno = document.querySelector(".referenceno");
const paymentmethod = document.querySelector(".paymentmethod");
const transactionId = document.querySelector(".transactionId");

transactionamount.textContent = `$${data.transactionamount}`;
transactiondate.textContent = `${data.transactiondate}pm`;
sender.textContent = `${data.senderDetails.sender}`;
bank.textContent = `${data.senderDetails.bank}, IFCS ${data.senderDetails.IFSC}`;
accountno.textContent = `A/C No. ${data.senderDetails.accountno}`;
reciever.textContent = `${data.recieverDetails.reciever}`;
wallet.textContent = `${data.recieverDetails.wallet}`;
referenceno.textContent = `Ref No.${data.recieverDetails.referenceno}`;
paymentmethod.textContent = `Payment Method:${data.paymentmethod}`;
transactionId.textContent = `${data.transactionId}`;
