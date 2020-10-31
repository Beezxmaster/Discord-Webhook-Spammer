/*
    VERSION: 1.0.0 | BY BEEZXMASTER
 */

function sendMessage() {
    /* Define all Variables for Input*/
    let usernameparam = '';
    let contentparam = '';
    let avatar_urlparam = '';
    let webhookparam = '';

    /* Get Input from the HTML File and does the variables */
    webhookparam = document.getElementById('link').value;
    usernameparam = document.getElementById('username').value;
    contentparam = document.getElementById('content').value;

    /* Set Param of all Variables */
    let params = {
        username: usernameparam,
        avatar_url: avatar_urlparam,
        content: contentparam
    }

    /* Send Webhook via fench */
    fetch(webhookparam, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
    }).catch(error => {
        console.log(error);
    })


}