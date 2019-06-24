const {newRobot, station, isWorkday, prioritizeTasks}  = require("./robot.js");

// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {
  // arrange
  myRobot = newRobot(true, true, false);

  // act
  result = station(myRobot);

  // assert
  expect(result).toBe(1);
});

test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {
  // arrange
  myRobot = newRobot(true, false, true );

  // act
  result = station(myRobot);

  // assert
expect(result).toBe(2);
});

test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {
  // arrange
  myRobot = newRobot(true, false, false );

  // act
  result = station(myRobot);

  // assert
  expect(result).toBe(3);
});

test('test_that_robot_in_good_condition_sent_to_station_4', () => {
  // arrange
  myRobot = newRobot(false, false, false );

  // act
  result = station(myRobot);


  // assert
  expect(result).toBe(4);

});

test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {
  // arrange
  myRobot = newRobot(true, true, true);
  

  // act
myTask = prioritizeTasks(myRobot);
  // assert
  expect(myTask).toBe(-1);

})

test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
  // arrange
  const todos = [1,2,4];
  myRobot = newRobot(true, true, true);
  myRobot.todos = todos;

  // act
  myTask = prioritizeTasks(myRobot);

  // assert
  expect(myTask).toBe(4);
});

test('test_workday_on_day_off_returns_false', () => {
  // arrange
  myRobot = newRobot(true, true, true);
  myRobot.dayOff = false;

  // act
  result = isWorkday(myRobot, false);

  // assert
  expect(result).toBe(false);
});

test('test_workday_not_day_off_returns_true', () => {
  // arrange
  myRobot = newRobot(true, true, true);
  myRobot.dayOff = false;


  // act
  result = isWorkday(myRobot, true);

  // assert
  expect(result).toBe(true);
});
