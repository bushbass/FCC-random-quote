// QUOTES FROM http://www.moviequotedb.com/movies/real-genius.html
var quotes = [
  {
    id: 0,
    quote:
      "Chris Knight- I have advanced your project more than any three students on campus.  <br>Jerry Hathaway- That was yesterday. What have you done for me today?"
  },
  {
    id: 1,
    quote:
      "Chris Knight- I'm sorry, but have you ever seen a body like this before in your life?  <br>David Decker- She happens to be my daughter.  <br>Chris Knight- Oh. Then I guess you have."
  },
  {
    id: 2,
    quote:
      "Chris Knight- I'm sorry, it was just an infantile response to authority.  <br>Recruiter- Yes. You are Chris Knight, aren't you?  <br>Chris Knight- I hope so. I'm wearing his underwear."
  },
  {
    id: 3,
    quote:
      "Chris Knight- I'm such an asshole. <br>Lazlo Hollyfeld- I understand how you feel, Chris. And you're right."
  },
  {
    id: 4,
    quote:
      "Bodie: Well, I guess it goes from God, to Jerry, to you, to the cleaners. Right, Kent?"
  },
  {
    id: 5,
    quote:
      "Ick- It worked! Now if we can just keep it from exploding.<br>Kent- Explo-?[runs into his room]<br>Chris Knight- [coughing, as the hall fills with vapor] Hey Ick, you were just kidding about exploding, right? Ick?"
  },
  {
    id: 6,
    quote:
      "Chris Knight- Did you touch anything?<br>Mitch Taylor- Uh, no.<br>Chris Knight- Good. Because all of my filth is arranged in alphabetical order. This, for instance, is under H for toy.<br>Mitch Taylor- What is it?<br>Chris Knight- A penis-stretcher. Wanna try it?<br>Mitch Taylor- No!<br>Chris Knight- I'm kidding. It's yet another in a long series of diversions in an attempt to avoid responsibility."
  },
  {
    id: 7,
    quote:
      "Chris Knight: Hey, Lazlo... Lazlo?<br>Lazlo Hollyfeld: Oh, that's me. Hello."
  },
  {
    id: 8,
    quote:
      "Chris Knight: I have advanced your project more than any three students on campus.<br>Jerry Hathaway: That was yesterday. What have you done for me today?"
  },
  {
    id: 9,
    quote:
      "Chris Knight: I'm sorry, but have you ever seen a body like this before in your life?<br>David Decker: She happens to be my daughter.<br>Chris Knight: Oh. Then I guess you have."
  },
  {
    id: 10,
    quote:
      "Chris Knight: I'm sorry, it was just an infantile response to authority.<br>Recruiter: Yes. You are Chris Knight, aren't you?<br>Chris Knight: I hope so. I'm wearing his underwear."
  },
  {
    id: 11,
    quote:
      "Chris Knight: I'm such an asshole.<br>Lazlo Hollyfeld: I understand how you feel, Chris. And you're right."
  },
  {
    id: 12,
    quote:
      "Chris Knight: Ick, this ice is great! How did you do it?<br>Ick: Oh sure, I tell you, you tell someone else and the next thing you know, we're in the middle of another ice age."
  },
  {
    id: 13,
    quote:
      "Chris Knight: If you want to leave, go ahead. But you're going to miss out on all the fun.<br>Mitch Taylor: What fun?<br>Chris Knight: Ick invented a new virus and we're going to release in Kent's room."
  },
  {
    id: 14,
    quote:
      "Chris Knight: Kent put his name on his license plate.<br>Mitch: My mother does that to my underwear.<br>Chris Knight: Your mother puts license plates in your underwear? How do you sit?"
  },
  {
    id: 15,
    quote:
      "Chris Knight: No seriously, listen...if there's ever anything I can do for you, or more to the point, to you, you let me know, okay?<br>Susan Decker: Can you hammer a six inch spike through a board with your penis?<br>Chris Knight: Not right now.<br>Susan Decker: A girl's got to have her standards."
  },
  {
    id: 16,
    quote:
      "Chris Knight: You are very beautiful.<br>Sherry Nugel: Thank you. You certainly don't act like one of the top ten minds in America.<br>Chris Knight: Oh, really? How many of them have you met?<br>Sherry Nugel: Seven. You'll be eight. Professor Hostetler at M.I.T. was number six.<br>Chris Knight: Old Professor Hostetler? Isn't he dead?<br>Sherry Nugel: He is now."
  },
  {
    id: 17,
    quote:
      "Dr. Dodd: Why is that toy on your head?<br>Chris Knight: Because if I wear it any place else, it chafes."
  },
  {
    id: 18,
    quote:
      "Dr. Meredith: A bit of advice.<br>Mitch: [pulls out notebook to write down what Dr. Meredith says] Oh, uh, thank you?<br>Dr. Meredith: Always...uh...never...forget to check your references.<br>Mitch: Uh, OK...thank you. I'd better be going.<br>Mitch leaves<br>Dr. Meredith: to his wife- I think the young people enjoy it when I get down verbally, don't you?"
  }
];

$("button#button").on("click", function() {
  var random = Math.floor(Math.random() * 17);
  $("div#quote").html(quotes[random].quote);
});

$("#tweetButton").on("click", function() {
  var currentQuote = $("div#quote").text();
  $(this)
    .attr("href", "https://twitter.com/intent/tweet?text=" + currentQuote)
    .attr("target", "_blank");
});
