/**@jsxImportSource @emotion/react */

import HeroImg from "./images/hero-desktop.jpg";
import BgSvg from "./images/bg-pattern-desktop.svg";
import Logo from "./images/logo.svg";
import { colors, gradients } from "./styles";
import { ReactComponent as Arrow } from "./images/icon-arrow.svg";
import { useState } from "react";

export { App };

function EmailForm() {
  const [error, setError] = useState(false);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { email } = evt.target;
    if (
      !email.value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setError(true);
      return;
    }
    setError(false);
  };
  return (
    <form
      css={{
        marginTop: "1em",
        position: "relative",
      }}
      onSubmit={handleSubmit}
    >
      <input
        id="email"
        css={{
          backgroundColor: "transparent",
          borderColor: colors.softRed,
          borderStyle: "solid",
          borderWidth: "1px",
          padding: "1em 2em",
          borderRadius: "32em",
          width: "90%",
          outline: "0",
          "&::placeholder": {
            color: colors.softRed,
          },
          "&:focus": {
            border: `2px solid ${colors.desaturatedRed}`,
          },
        }}
        placeholder="Email Address"
      />
      {error ? (
        <p
          css={{
            color: colors.desaturatedRed,
            margin: "2em",
            marginTop: ".6em",
          }}
        >
          Please provide a valid email
        </p>
      ) : null}
      <button
        type="submit"
        css={{
          backgroundImage: gradients.gradient2,
          padding: "1.07em 2.7em",
          borderRadius: "60px",
          position: "absolute",
          right: "1em",
          top: 0,
        }}
      >
        <Arrow />
      </button>
    </form>
  );
}

function Background() {
  return (
    <div
      css={{
        height: "100vh",
        width: "100vw",
        backgroundImage: gradients.gradient1,
        display: "flex",
      }}
    >
      <div
        css={{
          flex: 1,
          position: "relative",
          display: "flex",
        }}
      >
        <img
          src={BgSvg}
          alt="bg-svg"
          css={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 9,
          }}
        />

        <div
          css={{
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            width: "60%",
            height: "100vh",
            margin: "auto",
            paddingTop: "2.7em",
          }}
        >
          <img
            src={Logo}
            alt="logo"
            css={{
              width: "10em",
            }}
          />
          <h1
            css={{
              fontSize: "3.6rem",
              letterSpacing: ".5rem",
              fontWeight: 600,
              color: colors.darkGrayishRed,
              marginTop: "1.8em",
            }}
          >
            <span
              css={{
                fontWeight: 300,
                color: colors.softRed,
              }}
            >
              WE'RE
            </span>
            <br /> COMING
            <br /> SOON
          </h1>
          <p
            css={{
              color: colors.softRed,
              paddingRight: "6em",
              lineHeight: "1.8",
            }}
          >
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <EmailForm />
        </div>
      </div>
      <img
        src={HeroImg}
        alt="hero"
        css={{
          height: "100vh",
        }}
      />
    </div>
  );
}

function App() {
  return <Background />;
}
