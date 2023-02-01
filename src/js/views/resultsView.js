import View from './View.js';
import previewView from './previewView.js';

import icons from 'url:../../img/icons.svg'; // Parcel 2

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No results found for your query! Please try again!';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultView();

{
  /* <div class="preview__user-generated">
<svg>
    <use href="${icons}#icon-user"></use>
</svg>
</div> */
}
