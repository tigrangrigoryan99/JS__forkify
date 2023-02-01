/*
    ------------------------------MIND OF PROJECTS--------------------------------------------

    Project - sarqelis petka inq struqturni lini, vor@ baxkacaca 3 himnakan baxadrichic.
        1. Structure - Cragrin petka karucvacq vorov petka grvi 'code', nmana tan, petka 
                       karucvacq lini inchpes sarqel.
        2. Maintainability - (pahpaneliutyun), Aysinqn erbeq chenq avartum project@, sa nshanakumq
                             enpes grel vor hetaga popoxutyunner@ anel@ hesht lini.
        3. Expandability - (yndardakeliutyun), Aysinqn petka @ndardak lini vor hetagayum karoxananq
                           nor hatkanishner avelacnel.
        
    Petka sarqenq enpisi cragir vor@ klini lav kayacac orinak`
        1. MVC - Model View Controller, aysinqn danninerna, nerkayacum, ev gorcoxutyun poxkapvac
                 event-neri het.
        2. MVP - Model View Presenter, sa himnakan ogtagorcvuma mobile-um.


    Aysinqn lav cragir stanalu hamar petka lav structurizacvac lini.Hima shat 'developerner'
    hima structurizacia pahelu hamar ogtagorcum en 'framework'-er.

    -----------------------COMPONENTS OF ANY ARCHITECTURE-------------------------------------

    Amen proyekt stexcelis ev architecture kazmelis petka linum componentner, dranq en.
        1. Business logic - Sa 'code'-a vor@ lucuma buisness problem@,aysinqn inchova zbaxvum
                            business-@ dra pahanjnerova gorcum, or hashvapahutyan cragir@ petka
                            luci hashvapahakan xndirner@.
        2. State - Sa pahpanum e sax tvyalner@ app-i masin, sa petke lini miak axbyur@, ev UI-@
                   petka hamajamanakya gorci state-i het.
        3. HTTP library - Sa AJAX harcumner anelu hamara, orinak 'fetch, promiseAll ...',misht 
                          petka linum irakan projectner anelu hamar.
        4. Application logic(Router) - Sa ejum 'navigate' linelu hamara, inchpes naev UI 'event'-
                                       neri het.
        5. Presentation logic(UI layer) - Sa havelvaci tesaneli masov e zbaxvac, aysinqn cucadrum
                                          e havelvaci vijak@.Aysinqn sra gorc@ cucadri tvyalner@
                                          UI-um ev gorci 'sync'.

    Tarber architectura-ner unen pashtpanutyun ev pahum en es sax componentner@, mi fayli mej.

    --------------------------------MODEL CONTROLLER VIEW-------------------------------------

    MODEL - Sa 'business logic, state, HTTP library' sa vercnuma 'web server'-ic tvyalner talisa
            poxgorcakcuma.
    CONTROLLER - Sa 'application logic'-na vor@ apahovuma eji gorcoxutyunner@.Sa ayl kerp asac
                 kamurja 'model'-i ev 'view'-i hamar voronq mimyanc masi chgiten.
    VIEW - Sa 'presentation logic'-n e aysinqn 'user'-in cucadruma mer 'code'-i ardyunq@.

    MVC - i himnakan gaxapar@ ena 'business logic'-@ arandnacnel 'application logic'-ic. Bayc
          erbemn petka linum kapel sranq dra hamar ka, 'controller'-@.

    Orinak 'button'-sexmelis 
        1. texiya unenum inteface-um
        2. texiya unenum controller-um handler function, inch vor bana anum app-um.Sa hstakoren
           masna 'application logic'-i.
        3. sranic heto 'model'-ic vercnuma cuyca talis
        4. 'web server'-ic tvyalner stanuma 'model' cucadtum 'view'.
        5. render-a anum 'interface'-in

    Stex 2 tipi gorcoxutyun ka 
        1. kapuma function call-erov ev nermucum
        2. tvyalnera stanum

    Sa MVC-i mek devna vorov karucum enq app-@, kan naev urish bayc saya aveli harmar.

    Amen project ir mej neraruma 'Helpers' ev 'configuration files'.

    'config.js' - File enq stexcum vori mej pahum enq sax en 'const'-er@ voronq ogtagorcvelu en 
                  project-um. Orinak 'API url'-@ mer project-i ogtagorcvuma mi qani tex ev na
                  anpopoxa, dra hamar sarqum enq mecataereov vorovhetev constantaner@ pahpanvum 
                  en edpes. 'Export' anum heto petk exac vaxt 'import' anum.
    'helper.js' - Sra mej pahum enq function-ner voronq ogtagorcelu enq amboxj project-um, const-
                  eri nman.

    Controller-um chpetka lini voch-mi 'DOM' element, stex petka miayn event-ner.
    Qani vor 'submit'-i jamanak default gorcoxutyunner en linum petka kanxenq dranq, dra 
    hamar miangamic handler chenq kanchum ayl 'function() {}'-enq sarqum mej@ 'prevent'
    anum heto kanchum 'handler'.

    Qani vor 'Parcel and Babel' transpile and refactoring aneluc chen anum '#'-ov sarqvac
    'privat' popoxakanner@ dra hamar hima sa chi ogtagorcvum ayl tex@ '_'.

    pagination - ejadrum.
    servings - spasarkum.

    Erb 'dataset'-ic tvyal enq stanum ev uzum enq destructuringi shnorhiv stananq 
        or`   const goToPage = btn.dataset;
              'goToPage' galisa vorpes 'DOMStringMap' ev sra mejic destructuring-ov
              stanaluc u 'log' aneluc 'undefined' kta dra hamar stanum enq heto
              '+'-ov number sarqum vorpeszi darna tiv ev ga irakan arjeq@.

    Ete uzum enq 'documentation' grenq function-neri hamar kam arhasarak, apa '/*' 
    grelov heto '*' dneluc VSCODE-n avtomat pakuma u ete 'Enter' sexmenq inq kbaci 
    comment@ ev ete tvyal 'function'-@ uni parametrer sax kcuc ta dex anuner@ kgri
    is nkaragrutyun@ menq kgrenq.

    Ete espes nkaragrutyun enq grum apa inq urish 'file'-um mknik@ vren pahelic bacuma
    nkaragrutyun@, parametrer@ u aveli heshta linum haskanal sax.

    Netlify - @ mer app-er@ qcuma live, ev sa nayac orinak 'git'-in uni mec arandnahat-
              kutyunner.Ev sa avtomat u anvjar texadrvum e.
                1. Sa mer ej@ sarquma 'https'- secure.

    Qani vor shat jamanak sirum enq avtomat anel site-i texakayum mez stex anhrajeshta 
    'GIT'.


    ---------------------------------GIT-GITHUB---------------------------------------

    git init - tvyal 'Folder'-um sarquma 'Git' pahoc.
    
        git config --global user.name 
        git config --global user.email
    Es 2 command ov kapum enq mer project@ 'gitHub'-i mer eji het.

    git config --list - bacuma mer projecti ev 'git'-i kapac u grac tvyalner@.
    git status - Sa cuyca talis te mer project-um file-ri kargavijak@.
    Untracked - chhetevel,

    git add -A - sa sax file-r@ darnum en pahoci mas.
    git add index.html sa miayn es file-na dardnum mas.

    git commit -m 'message' - menq amen popoxutyun aneluc heto peka hastatenq
    ev 'message'-grenq inch popoxutyuna texi unecel.

    git reset --hard HEAD - Ete ka 'Modified' filer es hraman@ eta talis sax 
                            gracner@, ev 'Modified' el chi linum.
                            
    OKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKk
*/
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// https://forkify-api.herokuapp.com/v2
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { MODAL_CLOSED_SEC } from './config.js';

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpiner();

    // 0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

    // 3) Update bookmarks
    bookmarksView.update(model.state.bookmarks);

    // 1) Loading Recipe
    await model.loadRecipe(id);

    // 2) Rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.log(err);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpiner();

    // 1) Get search query
    const query = searchView.getQuery();
    // if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render results
    resultsView.render(model.getSearchResultsPage());

    // 4) Render initial pagination buttons
    paginationView.render(model.state.serch);
  } catch (err) {
    resultsView.renderError();
  }
};

const controlPagination = function (goToPage) {
  // 1) Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Render NEW pagination buttons
  paginationView.render(model.state.serch);
};

const controlServings = function (newServings) {
  // 1) Update the recipe servings
  model.updateServings(newServings);

  // 2) Update the recipe view
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1) Add or remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // Show loading spinner
    addRecipeView.renderSpiner();

    // Upload NEW recipe data
    await model.uploadRecipe(newRecipe);

    // Render recipe
    recipeView.render(model.state.recipe);

    // Success message
    addRecipeView.renderMessage();

    // Render bookmarkView
    bookmarksView.render(model.state.bookmarks);

    // Change ID in the URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    // window.history.back();

    // Close form window
    setTimeout(() => {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSED_SEC * 1000);
  } catch (err) {
    // console.err(' 💥 ', err);
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerCilck(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
