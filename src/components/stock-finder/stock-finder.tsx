import { Component, h } from '@stencil/core';
import { AV_API_KEY } from '../../global/global';

@Component({
  tag: 'my-stock-finder',
  styleUrl: '',
  shadow: true
})
export class MyStockFinder {
  stockNameInput: HTMLInputElement;

  onFindStocks(event: Event) {
    event.preventDefault();
    const stockName = this.stockNameInput.value;

    fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`)
    .then(res => res.json())
    .then(parsedRed => {
      console.log(parsedRed);
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return [
      <form onSubmit={this.onFindStocks.bind(this)}>
        <input
          id="stock-symbol"
          ref={el => this.stockNameInput = el}
        />
        <button type="submit">Fetch</button>
      </form>
    ];
  }
}