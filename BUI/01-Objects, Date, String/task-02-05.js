function profileShop(
  label,
  schedule,
  products = [],
  description = "",
  startSaleDate,
  team
) {
  return {
    label,
    schedule,
    products,
    description,
    startSaleDate,
    team,
    makeBlackfriday(discount) {
      if (discount <= 0 || discount >= 1) {
        throw new Error("Incorrect discount");
        return;
      }
      this.products.forEach((product) => {
        product.price = (product.price * (1 - discount)).toFixed(2);
      });
    },
    verifyStore(store) {
      this.products.forEach((element, index) => {
        element.qty =
          element.qty === store[index].qty ? element.qty : store[index].qty;
      });
    },

    /**
     * @param {*} text:string,
     * @param {*} maxLength: integer
     */
    ellipsisText(text, maxLength) {
      if (text.length > maxLength) {
        return `${text.slice(0, maxLength).concat("...")}`;
      }
      return text;
    },
    censorshipCheck(advertisment, forbiddenWord) {
      const regex = new RegExp(forbiddenWord, "gi");
      return advertisment.replace(regex, "");
    },
    /**
     *
     * @param {*} startSaleDate - STRING: 'DD.MM.YYYY'
     * @returns
     */
    checkDaytoSale(startSaleDate) {
      const [day, month, year] = startSaleDate.split(".").map(Number);
      const saleDate = new Date(year, month - 1, day); // months start from 0

      // Get today's date without time part
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      // Calculate difference in milliseconds
      const diffMs = saleDate - today;

      // Convert ms to days
      const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

      return diffDays;
    },
    prepareInventory() {
      const days = this.checkDaytoSale((startSaleDate = this.startSaleDate));
      const items = this.products.reduce(
        (accumulator, currentValue) => accumulator + currentValue.qty,
        0
      );
      return this.team * 10 >= items ? true : false;
    },
  };
}
