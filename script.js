
const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const diceBtn = document.querySelector(".dice-btn");

async function getAdvice() {
    try {
        diceBtn.disabled = true;
        const response = await fetch("https://api.adviceslip.com/advice", { cache: "no-cache" });
        if (!response.ok) throw new Error("Failed to fetch advice");
        const data = await response.json();
        adviceId.textContent = `ADVICE #${data.slip.id}`;
        adviceText.textContent = `"${data.slip.advice}"`;
    } catch (error) {
        adviceText.textContent = "Could not load advice. Please try again.";
        console.error(error);
    } finally {
        diceBtn.disabled = false;
    }
} 
diceBtn.addEventListener("click", getAdvice);

getAdvice();