import Button from "../Button";

function NewGameButton({ restartGame, gameStarted }) {
  return (
    <Button
      action={restartGame}
      flipOnGameStart={gameStarted} // only flip when gameStarted is true
      style={{
        "--bg": "var(--clr-primary-100)",
        "--fg": "var(--clr-primary-400)",
      }}
    >
      New Game
    </Button>
  );
}

export default NewGameButton;