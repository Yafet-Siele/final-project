import React from 'react'

const form = document.querySelector('form');

export default function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ReactProject@gmail.com",
        Password : "F182E20191183F2D87F82D3D0D10B2F33998",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
        message => alert(message)
    );
}
