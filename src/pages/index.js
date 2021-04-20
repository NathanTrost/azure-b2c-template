import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>Sign up or sign in</title>

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head> */}

      <div class="container unified_container" role="presentation">
        <div class="row">
          <div class="col-lg-6">
            <div class="panel panel-default">
              <div class="panel-body">
                <h1>The Puzzle Society</h1>

                <div id="api"></div>
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
