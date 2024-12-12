$("#register-form").validate(
    {
        rules:{
           name:{
            minlength:3, 
            maxlength:50,
             required:true
           },
          email:{
            required:true
          } ,
          phonenumber:{
            minlength:10,
             maxlength: 14,
              required:true

          },
          age:{
            
            required:true
          },
          gender:{
            minlength: 4,
             maxlength:15,
              required:true
          },
          address:{
            maxlength:50,
            required:false
          }



        },
        messages:{
          age:{
            required:"age in between 18 and 120"
          }
        }
    }
  );

