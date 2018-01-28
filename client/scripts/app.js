//create class called App
//create a constructor with no parameters
//create an instance of the class, App and set it to a varable app
class App {
  constructor () {
    this.server = 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages';
    this.username = 'bunny';
    this.messages = [];
    this.roomname = 'lobby';

  }
  init () {   
    // $(document).ready(function() {
    //   $('.username').on('click', function () {
    //     var name = $(this).val();
    //     app.handleUsernameClick(name);
    //   });
    // });
  }

  send (message) {
    //invoke jquery ajax
    $.ajax({
      url: this.server,
      type: 'POST',
      data: JSON.stringify(message),
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
      data: 'order=-createdAt&limit=10',
      contentType: 'application/json',
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
    var element = `<p id='${message.roomname}' class='${_.escape(message.username)}'><span class='username'>${_.escape(message.username)}</span>:  ${_.escape(message.text)}</p>`;
    $('#chats').append(element);
    // this.init();
  } 
  renderRoom (room) {         
    $('#roomSelect').append(element);
  }
  handleUsernameClick (name) {
    // var element = `<li>${name}</li>`;
    // $('#friendsList').append(element);
    $(`.${name}`).css({'font-weight': 'bold'});
  }

  handleSubmit (text) {
    let message = {
      username: this.username,
      text: text,
      roomname: this.roomname
    };
    this.send(message);
  }

}

let app = new App();

$(document).ready(function() {
  $('.username').on('click', function () {
    console.log('You clicked me!');
    var name = $(this).val();
    app.handleUsernameClick(name);
  });
});


