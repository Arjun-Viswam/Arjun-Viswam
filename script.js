    $(document).ready(function () {
      var nflag=1,eflag=1,pflag=1
      $("#fname").blur(function () {
        var text = $(this).val()
        if (text.length < 4) {
          $("#err1").show()
          nflag=1
        }
        else {
          $("#err1").hide()
          nflag=0
        }
        if (/^[A-Za-z ]+$/.test(text) == false) {
          $("#err2").show()
          nflag=1
        }
        else {
          $("#err2").hide()
          nflag=0
        }
      })

      $("#lname").blur(function () {
        var text = $(this).val()
        if (text.length < 4) {
          $("#err3").show()
          nflag=1
        }
        else {
          $("#err3").hide()
          nflag=0
        }
        if (/^[A-Za-z ]+$/.test(text) == false) {
          $("#err4  ").show()
          nflag=1
        }
        else {
          $("#err4  ").hide()
          nflag=0
        }
      })


      $("#email").blur(function () {
        var text = $(this).val()
        if (/^[A-Za-z0-9]+\@[a-z]+\.[a-z]+$/.test(text) == false) {
          $("#err5").show()
          eflag=1
        }
        else {
          $("#err5").hide() 
          eflag=0
        }
      })
      $("#number").blur(function () {
        var text = $(this).val()
        if (text.length == 10) {
          if (/^[0-9]+$/.test(text) == true) {
            $("#err6").hide()
            pflag=0
          }
          else {
            $("#err6").show()
            pflag=1
          }
        }
        else {
          $("#err6").show()
          pflag=1
        }
      })
      $("#signup    ").click(function(){
        if(nflag==0 && pflag==0 && eflag==0)
        {
          alert("Message is sent")
        }
        else
        {
          alert("Please enter your details properly")
        }
      })
    })
