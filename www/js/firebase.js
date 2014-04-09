  // Get a reference to the root of the chat data.
  var firechat = new Firebase('https://ket7jz zfwha0.firebaseio-demo.com/');

  // When the user presses enter on the message input, write the message to firebase.
  $('#messageInput').keypress(function (e) {
    if (e.keyCode == 13) {
      var name = $('#nameInput').val();
      var text = $('#messageInput').val();
      firechat.push({name:name, text:text});
      $('#messageInput').val('');
    }
  });

  // Add a callback that is triggered for each chat message.
  firechat.limit(10).on('child_added', function (snapshot) {
    var message = snapshot.val();
    $('<div/>').text(message.text).prepend($('<em/>')
      .text(message.name+': ')).appendTo($('#messagesDiv'));
    $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
  });
