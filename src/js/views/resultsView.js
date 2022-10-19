import View from "./View";
import icons from "../../img/icons.svg";
import previewView from "./previewView";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = `No recipes found for your query! Please try again.`

  _generateMarkup() {
    return this._data.map(res => previewView.render(res, false)).join('')
}
}

export default new ResultsView();
