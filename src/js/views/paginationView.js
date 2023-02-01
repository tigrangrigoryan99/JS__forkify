import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerCilck(handler) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const { goToPage } = btn.dataset;
      handler(+goToPage);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const curPage = this._data.page;

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this.generateMarkupButton(curPage, true);
    }
    // Last page
    if (curPage === numPages && numPages > 1) {
      return this.generateMarkupButton(curPage);
    }
    // Other page
    if (curPage < numPages) {
      return (
        this.generateMarkupButton(curPage) +
        this.generateMarkupButton(curPage, true)
      );
    }
    // Page 1, and there are No other pages
    return '';
  }

  generateMarkupButton(curPage, next = false) {
    return `
    <button data-go-to-page=${
      next ? curPage + 1 : curPage - 1
    } class="btn--inline pagination__btn--${next ? 'next' : 'prev'}">
        ${next ? `<span>Page ${curPage + 1}</span>` : ''}   
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-${next ? 'right' : 'left'}"></use>
        </svg>
        ${next ? '' : `<span>Page ${curPage - 1}</span>`} 
    </button>
    `;
  }
}

export default new PaginationView();
