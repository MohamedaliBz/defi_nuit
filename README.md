App Overview
App.js: The main entry point where the background and RollTheDate components are rendered.
RollTheDate.js: The component that handles the date manipulation logic. It includes the logic for rolling the dice, adjusting the date, and displaying the results.
OceanBackground.js: A component to display the animated ocean background.
How It Works
Dice Rolling: Each time the user clicks "Roll and Minus" or "Roll and Add," two dice are rolled. The sum of the dice is used to adjust the selected date (either subtracting or adding years, months, or days).
Date Adjustment: The user can select whether they want to adjust the date by years, months, or days using a dropdown.
Birth Date Display: The current date is displayed as an input field, which is updated when the dice are rolled.