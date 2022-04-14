const peopleOnTheBus = (busStops) => {
  let remainingPeople = 0;
  busStops.forEach((busStop) => {
    remainingPeople += busStop[0] - busStop[1];
  });
  return remainingPeople;
};
