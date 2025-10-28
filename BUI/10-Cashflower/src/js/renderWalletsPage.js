import API from "./API";
import { Storage } from "./utils";

export const _WALLETS = [];

function Wallet({ id, name, owner, transactions, balance }) {
  (this.id = id),
    (this.name = name),
    (this.owner = owner),
    (this.transactions = transactions),
    (this.balance = balance);
  this.self = document.createElement("div");

  this.render = (parent) => {
    this.self.classList.add("wallet");
    this.self.insertAdjacentHTML(
      "afterbegin",
      `
			<p>${this.name}</p>
			<p>Залишок: ${this.balance}</p>
			<p>Всього транзакій: ${this.transactions.length}</p>
			`
    );
    parent.append(this.self);
  };
}

export default async () => {
  const { id } = Storage.getItem("user");
  const wallets = await API.getWallets(id);

  wallets.forEach((wallet) => {
    const newWallet = new Wallet(wallet);
    _WALLETS.push(newWallet);
		console.log(newWallet);
    newWallet.render(document.querySelector(".content"));
  });
};
