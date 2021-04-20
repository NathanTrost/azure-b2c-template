import Head from "next/head";
import styles from "../styles/Home.module.css";
import setupPwdTogglers from "../utils/passwordToggle";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sign up or sign in</title>
        <script type="text/javascript">{setupPwdTogglers()}</script>
      </Head>

      <div class="container unified_container" role="presentation">
        <div class="row">
          <div class="col-lg-6">
            <div class="panel panel-default">
              <div class="panel-body">
                <h1>The Puzzle Society</h1>

                <div id="api" data-name="Unified">
                  <form
                    id="localAccountForm"
                    action="JavaScript:void(0);"
                    class="localAccount"
                    aria-label="Sign in with your email address"
                  >
                    <div class="intro">
                      <h2 aria-level="1">Sign in with your email address</h2>
                    </div>
                    <div
                      class="error pageLevel"
                      aria-hidden="true"
                      role="alert"
                      style="display: none;"
                    >
                      <p></p>
                    </div>
                    <div class="entry">
                      <div class="entry-item">
                        <div
                          class="error itemLevel"
                          aria-hidden="true"
                          role="alert"
                          style="display: none;"
                        >
                          <p></p>
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="Email Address"
                          title="Please enter a valid Email Address"
                          pattern="^[a-zA-Z0-9!#$%&amp;'+^_`{}~-]+(?:\.[a-zA-Z0-9!#$%&amp;'+^_`{}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$"
                          autofocus=""
                          placeholder="Email Address"
                          aria-label="Email Address"
                        />
                      </div>
                      <div class="entry-item">
                        <div class="password-label"></div>
                        <div
                          class="error itemLevel"
                          aria-hidden="true"
                          style="display: none;"
                        >
                          <p role="alert"></p>
                        </div>
                        <input
                          type="password"
                          id="password"
                          name="Password"
                          placeholder="Password"
                          aria-label="Password"
                          autocomplete="current-password"
                          aria-required="true"
                        />
                        <div class="forgot-password center-height">
                          <a
                            id="forgotPassword"
                            href="/amub2c.onmicrosoft.com/B2C_1_test2/api/CombinedSigninAndSignup/unified?claimsexchange=ForgotPassword&amp;csrf_token=MFFLYnllUk9odmFWMzV6K0N0dmFIK0poeXJHTkNpdHNwaWhVeW1oTVd0MGxqY256MlFYWTdVNVlXYTdCMU5tbWJKMDdlckI3ZDQ3WnZNSDZDWXVNVXc9PTsyMDIxLTA0LTIwVDE3OjI4OjA1LjE1NDM3MzlaO1dyeTh1M05TaDZGY29WTUxEa0N6R1E9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&amp;tx=StateProperties=eyJUSUQiOiI3YjRkZjQwZi0wMzk3LTQ4OTAtOTE3Mi1hMzE0OGFhZWUzMTIifQ&amp;p=B2C_1_test2"
                          >
                            Forgot your password?
                          </a>
                        </div>
                      </div>
                      <div class="working"></div>

                      <div class="buttons">
                        <button id="next" type="submit" form="localAccountForm">
                          Sign in
                        </button>
                      </div>
                    </div>
                    <div class="divider">
                      <h2>OR</h2>
                    </div>
                    <div class="create">
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
}
