
var dummy = 'Sed quis diam egestas, egestas mauris in, dapibus eros. Duis nisi nulla, accumsan eu libero sit amet, faucibus ornare nisi. Phasellus cursus dolor ante, at placerat est tincidunt vel. In ullamcorper pulvinar est id congue. Pellentesque scelerisque ante vel justo varius, non aliquet est eleifend. Aliquam erat volutpat. Curabitur blandit, lorem eget tincidunt scelerisque, mauris felis pellentesque dolor, et adipiscing nisi ipsum eget est.';

function Comment(dummy) {
  this.comment = ko.observable(dummy);

  this.myFunction = function myFunction(data, event) {
    if (event.keyCode === 13) {
      var msg = document.getElementById('comment-input').value;
      this.comment(msg);
    }
  }
}
var viewModel = Comment(dummy);
ko.applyBindings(viewModel);



