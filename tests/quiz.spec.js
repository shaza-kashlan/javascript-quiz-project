describe("Quiz", () => {
  describe("class", () => {
    it("should be defined", () => {
      // Check if the Quiz class is defined
      expect(Quiz).toBeDefined();
    });

    it("should receive 3 arguments", () => {
      // Check if the Quiz class takes 3 arguments
      expect(Quiz.length).toEqual(3);
    });

    it("should receive 'questions' array as its 1st argument and store it in a 'questions' property", () => {
      // Array with questions to be used in the test and passed to the Quiz constructor
      const testQuestions = ["question1", "question2", "question3"];

      // Instantiate a new Quiz object with the test questions
      const quiz = new Quiz(testQuestions, 60, 60);
      // Check if the questions property is equal to the test questions array passed to the constructor
      expect(quiz.questions).toEqual(testQuestions);
    });

    it("should receive 'timeLimit' integer as its 2nd argument and store it in a 'timeLimit' property", () => {
      // Integer with the time limit to be used in the test and passed to the Quiz constructor
      const testTime = 120;
      // Instantiate a new Quiz object with the test time limit
      const quiz = new Quiz([], testTime, 60);
      // Check if the timeLimit property is equal to the test time argument passed to the constructor
      expect(quiz.timeLimit).toEqual(testTime);
    });

    it("should receive 'timeRemaining' integer as its 3rd argument and store it in a 'timeRemaining' property", () => {
      // Integer with the time limit to be used in the test and passed to the Quiz constructor
      const testTime = 120;
      // Instantiate a new Quiz object with the test time limit
      const quiz = new Quiz([], 60, testTime);
      // Check if the timeRemaining property is equal to the test time argument passed to the constructor
      expect(quiz.timeRemaining).toEqual(testTime);
    });

    it("should have a 'correctAnswers' property initially set to 0", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the correctAnswers property is initially set to 0
      expect(quiz.correctAnswers).toEqual(0);
    });

    it("should have a 'currentQuestionIndex' property initially set to 0", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the currentQuestionIndex property is initially set to 0
      expect(quiz.currentQuestionIndex).toEqual(0);
    });
  });

  describe("getQuestion() method", () => {
    it("should be defined", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the getQuestion() method is defined
      expect(quiz.getQuestion).toBeDefined();
    });

    it("should be a function", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the .getQuestion is a function
      expect(typeof quiz.getQuestion).toBe("function");
    });

    it("should return the item from the 'questions' array at the position of 'currentQuestionIndex'", () => {
      // Array with questions to be used in the test and passed to the Quiz constructor
      const testQuestions = ["question1", "question2", "question3"];

      // Instantiate a new Quiz object with the test questions
      const quiz1 = new Quiz(testQuestions, 60, 60);
      // Check if the getQuestion() method returns the correct question
      expect(quiz1.getQuestion()).toEqual("question1");

      // Instantiate another Quiz object with the test questions
      const quiz2 = new Quiz(testQuestions, 60, 60);
      // Manually set the currentQuestionIndex to 2
      quiz2.currentQuestionIndex = 2;
      // Check if the getQuestion() method returns the correct question
      expect(quiz2.getQuestion()).toEqual("question3");
    });
  });

  describe("moveToNextQuestion() method", () => {
    it("should be defined", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the moveToNextQuestion() method is defined
      expect(quiz.moveToNextQuestion).toBeDefined();
    });

    it("should be a function", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the .moveToNextQuestion is a function
      expect(typeof quiz.moveToNextQuestion).toBe("function");
    });

    it("should increment the 'currentQuestionIndex' by 1", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz(["a", "b", "c"], 60, 60);
      // Call the moveToNextQuestion() method which should increment the currentQuestionIndex by 1
      quiz.moveToNextQuestion();
      // Check if the currentQuestionIndex property has been increased by 1
      expect(quiz.currentQuestionIndex).toEqual(1);
    });
  });

  describe("shuffleQuestions() method", () => {
    it("should be defined", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the shuffleQuestions() method is defined
      expect(quiz.shuffleQuestions).toBeDefined();
    });

    it("should be a function", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the .shuffleQuestions is a function
      expect(typeof quiz.shuffleQuestions).toBe("function");
    });

    it("should shuffle the items in the 'questions' array", () => {
      // Array with questions to be used in the test and passed to the Quiz constructor
      const testQuestions = [
        "question1",
        "question2",
        "question3",
        "question4",
        "question5",
        "question6",
        "question7",
      ];
      // Instantiate a new Quiz object with the test questions
      const quiz = new Quiz(testQuestions, 60, 60);
      // Call the shuffleQuestions() method to shuffle the questions array in the quiz
      quiz.shuffleQuestions();
      // Check if the questions array is not equal to the original array (it has been changed/shuffled)
      expect(quiz.questions).not.toEqual([
        "question1",
        "question2",
        "question3",
        "question4",
        "question5",
        "question6",
        "question7",
      ]);
      expect(quiz.questions.length).toEqual(testQuestions.length);
    });
  });

  describe("checkAnswer() method", () => {
    it("should be defined", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the checkAnswer() method is defined
      expect(quiz.checkAnswer).toBeDefined();
    });

    it("should be a function", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the checkAnswer() method is a function
      expect(typeof quiz.checkAnswer).toBe("function");
    });

    it("should receive 1 argument (answer)", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the checkAnswer() method receives 1 argument
      expect(quiz.checkAnswer.length).toEqual(1);
    });

    it("should increase 'correctAnswers' by 1 when a correct answer is passed as an argument", () => {
      // Array with questions to be used in the test and passed to the Quiz constructor
      const testQuestions = [
        { text: "Question 1", choices: ["a", "b", "c"], answer: "a" },
        { text: "Question 2", choices: ["d", "e", "f"], answer: "e" },
        { text: "Question 3", choices: ["x", "y", "z"], answer: "z" },
      ];

      // Instantiate a new Quiz object with the test questions
      const quiz = new Quiz(testQuestions, 60, 60);

      // Call the checkAnswer() method with the correct answer
      quiz.checkAnswer("a");

      // Check if the correctAnswers property has been increased by 1
      expect(quiz.correctAnswers).toEqual(1);

      // Call the moveNextQuestion() method to move to the next question
      // Call the checkAnswer() method with the correct answer
      quiz.moveToNextQuestion();
      quiz.checkAnswer("e");

      // Check if the correctAnswers property has been increased by 1
      expect(quiz.correctAnswers).toEqual(2);

      // Call the moveNextQuestion() method to move to the next question
      // Call the checkAnswer() method with the correct answer
      quiz.moveToNextQuestion();
      quiz.checkAnswer("z");

      // Check if the correctAnswers property has been increased by 1
      expect(quiz.correctAnswers).toEqual(3);
    });

    it("should check if the answer is correct by comparing it to the 'answer' property of the current question", () => {
      const testQuestions = [
        { text: "Question 1", choices: ["a", "b", "c"], answer: "b" },
        { text: "Question 2", choices: ["d", "e", "f"], answer: "f" },
        { text: "Question 3", choices: ["x", "y", "z"], answer: "y" },
      ];

      // Get a random index from the test questions array
      const randomQuestionIndex = Math.floor(
        Math.random() * testQuestions.length
      );

      // Instantiate a new Quiz object with the test questions
      const quiz = new Quiz(testQuestions, 60, 60);
      const initialCorrectAnswers = quiz.correctAnswers;

      // Manualy set the `quiz.currentQuestionIndex` to the random index
      quiz.currentQuestionIndex = randomQuestionIndex;

      // Call the checkAnswer() method with the correct answer for the current question
      quiz.checkAnswer(testQuestions[randomQuestionIndex].answer);

      // Check if the correctAnswers property has been increased by 1
      expect(quiz.correctAnswers).toEqual(initialCorrectAnswers + 1);
    });
  });

  describe("hasEnded() method", () => {
    it("should be defined", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the hasEnded() method is defined
      expect(quiz.hasEnded).toBeDefined();
    });

    it("should be a function", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], 60, 60);
      // Check if the .hasEnded is a function
      expect(typeof quiz.hasEnded).toBe("function");
    });

    it("should return 'false' when 'currentQuestionIndex' is less than the 'questions' array length", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz(["a", "b", "c"], 60, 60);
      // Manually set the currentQuestionIndex to 2
      quiz.currentQuestionIndex = 2;
      // Check if the hasEnded() method returns false
      expect(quiz.hasEnded()).toBe(false);
    });

    it("should return 'true' when 'currentQuestionIndex' is equal to the 'questions' array length", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz(["a", "b", "c"], 60, 60);
      // Manually set the currentQuestionIndex to 3
      quiz.currentQuestionIndex = 3;
      // Check if the hasEnded() method returns true
      expect(quiz.hasEnded()).toBe(true);
    });
  });

  // ****************************************************************************************************
  // DAY 2
  //
  // The 1st test is already written for you -  checking if the 'filter()' array method is used.
  //
  // The test block below is currently skipped ('xdescribe').
  // Once you start working on the tests, change the 'xdescribe' to 'describe' to enable the tests.
  // ****************************************************************************************************

  describe("filterQuestionsByDifficulty() method", () => {
    it("should use the 'filter()' array method on the 'questions' array", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], "test", 60);
      // Set up a spy on the 'filter()' array method to track calls to it
      const filterSpy = spyOn(quiz.questions, "filter");

      // Call the 'filterQuestionsByDifficulty()' method
      quiz.filterQuestionsByDifficulty(1);

      // Check if the 'filter()' array method was called on the 'questions' array
      expect(filterSpy).toHaveBeenCalled();
      // Check that the 'filter()' array method was called only once
      expect(filterSpy).toHaveBeenCalledTimes(1);
      // Check that the 'filter()' array method was called correctly, with a function as its argument
      expect(filterSpy).toHaveBeenCalledWith(jasmine.any(Function));
    });

    // ****************************************************************************************************
    // DAY 2: 'filterQuestionsByDifficulty()' method
    //
    // Below are 4 tests that you need to write for the 'filterQuestionsByDifficulty()' method.
    // ****************************************************************************************************

    it("should be defined", () => {
      // YOUR CODE HERE:
      //
      // 1. Instantiate a new Quiz object
      const quiz = new Quiz([], "test", 60);

      // 2. Check if the filterQuestionsByDifficulty() method is defined
      expect(quiz.filterQuestionsByDifficulty).toBeDefined();
    });

    it("should be a function", () => {
      // YOUR CODE HERE:
      //
      // 1. Instantiate a new Quiz object
      const quiz = new Quiz([], "test", 60);

      // 2. Check if the .filterQuestionsByDifficulty is a function
      expect(typeof quiz.filterQuestionsByDifficulty).toBe("function");
    });

    it("should receive 1 argument (difficulty)", () => {
      // YOUR CODE HERE:
      //
      // 1. Instantiate a new Quiz object
      const quiz = new Quiz([], "test", 60);

      // 2. Check if the filterQuestionsByDifficulty() method takes 1 argument
      expect(quiz.filterQuestionsByDifficulty.length).toEqual(1);
    });

    it("should update the 'questions' array with the questions filtered by difficulty", () => {
      // 1. Read the above test description to understand what this test should do

      // Array with questions to be used in the test and passed to the Quiz constructor
      const questions = [
        {
          text: "Question 1",
          choices: ["a", "b", "c"],
          answer: "a",
          difficulty: 1,
        },
        {
          text: "Question 2",
          choices: ["d", "e", "f"],
          answer: "d",
          difficulty: 2,
        },
        {
          text: "Question 3",
          choices: ["g", "h", "i"],
          answer: "g",
          difficulty: 2,
        },
        {
          text: "Question 4",
          choices: ["j", "k", "l"],
          answer: "j",
          difficulty: 3,
        },
      ];

      // YOUR CODE HERE:
      //
      // 2. Instantiate a new Quiz object with the test questions
      const quiz = new Quiz(questions, "test", 60);

      // 3. Call the `filterQuestionsByDifficulty()` method with a number between 1 and 3 as a 1st argument.
      quiz.filterQuestionsByDifficulty(2);

      // 4. Check if the questions array has been filtered correctly
      expect(quiz.questions).toEqual([questions[1], questions[2]]);
    });

    it("should not change the 'questions' array if the 1st argument is not a number between 1 and 3", () => {
      // 1. Read the above test description to understand what this test should do

      // Array with questions to be used in the test and passed to the Quiz constructor
      const questions = [
        {
          text: "Question 1",
          choices: ["a", "b", "c"],
          answer: "a",
          difficulty: 1,
        },
        {
          text: "Question 2",
          choices: ["d", "e", "f"],
          answer: "d",
          difficulty: 2,
        },
        {
          text: "Question 3",
          choices: ["g", "h", "i"],
          answer: "g",
          difficulty: 3,
        },
      ];

      // YOUR CODE HERE:
      //
      // 2. Instantiate a new Quiz object with the test questions
      const quiz = new Quiz(questions, "test", 60);

      // 3. Call the `filterQuestionsByDifficulty()` method with a string as a 1st argument (wrong data type).
      quiz.filterQuestionsByDifficulty("1");

      // 4. Check if the questions array is still the same as the original (it hasn't been filtered)
      expect(quiz.questions).toEqual(questions);
    });
  });

  // ****************************************************************************************************
  // DAY 2
  //
  // The 1st test is already written for you -  checking if the 'reduce()' array method is used.
  //
  // The test block below is currently skipped ('xdescribe').
  // Once you start working on the tests, change the 'xdescribe' to 'describe' to enable the tests.
  // ****************************************************************************************************

  xdescribe("averageDifficulty() method", () => {
    it("should use the 'reduce()' array method on the 'questions' array", () => {
      // Instantiate a new Quiz object
      const quiz = new Quiz([], "test", 60);
      // Set up a spy on the 'reduce()' array method to track calls to it
      const reduceSpy = spyOn(quiz.questions, "reduce");

      // Call the 'averageDifficulty()' method
      quiz.averageDifficulty();

      // Check if the 'reduce()' array method was called on the 'questions' array
      expect(reduceSpy).toHaveBeenCalled();
      // Check that the 'reduce()' array method was called only once
      expect(reduceSpy).toHaveBeenCalledTimes(1);
      // Check that the 'reduce()' array method was called correctly, with a function as its 1st argument and optional 2nd argument
      expect(reduceSpy.calls.allArgs()[0][0]).toEqual(jasmine.any(Function));
    });

    // ****************************************************************************************************
    // DAY 2: 'averageDifficulty()' method
    //
    // Below are 4 tests that you need to write for the 'averageDifficulty()' method.
    // ****************************************************************************************************

    it("should be defined", () => {
      // YOUR CODE HERE:
      //
      // 1. Instantiate a new Quiz object
      // 2. Check if the averageDifficulty() method is defined
    });

    it("should be a function", () => {
      // YOUR CODE HERE:
      //
      // 1. Instantiate a new Quiz object
      // 2. Check if the .averageDifficulty is a function
    });

    it("should receive no arguments", () => {
      // YOUR CODE HERE:
      //
      // 1. Instantiate a new Quiz object
      // 2. Check that the averageDifficulty() method takes no arguments
    });

    it("should return the average difficulty of the questions in the quiz", () => {
      // Array with questions to be used in the test and passed to the Quiz constructor
      const questions = [
        {
          text: "Question 1",
          choices: ["a", "b", "c"],
          answer: "a",
          difficulty: 1,
        },
        {
          text: "Question 2",
          choices: ["d", "e", "f"],
          answer: "d",
          difficulty: 2,
        },
        {
          text: "Question 3",
          choices: ["g", "h", "i"],
          answer: "g",
          difficulty: 2,
        },
        {
          text: "Question 4",
          choices: ["j", "k", "l"],
          answer: "j",
          difficulty: 1,
        },
        {
          text: "Question 5",
          choices: ["m", "n", "o"],
          answer: "m",
          difficulty: 3,
        },
      ];

      // YOUR CODE HERE:
      //
      // 1. Instantiate a new Quiz object with the test questions

      // 2. Check that the averageDifficulty() method returns the correct average when called
    });
  });
});
