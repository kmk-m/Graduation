import Responses from "../../util/response.js";

async function submitQuiz(req, res, next) {
  const { correctAnswers, questionAnswers, quizQuestions } = req.models;
  const { submission } = req.body;
  let grade = 0;
  let finalGrade = 0;
  for (let i in submission) {
    const answer = await correctAnswers.findOne({
      where: {
        questionId: submission[i].questionId,
      },
      include: [
        {
          model: quizQuestions,
          attributes: ["questionGrade"],
        },
      ],
      attributes: ["answerId"],
    });
    if (answer.answerId === submission[i].answerId) {
      grade += answer.quizQuestions.questionGrade;
    }
    finalGrade += answer.quizQuestions.questionGrade;
  }
  return Responses.success(res, "Submit Successfully", { grade, finalGrade });
}
