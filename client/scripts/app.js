//create class called App
//create a constructor with no parameters
//create an instance of the class, App and set it to a varable app
class App {
  constructor () {
    this.server = 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages';
  }
  init () {
    
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
    });
  }
}

let app = new App();
