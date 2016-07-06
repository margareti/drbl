
var dummy = 'Sed quis diam egestas, egestas mauris in, dapibus eros. Duis nisi nulla, accumsan eu libero sit amet, faucibus ornare nisi. Phasellus cursus dolor ante, at placerat est tincidunt vel. In ullamcorper pulvinar est id congue. Pellentesque scelerisque ante vel justo varius, non aliquet est eleifend. Aliquam erat volutpat. Curabitur blandit, lorem eget tincidunt scelerisque, mauris felis pellentesque dolor, et adipiscing nisi ipsum eget est.';

function Comment(dummy) {
  this.comment = ko.observdummy;

  this.addComment = function addComment(comm) {
    this.comment = comm;
  }
}
var viewModel = Comment(dummy)
ko.applyBindings(viewModel);

var commentInput = document.getElementById('comment-input');
commentInput.addEventListener('keyup', getComment);

function getComment(e) {
	var msg;
  if (e.keyCode === 13) {
     msg = this.value;
     console.log(msg);
     viewModel.addComment(msg);
  }
}

ko.bindingHandlers.yourBindingName = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        // This will be called when the binding is first applied to an element
        // Set up any initial state, event handlers, etc. here
    },
    update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        // This will be called once when the binding is first applied to an element,
        // and again whenever any observables/computeds that are accessed change
        // Update the DOM element based on the supplied values here.
    }
};