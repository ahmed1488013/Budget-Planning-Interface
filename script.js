// JavaScript Code
document.addEventListener("DOMContentLoaded", () => {
    const addExpenseButtons = document.querySelectorAll(".add-expense");

    addExpenseButtons.forEach(button => {
        button.addEventListener("click", () => {
            const categoryElement = button.closest(".category");
            const categoryName = categoryElement.querySelector("h3").textContent;

            const amount = prompt(`Add expense for category "${categoryName}":`);
            if (amount && !isNaN(amount) && Number(amount) > 0) {
                const spentElement = categoryElement.querySelector(".category-details span strong:first-child");
                const remainingElement = categoryElement.querySelector(".category-details span strong:last-child");

                let spent = parseFloat(spentElement.textContent.replace("$", ""));
                let remaining = parseFloat(remainingElement.textContent.replace("$", ""));

                spent += parseFloat(amount);
                remaining -= parseFloat(amount);

                spentElement.textContent = `$${spent.toFixed(2)}`;
                remainingElement.textContent = `$${Math.max(remaining, 0).toFixed(2)}`;

                const progressBar = categoryElement.querySelector(".progress-value");
                const total = spent + remaining;
                const percentage = (spent / total) * 100;
                progressBar.style.width = `${percentage}%`;
            } else {
                alert("Please enter a valid positive number!");
            }
        });
    });
});
