import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  useAppContext,
} from "../context/AppContext";

const sections = [
  "What brings you here?",
  "About you",
  "Where you live",
  "Education",
  "Work",
  "Income & household",
  "Family & health",
];

const Questionnaire = () => {

  const navigate =
    useNavigate();

  const {
    userAnswers = {},
    setUserAnswers,
    generateResults,
  } = useAppContext();

  const [
    step,
    setStep,
  ] = useState(0);

  // LOAD SAVED ANSWERS

  useEffect(() => {

    const savedAnswers =
      localStorage.getItem(
        "eligifyAnswers"
      );

    if (
      savedAnswers &&
      setUserAnswers
    ) {

      setUserAnswers(
        JSON.parse(
          savedAnswers
        )
      );
    }

  }, []);

  // SAVE ANSWERS

  useEffect(() => {

    localStorage.setItem(
      "eligifyAnswers",
      JSON.stringify(
        userAnswers
      )
    );

  }, [userAnswers]);

  // PROGRESS

  const progress =
    ((step + 1) /
      sections.length) *
    100;

  // UPDATE ANSWERS

  const updateAnswer = (
    key,
    value
  ) => {

    if (
      !setUserAnswers
    )
      return;

    const updatedAnswers =
      {
        ...userAnswers,
        [key]: value,
      };

    setUserAnswers(
      updatedAnswers
    );

    localStorage.setItem(
      "eligifyAnswers",
      JSON.stringify(
        updatedAnswers
      )
    );
  };

  // VALIDATION

  const isStepValid =
    () => {

      switch (step) {

        case 0:
          return !!userAnswers.intent;

        case 1:
          return (
            userAnswers.age &&
            userAnswers.gender &&
            userAnswers.category &&
            userAnswers.disability
          );

        case 2:
          return (
            userAnswers.state &&
            userAnswers.area
          );

        case 3:
          return (
            userAnswers.education &&
            userAnswers.student
          );

        case 4:
          return !!userAnswers.occupation;

        case 5:
          return (
            userAnswers.income &&
            userAnswers.bpl
          );

        case 6:
          return (
            userAnswers.girlChild &&
            userAnswers.pregnant
          );

        default:
          return false;
      }
    };

  // NEXT STEP

  const nextStep = () => {

    if (
      !isStepValid()
    )
      return;

    if (
      step <
      sections.length -
        1
    ) {

      setStep(
        step + 1
      );

    } else {

      generateResults();

      navigate(
        "/results"
      );
    }
  };

  // PREV STEP

  const prevStep = () => {

    if (step > 0) {

      setStep(
        step - 1
      );
    }
  };

  // BUTTON STYLE

  const getButtonClass =
    (key, value) => {

      return userAnswers[
        key
      ] === value
        ? "option-btn selected"
        : "option-btn";
    };

  // OPTION RENDERER

  const renderOptions =
    (key, options) => {

      return (
        <div className="option-grid">

          {options.map(
            (item) => (

              <button
                key={item}
                type="button"
                className={getButtonClass(
                  key,
                  item
                )}
                onClick={() =>
                  updateAnswer(
                    key,
                    item
                  )
                }
              >
                {item}
              </button>
            )
          )}

        </div>
      );
    };

  return (
    <div className="page-container">

      <div className="questionnaire-wrapper">

        {/* TOP */}

        <div className="progress-top">

          <p>
            Section{" "}
            {step + 1} of{" "}
            {
              sections.length
            }
          </p>

          <p>
            {Math.round(
              progress
            )}
            % complete
          </p>

        </div>

        {/* BAR */}

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          ></div>

        </div>

        {/* TABS */}

        <div className="step-tabs">

          {sections.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className={
                  index === step
                    ? "step-tab active"
                    : index <
                      step
                    ? "step-tab completed"
                    : "step-tab"
                }
              >
                {item}
              </div>
            )
          )}

        </div>

        {/* CARD */}

        <div className="questionnaire-card">

          {/* STEP 1 */}

          {step === 0 && (
            <>

              <h1>
                What brings
                you here?
              </h1>

              <p className="question-subtitle">
                Pick what
                kind of help
                you're
                looking for.
              </p>

              {renderOptions(
                "intent",
                [
                  "Scholarship / Education support",
                  "Housing",
                  "Financial assistance / Loan",
                  "Health coverage",
                  "Employment / Skill training",
                  "Agricultural support",
                  "Pension",
                  "Women/Child welfare",
                  "Business/Startup support",
                ]
              )}

            </>
          )}

          {/* STEP 2 */}

          {step === 1 && (
            <>

              <h1>
                About you
              </h1>

              <input
                type="number"
                className="question-input"
                placeholder="Enter age"
                value={
                  userAnswers.age ||
                  ""
                }
                onChange={(e) =>
                  updateAnswer(
                    "age",
                    e.target.value
                  )
                }
              />

              <h3>
                Gender
              </h3>

              {renderOptions(
                "gender",
                [
                  "Male",
                  "Female",
                  "Transgender",
                ]
              )}

              <h3>
                Category
              </h3>

              {renderOptions(
                "category",
                [
                  "General",
                  "OBC",
                  "SC",
                  "ST",
                ]
              )}

              <h3>
                Person with disability?
              </h3>

              {renderOptions(
                "disability",
                [
                  "No",
                  "Yes (40%+)",
                  "Yes (80%+)",
                ]
              )}

            </>
          )}

          {/* STEP 3 */}

          {step === 2 && (
            <>

              <h1>
                Where you
                live
              </h1>

              <input
                className="question-input"
                placeholder="e.g Haryana"
                value={
                  userAnswers.state ||
                  ""
                }
                onChange={(e) =>
                  updateAnswer(
                    "state",
                    e.target.value
                  )
                }
              />

              <h3>
                Area
              </h3>

              {renderOptions(
                "area",
                [
                  "Urban",
                  "Rural",
                ]
              )}

            </>
          )}

          {/* STEP 4 */}

          {step === 3 && (
            <>

              <h1>
                Education
              </h1>

              <h3>
                Highest education
              </h3>

              {renderOptions(
                "education",
                [
                  "No formal",
                  "Primary",
                  "Secondary",
                  "12th",
                  "Graduate",
                  "Postgraduate",
                ]
              )}

              <h3>
                Currently a student?
              </h3>

              {renderOptions(
                "student",
                [
                  "Yes",
                  "No",
                ]
              )}

            </>
          )}

          {/* STEP 5 */}

          {step === 4 && (
            <>

              <h1>
                Work
              </h1>

              <h3>
                Occupation
              </h3>

              {renderOptions(
                "occupation",
                [
                  "Student",
                  "Farmer",
                  "Daily wage worker",
                  "Salaried",
                  "Self-employed",
                  "Unemployed",
                  "Homemaker",
                  "Retired",
                ]
              )}

            </>
          )}

          {/* STEP 6 */}

          {step === 5 && (
            <>

              <h1>
                Income &
                household
              </h1>

              <h3>
                Annual household income
              </h3>

              {renderOptions(
                "income",
                [
                  "Below 1L",
                  "1-3L",
                  "3-6L",
                  "Above 6L",
                ]
              )}

              <h3>
                BPL card holder?
              </h3>

              {renderOptions(
                "bpl",
                [
                  "Yes",
                  "No",
                ]
              )}

            </>
          )}

          {/* STEP 7 */}

          {step === 6 && (
            <>

              <h1>
                Family &
                health
              </h1>

              <h3>
                Girl child in family?
              </h3>

              {renderOptions(
                "girlChild",
                [
                  "Yes",
                  "No",
                ]
              )}

              <h3>
                Pregnant or new mother?
              </h3>

              {renderOptions(
                "pregnant",
                [
                  "Yes",
                  "No",
                ]
              )}

            </>
          )}

          {/* BUTTONS */}

          <div className="questionnaire-buttons">

            <button
              type="button"
              className="secondary-btn"
              onClick={
                prevStep
              }
              disabled={
                step === 0
              }
            >
              Back
            </button>

            <button
              type="button"
              className={
                isStepValid()
                  ? "primary-btn"
                  : "primary-btn disabled-btn"
              }
              onClick={
                nextStep
              }
              disabled={
                !isStepValid()
              }
            >
              {step ===
              sections.length -
                1
                ? "See my schemes"
                : "Continue"}
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Questionnaire;