<script type="text/javascript">
  $(document).ready(function(){

      $('#button').click(function(){
          var datos=$('#form').serialize();
          $.ajax({
              type:"POST",
              url:"",
              data: datos,
              success:function(r){
                  
              }
          })
      })

  })
  </script>