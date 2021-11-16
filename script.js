$.fn.digits = function reformatSalaryInputValue() {
  return this.each(function () {
    $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
  });
};

const salaryInput = $('input[id="salary"]').numeric({
  negative: false });


salaryInput.keyup(function () {
  const yearlySalary = $(this).val();
  const hourlySalary = calculateHourlySalary(yearlySalary);
  const monthlySalary = calculateMonthlySalary(yearlySalary);

  renderHourMonthSalary(hourlySalary, monthlySalary);
});

function calculateHourlySalary(yearlySalary) {
  const workingHours = 2080; 
  return toTwoDecimalPlaces(yearlySalary / workingHours);
}

function calculateMonthlySalary(yearlySalary) {
  return toTwoDecimalPlaces(yearlySalary / 12);
}

function toTwoDecimalPlaces(num) {
  return num.toFixed(2);
}

function renderHourMonthSalary(hourlySalary, monthlySalary) {
  $("#hour").html("$" + hourlySalary);
  $("#month").html("$" + monthlySalary);
}