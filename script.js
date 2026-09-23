/* =========================================
   ELEMENTS
========================================= */

const loader = document.getElementById("loader");
const nav = document.getElementById("nav");

const enterButton =
  document.getElementById("enterButton");

const navMenu =
  document.getElementById("navMenu");

const navOverlay =
  document.getElementById("navOverlay");

const closeMenu =
  document.getElementById("closeMenu");

const letterSeal =
  document.getElementById("letterSeal");

const envelopeContainer =
  document.getElementById("envelopeContainer");

const envelope =
  envelopeContainer.querySelector(".envelope");

const letterHint =
  document.getElementById("letterHint");

const nextThing =
  document.getElementById("nextThing");

const thingNumber =
  document.getElementById("thingNumber");

const thingCounter =
  document.getElementById("thingCounter");

const thingTitle =
  document.getElementById("thingTitle");

const thingText =
  document.getElementById("thingText");

const thingProgress =
  document.getElementById("thingProgress");

const clock =
  document.querySelector(".clock");

// const stopTimeButton =
//   document.getElementById("stopTimeButton");

const timeMessage =
  document.getElementById("timeMessage");

const replayButton =
  document.getElementById("replayButton");

const gameModal =
  document.getElementById("gameModal");

const gameContent =
  document.getElementById("gameContent");

const modalClose =
  document.getElementById("modalClose");

const questionsForm =
  document.getElementById("questionsForm");

const formMessage =
  document.getElementById("formMessage");

const submitAnswers =
  document.getElementById("submitAnswers");

const stars =
  document.getElementById("stars");


/* =========================================
   LOADER
========================================= */

window.addEventListener("load", () => {

  setTimeout(() => {

    loader.classList.add("hide");

    nav.classList.add("visible");

  }, 1200);

});


/* =========================================
   STARS
========================================= */

function createStars() {

  const amount =
    window.innerWidth < 600
      ? 45
      : 90;

  for (let i = 0; i < amount; i++) {

    const star =
      document.createElement("span");

    star.className = "star";

    star.style.left =
      `${Math.random() * 100}%`;

    star.style.top =
      `${Math.random() * 100}%`;

    star.style.animationDelay =
      `${Math.random() * 4}s`;

    star.style.animationDuration =
      `${3 + Math.random() * 4}s`;

    stars.appendChild(star);

  }

}

createStars();


/* =========================================
   NAVIGATION
========================================= */

navMenu.addEventListener("click", () => {

  navOverlay.classList.add("open");

  document.body.style.overflow = "hidden";

});

closeMenu.addEventListener("click", closeNavigation);

document
  .querySelectorAll(".nav-links a")
  .forEach(link => {

    link.addEventListener("click", () => {
      closeNavigation();
    });

  });

function closeNavigation() {

  navOverlay.classList.remove("open");

  document.body.style.overflow = "";

}


/* =========================================
   ENTER
========================================= */

enterButton.addEventListener("click", () => {

  document
    .querySelector(".intro")
    .scrollIntoView({
      behavior: "smooth"
    });

});


/* =========================================
   SCROLL REVEALS
========================================= */

const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

        }

      });

    },
    {
      threshold: 0.15
    }
  );

document
  .querySelectorAll(".reveal")
  .forEach(element => {

    revealObserver.observe(element);

  });


/* =========================================
   LETTER
========================================= */

letterSeal.addEventListener("click", event => {

  event.stopPropagation();

  envelope.classList.toggle("open");

  if (envelope.classList.contains("open")) {

    letterHint.textContent =
      "Take your time. Read every word. ❤️";

  } else {

    letterHint.textContent =
      "Tap the heart to open the letter";

  }

});


/* =========================================
   8 THINGS
========================================= */

const things = [

  {
    title: "Your heart.",
    text:
      "The way you care and show love"
  },

  {
    title: "Your smile.",
    text:
      "That your cute smile, i always end up smilling also 😂"
  },

  {
    title: "Your stubbornness.",
    text:
      "Yes, this one must be on the list 😂. You can be incredibly stubborn, but somehow even that has become one of the little things that makes you you."
  },

  {
    title: "Your little habits.",
    text:
      "The tiny things you do that you probably don't even notice have somehow become things I recognize, remember and secretly love."
  },

  {
    title: "The way you care.",
    text:
      "Already mentioned this, but i still want to add it again "
  },

  {
    title: "The way you're God fearing",
    text:
      "You're God fearing, the bible studies, you are even a good encouragement to me😌💖"
  },

  {
    title: "Your Beauty",
    text:
      "This one have to be on the list also 😌, you're cute, hot, beautiful, just everything🥰"
  },

  {
    title: "Simply... you.",
    text:
      "After everything else, this is probably the simplest answer. I love you because you're you."
  }

];

let currentThing = 0;

function updateThing() {

  const thing =
    things[currentThing];

  thingNumber.textContent =
    String(currentThing + 1)
      .padStart(2, "0");

  thingCounter.textContent =
    `${currentThing + 1} / 8`;

  thingTitle.textContent =
    thing.title;

  thingText.textContent =
    thing.text;

  thingProgress.style.width =
    `${((currentThing + 1) / 8) * 100}%`;

}

nextThing.addEventListener("click", () => {

  const card =
    document.querySelector(".thing-card");

  card.style.transform =
    "translateX(25px) rotate(1deg)";

  card.style.opacity = "0";

  setTimeout(() => {

    currentThing++;

    if (currentThing >= things.length) {
      currentThing = 0;
    }

    updateThing();

    card.style.transform =
      "translateX(-25px) rotate(-1deg)";

    requestAnimationFrame(() => {

      card.style.transform =
        "translateX(0) rotate(0)";

      card.style.opacity = "1";

    });

  }, 300);

});

updateThing();


/* =========================================
   TIME
========================================= */

let timeStopped = false;

// stopTimeButton.addEventListener("click", () => {

//   timeStopped = !timeStopped;

//   if (timeStopped) {

//     clock.classList.add("frozen");

//     stopTimeButton.querySelector("span")
//       .textContent =
//       "Start time again";

//     timeMessage.textContent =
//       "If I could really stop time, I'd keep one of those little moments where it's just you and me, where you're laughing, I'm looking at you, and neither of us is thinking about what comes next.";

//   } else {

//     clock.classList.remove("frozen");

//     stopTimeButton.querySelector("span")
//       .textContent =
//       "Stop time";

//     timeMessage.textContent =
//       "And maybe that's the beautiful part. We can't stop time. We can only keep making moments worth remembering.";

//   }

// });


/* =========================================
   GAME SYSTEM
========================================= */

const gameCards =
  document.querySelectorAll(".game-card");

gameCards.forEach(card => {

  card.addEventListener("click", () => {

    const game =
      card.dataset.game;

    openGame(game);

  });

});

modalClose.addEventListener(
  "click",
  closeGame
);

document
  .querySelector(".game-modal-backdrop")
  .addEventListener(
    "click",
    closeGame
  );

function openGame(game) {

  gameModal.classList.add("open");

  document.body.style.overflow = "hidden";

  if (game === "quiz") {
    startQuiz();
  }

  if (game === "hearts") {
    startHeartGame();
  }

  if (game === "unlock") {
    startUnlockGame();
  }

}

function closeGame() {

  gameModal.classList.remove("open");

  document.body.style.overflow = "";

  gameContent.innerHTML = "";

}


/* =========================================
   GAME 1
   QUIZ
========================================= */

const quizQuestions = [

  {
    question:
      "What are we celebrating?",
    options: [
      "8 days",
      "8 months",
      "8 years",
      "8 minutes"
    ],
    answer: 1
  },

  {
    question:
      "Who is this entire website secretly made for?",
    options: [
      "My lecturer",
      "My barber",
      "Winnie",
      "My keyboard"
    ],
    answer: 2
  },

  {
    question:
      "What should you do when you finish this website?",
    options: [
      "Forget everything",
      "Smile",
      "Sleep immediately",
      "Delete the internet"
    ],
    answer: 1
  }

];

let quizIndex = 0;
let quizScore = 0;

function startQuiz() {

  quizIndex = 0;
  quizScore = 0;

  renderQuiz();

}

function renderQuiz() {

  if (quizIndex >= quizQuestions.length) {

    renderQuizResult();

    return;

  }

  const question =
    quizQuestions[quizIndex];

  gameContent.innerHTML = `

    <p class="eyebrow">
      GAME 01
    </p>

    <h2 class="game-title">
      How well do you know us?
    </h2>

    <p class="game-description">
      Question ${quizIndex + 1}
      of ${quizQuestions.length}
    </p>

    <div class="quiz-question">
      ${question.question}
    </div>

    <div class="quiz-options">

      ${question.options
        .map(
          (option, index) => `
            <button
              class="quiz-option"
              data-index="${index}"
            >
              ${option}
            </button>
          `
        )
        .join("")}

    </div>

  `;

  document
    .querySelectorAll(".quiz-option")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const selected =
            Number(button.dataset.index);

          const buttons =
            document.querySelectorAll(
              ".quiz-option"
            );

          buttons.forEach(
            btn => btn.disabled = true
          );

          if (
            selected ===
            question.answer
          ) {

            button.classList.add(
              "correct"
            );

            quizScore++;

          } else {

            button.classList.add(
              "wrong"
            );

            buttons[
              question.answer
            ].classList.add(
              "correct"
            );

          }

          setTimeout(() => {

            quizIndex++;

            renderQuiz();

          }, 900);

        }
      );

    });

}

function renderQuizResult() {

  let message;

  if (quizScore === 3) {

    message =
      "Okayyyy 👀 You actually know your stuff.";

  } else if (quizScore === 2) {

    message =
      "Not bad 😂. I'll give you that.";

  } else {

    message =
      "Hmmmm... we need to have a conversation. 😂❤️";

  }

  gameContent.innerHTML = `

    <div class="quiz-result">

      <p class="eyebrow">
        Game complete
      </p>

      <h2 class="game-title">
        You got
      </h2>

      <div class="quiz-result-number">
        ${quizScore}/3
      </div>

      <p class="game-description">
        ${message}
      </p>

      <button
        class="primary-button"
        id="playQuizAgain"
      >
        Play again
      </button>

    </div>

  `;

  document
    .getElementById("playQuizAgain")
    .addEventListener(
      "click",
      startQuiz
    );

}


/* =========================================
   GAME 2
   CATCH HEARTS
========================================= */

let heartGameInterval;
let heartTimerInterval;

function startHeartGame() {

  clearInterval(heartGameInterval);
  clearInterval(heartTimerInterval);

  gameContent.innerHTML = `

    <p class="eyebrow">
      GAME 02
    </p>

    <h2 class="game-title">
      Catch my hearts ❤️
    </h2>

    <p class="game-description">
      You have 20 seconds.
      Catch as many hearts as you can.
    </p>

    <div class="heart-game">

      <div class="heart-score">
        Hearts: <span id="heartScore">0</span>
      </div>

      <div class="heart-time">
        Time: <span id="heartTime">20</span>
      </div>

      <div class="heart-start" id="heartStart">

        <p>
          Ready?
        </p>

        <button
          class="primary-button"
          id="startHeartButton"
        >
          Start
        </button>

      </div>

    </div>

  `;

  document
    .getElementById("startHeartButton")
    .addEventListener(
      "click",
      runHeartGame
    );

}

function runHeartGame() {

  const game =
    document.querySelector(
      ".heart-game"
    );

  const start =
    document.getElementById(
      "heartStart"
    );

  const scoreElement =
    document.getElementById(
      "heartScore"
    );

  const timeElement =
    document.getElementById(
      "heartTime"
    );

  start.style.display = "none";

  let score = 0;
  let time = 20;

  heartGameInterval =
    setInterval(() => {

      createFallingHeart(
        game,
        () => {

          score++;

          scoreElement.textContent =
            score;

        }
      );

    }, 450);

  heartTimerInterval =
    setInterval(() => {

      time--;

      timeElement.textContent =
        time;

      if (time <= 0) {

        clearInterval(
          heartGameInterval
        );

        clearInterval(
          heartTimerInterval
        );

        finishHeartGame(
          game,
          score
        );

      }

    }, 1000);

}

function createFallingHeart(
  game,
  onCatch
) {

  const heart =
    document.createElement(
      "button"
    );

  heart.className =
    "falling-heart";

  heart.textContent =
    "♥";

  heart.style.left =
    `${5 + Math.random() * 88}%`;

  heart.style.top =
    `${15 + Math.random() * 75}%`;

  game.appendChild(heart);

  heart.addEventListener(
    "click",
    () => {

      onCatch();

      heart.remove();

    }
  );

  setTimeout(() => {

    if (heart.isConnected) {
      heart.remove();
    }

  }, 1100);

}

function finishHeartGame(
  game,
  score
) {

  game.innerHTML = `

    <div class="heart-start">

      <div
        class="secret-heart"
        style="
          font-size: 4rem;
          color: var(--pink);
          margin-bottom: 20px;
        "
      >
        ♥
      </div>

      <h3
        style="
          font-family: var(--serif);
          font-size: 2rem;
          margin-bottom: 15px;
        "
      >
        You caught ${score} hearts.
      </h3>

    </div>

  `;

}


/* =========================================
   GAME 3
   UNLOCK
========================================= */

const unlockQuestions = [

  {
    question:
      "What are we celebrating?",
    options: [
      "Our first week",
      "Our 8 months",
      "My birthday"
    ],
    answer: 1
  },

  {
    question:
      "What am I asking you to do?",
    options: [
      "Leave immediately 😂",
      "Read this little world",
      "Buy me food"
    ],
    answer: 1
  },

  {
    question:
      "Who is very loved?",
    options: [
      "Winnie ❤️",
      "The website",
      "Nobody"
    ],
    answer: 0
  }

];

let unlockIndex = 0;

function startUnlockGame() {

  unlockIndex = 0;

  renderUnlock();

}

function renderUnlock() {

  if (
    unlockIndex >=
    unlockQuestions.length
  ) {

    showSecretMessage();

    return;

  }

  const question =
    unlockQuestions[unlockIndex];

  gameContent.innerHTML = `

    <div class="lock-stage">

      <div class="lock-icon">
        🔐
      </div>

      <p class="eyebrow">
        LOCK ${unlockIndex + 1}/3
      </p>

      <h2 class="lock-question">
        ${question.question}
      </h2>

      <div class="lock-options">

        ${question.options
          .map(
            (option, index) => `
              <button
                class="lock-option"
                data-index="${index}"
              >
                ${option}
              </button>
            `
          )
          .join("")}

      </div>

    </div>

  `;

  document
    .querySelectorAll(".lock-option")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const selected =
            Number(button.dataset.index);

          if (
            selected ===
            question.answer
          ) {

            unlockIndex++;

            renderUnlock();

          } else {

            button.textContent =
              "Nope 😂 Try again";

          }

        }
      );

    });

}

function showSecretMessage() {

  gameContent.innerHTML = `

    <div class="secret-message">

      <div class="secret-heart">
        ♥
      </div>

      <p class="eyebrow">
        Unlocked
      </p>

      <h2 class="game-title">
        You found it.
      </h2>

      <p>
        Here's your secret message:
      </p>

      <p
        style="
          margin-top: 25px;
          color: white;
          font-family: var(--serif);
          font-size: 1.5rem;
        "
      >
        No matter how many little things
        I put on this website,
        they all lead back to the same thing...
      </p>

      <p
        style="
          margin-top: 20px;
          color: var(--pink-light);
          font-family: var(--serif);
          font-size: 2rem;
        "
      >
        I love you. ❤️
      </p>

    </div>

  `;

}


/* =========================================
   QUESTIONS → EMAIL
========================================= */

questionsForm.addEventListener(
  "submit",
  async event => {

    event.preventDefault();

    const questionOne =
      document
        .getElementById("questionOne")
        .value
        .trim();

    const questionTwo =
      document
        .getElementById("questionTwo")
        .value
        .trim();

    if (
      !questionOne ||
      !questionTwo
    ) {

      formMessage.textContent =
        "Answer both of them for me first ❤️";

      return;

    }

    submitAnswers.disabled = true;

    submitAnswers.querySelector("span")
      .textContent =
      "Sending your answers...";

    formMessage.textContent = "";

    try {

      const response =
        await fetch(
          "/.netlify/functions/send-answers",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body: JSON.stringify({
              questionOne,
              questionTwo
            })
          }
        );

      const result =
        await response.json();

      if (
        !response.ok ||
        !result.success
      ) {

        throw new Error(
          result.error ||
          "Unable to send answers."
        );

      }

      formMessage.textContent =
        "They're on their way to me. ❤️";

      questionsForm.reset();

      submitAnswers.querySelector("span")
        .textContent =
        "Sent ❤️";

    } catch (error) {

      console.error(error);

      formMessage.textContent =
        "Something went wrong. Please try again.";

      submitAnswers.disabled = false;

      submitAnswers.querySelector("span")
        .textContent =
        "Send them to me";

    }

  }
);


/* =========================================
   REPLAY
========================================= */

replayButton.addEventListener(
  "click",
  () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closeNavigation();

      closeGame();

    }

  }
);