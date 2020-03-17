//Sends email via form 
function sendEmail() {
    //Form authentication
    if($(".email").val() == '' || $(".email").val() == null){
        alert("Email address is required")
    }

    //Formats and sends email
    Email.send({
    SecureToken: "6b3e04f5-d444-4841-b20e-a801587771ae",
    To : 'holtzclawaussies@gmail.com',
    From : $(".email").val(),
    Subject : $(".name").val(),
    Body : "<b>Name: </b>" + $(".name").val() + "<br></br>" + "<b>Phone: </b>" + $(".phone").val() + "<br></br><br></br>" + $(".message").val(),
    }).then(
        message => console.log("mail sent successfully"),
        clearForm()
    );
}

//Clear out all input fields
function clearForm(){
    $(".name").val('');
    $(".phone").val('');
    $(".email").val('');
    $(".message").val('');
}

//Keeps format for phone
$(window).load(function(){
    var phones = [{ "mask": "(###) ###-####"}, { "mask": "(###) ###-##############"}];
    $('.phone').inputmask({ 
        mask: phones, 
        greedy: false, 
        definitions: { '#': { validator: "[0-9]", cardinality: 1}} });
});
