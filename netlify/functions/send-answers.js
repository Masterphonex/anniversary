const { Resend } = require("resend");

exports.handler = async function (event) {

  if (event.httpMethod !== "POST") {

    return {
      statusCode: 405,

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        success: false,
        error: "Method not allowed."
      })
    };

  }


  try {

    const apiKey =
      process.env.RESEND_API_KEY;

    const receiverEmail =
      process.env.WISH_RECEIVER_EMAIL;


    if (!apiKey) {

      console.error(
        "RESEND_API_KEY is missing."
      );

      return {
        statusCode: 500,

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          success: false,
          error:
            "Email service is not configured."
        })
      };

    }


    if (!receiverEmail) {

      console.error(
        "WISH_RECEIVER_EMAIL is missing."
      );

      return {
        statusCode: 500,

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          success: false,
          error:
            "Receiver email is not configured."
        })
      };

    }


    const body =
      JSON.parse(event.body || "{}");


    const questionOne =
      typeof body.questionOne === "string"
        ? body.questionOne.trim()
        : "";


    const questionTwo =
      typeof body.questionTwo === "string"
        ? body.questionTwo.trim()
        : "";


    if (
      !questionOne ||
      !questionTwo
    ) {

      return {
        statusCode: 400,

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          success: false,
          error:
            "Both answers are required."
        })
      };

    }


    if (
      questionOne.length > 5000 ||
      questionTwo.length > 5000
    ) {

      return {
        statusCode: 400,

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          success: false,
          error:
            "One of the answers is too long."
        })
      };

    }


    const resend =
      new Resend(apiKey);


    const email =
      await resend.emails.send({

        from:
          "Eight Months of Us <onboarding@resend.dev>",

        to:
          receiverEmail,

        subject:
          "💌 Winnie answered your two questions",

        text: `
Eight Months of Us ❤️

Winnie answered the two questions from the anniversary website.

━━━━━━━━━━━━━━━━━━━━━━

QUESTION 01

If you could relive one moment with me,
which one would it be?

ANSWER:

${questionOne}


━━━━━━━━━━━━━━━━━━━━━━

QUESTION 02

Something you've really wanted to ask me
but couldn't?

ANSWER:

${questionTwo}


━━━━━━━━━━━━━━━━━━━━━━

Sent from the Eight Months of Us website ❤️
        `.trim()

      });


    if (email.error) {

      console.error(
        "Resend error:",
        email.error
      );

      return {
        statusCode: 500,

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          success: false,
          error:
            "Failed to send the answers."
        })
      };

    }


    return {

      statusCode: 200,

      headers: {
        "Content-Type":
          "application/json"
      },

      body: JSON.stringify({
        success: true,
        message:
          "Answers sent successfully."
      })

    };


  } catch (error) {

    console.error(
      "Send answers error:",
      error
    );

    return {

      statusCode: 500,

      headers: {
        "Content-Type":
          "application/json"
      },

      body: JSON.stringify({
        success: false,
        error:
          "Something went wrong while sending the answers."
      })

    };

  }

};