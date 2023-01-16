const { createTransport } = require("nodemailer");
const sendMail = async (email, subject, text) => {
    const transport = createTransport({
        service: "gmail",
        auth: {
            user: "haseebullahmemon33@gmail.com",
            pass: "ekxzxmyveczywiep",
        },
    });
    await transport.sendMail(
        {
            from: "haseebullahmemon33@gmail.com",
            to: email,
            subject,
            text,
        },
        (err, info) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Email sent" + info.response);
            }
        }
    );
};

// ekxzxmyveczywiep
module.exports = sendMail;
