import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [checkboxes, setCheckboxes] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const pageRef = useRef();

  useEffect(() => {
    const handleCheckboxClick = (event) => setIsVisible((current) => !current);
    // Not sure if we need multiple password fields, but this accounts for that
    const pwdInputs = pageRef.current.querySelectorAll("input[type=password]");
    const buildCheckboxes = Object.keys(pwdInputs).map((key) => {
      const id = pwdInputs[key].id;

      return {
        id,
        element: (
          <div>
            <label htmlFor={`${id}-toggler`}>Show Password</label>
            <input
              data-relative-input={id}
              id={`${id}-toggler`}
              onClick={handleCheckboxClick}
              type="checkbox"
            />
          </div>
        ),
      };
    });

    setCheckboxes(buildCheckboxes);
  }, []);

  useEffect(() => {
    const passwordElement = pageRef.current.querySelector(`input[id=password]`);
    passwordElement.type = isVisible ? "text" : "password";
  }, [isVisible]);

  // useEffect(() => {
  //   if (checkboxes) {
  //     console.log({ checkboxes });
  //     checkboxes.forEach((checkbox) => {
  //       const passwordElement = pageRef.current.querySelector(
  //         `input[id=${checkbox.id}]`
  //       );
  //     });
  //   }
  // }, [checkboxes]);

  return (
    <div className={styles.container} ref={pageRef}>
      <Head>
        <title>Sign up or sign in</title>
      </Head>

      <div className="container unified_container" role="presentation">
        <div className="row">
          <div className="col-lg-6">
            <div className="panel panel-default">
              <div className="panel-body">
                <h1>The Puzzle Society</h1>
                <div className="test-checkboxes">
                  {checkboxes && checkboxes.map((each) => each.element)}
                </div>
                <div id="api"></div>
                {/* This entire area will be populated by Azure's form, it's here
                simply for local development */}
                <div
                  id="api-copy"
                  data-name="Unified"
                  style={{ display: "none" }}
                >
                  <form
                    id="localAccountForm"
                    className="localAccount"
                    aria-label="Sign in with your email address"
                  >
                    <div className="intro">
                      <h2 aria-level="1">Sign in with your email address</h2>
                    </div>
                    <div
                      className="error pageLevel"
                      aria-hidden="true"
                      role="alert"
                      style={{ display: "none" }}
                    >
                      <p></p>
                    </div>
                    <div className="entry">
                      <div className="entry-item">
                        <div
                          className="error itemLevel"
                          aria-hidden="true"
                          role="alert"
                          style={{ display: "none" }}
                        >
                          <p></p>
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="Email Address"
                          title="Please enter a valid Email Address"
                          pattern="^[a-zA-Z0-9!#$%&amp;'+^_`{}~-]+(?:\.[a-zA-Z0-9!#$%&amp;'+^_`{}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$"
                          autoFocus=""
                          placeholder="Email Address"
                          aria-label="Email Address"
                        />
                      </div>
                      <div className="entry-item">
                        <div className="password-label"></div>
                        <div
                          className="error itemLevel"
                          aria-hidden="true"
                          style={{ display: "none" }}
                        >
                          <p role="alert"></p>
                        </div>
                        <input
                          type="password"
                          id="password"
                          name="Password"
                          placeholder="Password"
                          aria-label="Password"
                          autoComplete="current-password"
                          aria-required="true"
                        />
                        <div className="forgot-password center-height">
                          <a
                            id="forgotPassword"
                            href="/amub2c.onmicrosoft.com/B2C_1_test2/api/CombinedSigninAndSignup/unified?claimsexchange=ForgotPassword&amp;csrf_token=MFFLYnllUk9odmFWMzV6K0N0dmFIK0poeXJHTkNpdHNwaWhVeW1oTVd0MGxqY256MlFYWTdVNVlXYTdCMU5tbWJKMDdlckI3ZDQ3WnZNSDZDWXVNVXc9PTsyMDIxLTA0LTIwVDE3OjI4OjA1LjE1NDM3MzlaO1dyeTh1M05TaDZGY29WTUxEa0N6R1E9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&amp;tx=StateProperties=eyJUSUQiOiI3YjRkZjQwZi0wMzk3LTQ4OTAtOTE3Mi1hMzE0OGFhZWUzMTIifQ&amp;p=B2C_1_test2"
                          >
                            Forgot your password?
                          </a>
                        </div>
                      </div>
                      <div className="working"></div>

                      <div className="buttons">
                        <button id="next" type="submit" form="localAccountForm">
                          Sign in
                        </button>
                      </div>
                    </div>
                    <div className="divider">
                      <h2>OR</h2>
                    </div>
                    <div className="create">
                      <p>
                        Don't have an account?
                        <a
                          id="createAccount"
                          href="/amub2c.onmicrosoft.com/B2C_1_test2/api/CombinedSigninAndSignup/unified?local=signup&amp;csrf_token=MFFLYnllUk9odmFWMzV6K0N0dmFIK0poeXJHTkNpdHNwaWhVeW1oTVd0MGxqY256MlFYWTdVNVlXYTdCMU5tbWJKMDdlckI3ZDQ3WnZNSDZDWXVNVXc9PTsyMDIxLTA0LTIwVDE3OjI4OjA1LjE1NDM3MzlaO1dyeTh1M05TaDZGY29WTUxEa0N6R1E9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&amp;tx=StateProperties=eyJUSUQiOiI3YjRkZjQwZi0wMzk3LTQ4OTAtOTE3Mi1hMzE0OGFhZWUzMTIifQ&amp;p=B2C_1_test2"
                        >
                          Sign up now
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="shadowMeasureIt"></div>
      <div id="divCoordMeasureIt"></div>
      <div id="divRectangleMeasureIt">
        <div id="divRectangleBGMeasureIt"></div>
      </div>
    </div>
  );
};
export default Home;
