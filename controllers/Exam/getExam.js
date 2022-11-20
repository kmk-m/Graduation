import Responses from "../../util/response.js";

async function getExam(req, res, next) {
  const { examId } = req.params;
  const { quiz, quizQuestions, questionAnswers, quizeQuestions } = req.models;
  const Quiz = await quiz.findOne({
    where: {
      id: examId,
    },
    attributes: ["name", "time", "numberOfQuestions"],
  });

  const questions = await quizQuestions.findAll({
    where: {
      quizId: examId,
    },
    attributes: [
      "id",

      "quizId",
      "questionType",
      "questionText",
      "questionImage",
    ],
    include: [
      {
        model: questionAnswers,
        attributes: ["id", "answerType", "answerText", "answerImage"],
      },
    ],
  });

  const Questions = [];

  function generateUniqueRandom(maxNr) {
    //Generate random number
    let random = (Math.random() * maxNr).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if (!Questions.includes(random)) {
      Questions.push(questions[random]);
      return random;
    } else {
      if (Questions.length < maxNr) {
        //Recursively generate number
        return generateUniqueRandom(maxNr);
      } else {
        console.log("No more numbers available.");
        return false;
      }
    }
  }
  for (let i = 0; i < Quiz.numberOfQuestions; i++) {
    generateUniqueRandom(questions.length);
  }
  console.log(Questions);
  return Responses.success(res, "get Quiz Successfully", { Quiz, Questions });
}
export default getExam;
