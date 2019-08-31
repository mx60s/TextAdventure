$(document).ready(function () {
  
    var adventure = new Game()
  
    // Focus & Set Version
    $('.console-input').focus()
    var ver = '3.5'
    $('#ver').html(ver)
  
    // Force Lowercase Input
    $('.console-input').keyup(function () {
      // this.value = this.value.toLowerCase();
    })
  
    // Force Cursor to End
    $('.console-input').keydown(function () {
      this.value = this.value
    })
    $('.console-input').click(function () {
      this.value = this.value
    })
  
    // Output to Console
    function output (print) {
      var cmd = $('.console-input').val()
      if (cmd == '') {
        cmd = "<span style='opacity:0;'>...</span>"
      }
      $('#outputs').append(
        "<span class='output-cmd-pre'>User ></span><span class='output-cmd'>" +
          cmd +
          '</span>'
      )
  
      $.each(print, function (index, value) {
        cmd = 'Site'
        cmd += ' >'
        if (value == '') {
          value = '&nbsp;'
        }
        $('#outputs').append(
          "<span class='output-text-pre'>" +
            cmd +
            "</span><span class='output-text'>" +
            value +
            '</span>'
        )
      })
  
      $('.console-input').val('')
      // $('.console-input').focus();
      $('html, body').animate(
        {
          scrollTop: $(document).height()
        },
        300
      )
    }
  
    // Break Value
    var newLine = '<br/> &nbsp;'
  
    // User Commands
    var cmds = {
      '/reset': function () {
        window.location.replace(location.href)
      },
  
      '/say': function (a) {
        output([a])
      },
  
      '/ping': function () {
        output(['Pong!'])
      },
  
      '/pong': function () {
        output(['Use /ping'])
      },
  
      '/alert': function (a) {
        alert(a)
        output([])
      },
  
      '/help': function () {
        var print = ['Commands:', '']
        print = $.merge(print, Object.keys(cmds))
  
        output(print)
      }
    }
  
    // Beginning
    $('.console-input').val('Loading...')
    
    var beginning = [
      '',
      '*************************************************************************************************************',
      '*  Welcome to Maggie\'s HCI bio                                                                              *'.replace(/ /g, '&nbsp;'),
      '*                                                                                                           *'.replace(/ /g, '&nbsp;'),
      '*  To move: north|south, to look at an object: examine (object name), to take an object: take (object name) *'.replace(/ /g, '&nbsp;'),
      '*************************************************************************************************************',
      ''
    ]
    beginning = beginning.concat(adventure.currentRoom.print())
    output(beginning)
  
    $('#outputs').append(
      "<span class='output-text-pre'>" +
        "</span><span class='output-text'>" +
        '</span>'
    )
  
    $('.console-input').val('')
  
    $('html, body').animate(
      {
        scrollTop: $(document).height()
      },
      300
    )
  
    // Get User Command
    $('.console-input').on('keypress', function (event) {
      if (event.which === 13) {
        var str = $(this).val()
        result = adventure.processCommand(str)
        output(result)
        $(this).val('')
      }
    })
  })
  