import View from "./View";

class SearchView extends View {

    _parentElement = document.querySelector('.search');

    _searchBar = this._parentElement.querySelector('.search__field');

    getQuery() {
        return this._searchBar.value;
    }

    clearInput() {
        this._searchBar.value = ``;
    }

    addHandlerSearch(handler) {
        this._parentElement.addEventListener('submit', function(e){
            e.preventDefault();
            handler();
        })
    }
}

export default new SearchView();
