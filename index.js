const selectPlan = (planNumber) => {
    const plans = document.querySelectorAll('.plan');
    
        plans.forEach(plan => {
        plan.classList.remove('plan--selected');
    });
    
    const selectedPlan = document.getElementById(`plan${planNumber}`);
    selectedPlan.classList.add('plan--selected');
}

document.getElementById("plan1").addEventListener("click", () => selectPlan(1));
document.getElementById("plan2").addEventListener("click", () => selectPlan(2));
document.getElementById("plan3").addEventListener("click", () => selectPlan(3));