//create class called App
//create a constructor with no parameters
//create an instance of the class, App and set it to a varable app
class App {
  constructor () {
    this.server = 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages';
    this.messages = [];
  }
  init () {
    $(document).ready(function() {
      $('.username').on('click', function () {
        var name = $(this).val();
        app.handleUsernameClick(name);
      });
      

    //   $('form').submit(function () {
    //     // debugger;
    //     console.log('You clicked me!');
    //     var text = $('#message').val();
    //     app.handleSubmit(text);
    //     console.log(app.handleSubmit.calledOnce);
    //   });
    // });
    // $('#send .submit').on('click', function () {
    //   console.log('You clicked me!');
    //   var text = $('#message').val();
    //   app.handleSubmit(text);
    });
  }

  send (message) {
    //invoke jquery ajax
    $.ajax({
      url: this.server,
      type: 'POST',
      data: message,
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message', data);
      }
    });
  }

  //create a fetch method
  fetch () {
    // invoke the ajax
    // GET
    $.ajax({
      url: this.server,
      type: 'GET',
      success: function(data) {
        app.messages = data.results;
      },
      error: function(data) {
        console.error('failed to fetch messages');
      }
    });
  }
  
  clearMessages () {
    $('#chats').html('');
  } 
  renderMessage (message) {
    //create an html element 
    //add message to this element
    //prepend the element to the div with an id of 'chats'
    
    // loop through the messages array for each iteration
    this.messages.forEach(function(message) {
      var element = `<p><span class='username'>${message.username}</span>${message.text}</p>`;
      $('#chats').prepend(element);
    });
  } 
  renderRoom (room) {
    var element = `<li>${room}</li>`;
    $('#roomSelect').append(element);
  }
  handleUsernameClick (name) {
    var element = `<li>${name}</li>`;
    $('#friendsList').append(element);
  }

  handleSubmit (text) {
    //
  }

}

let app = new App();

$(document).ready(function() {
  $('.username').on('click', function () {
    console.log('You clicked me!');
    var name = $(this).val();
    app.handleUsernameClick(name);
  });
  

  $('form').submit(function () {
    // debugger;
    var text = $('#message').val();
    app.handleSubmit(text);
  });
});


