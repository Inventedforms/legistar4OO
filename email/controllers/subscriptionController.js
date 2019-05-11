// Test POST with
//     curl -X POST localhost:3000/subscribe -H 'Content-Type: application/json' --data '{"email": "example@example.com"}'

// TODO pull these from the database
const legistar_city_counties_list = [
  'Oakland',
  'Alameda (city)',
  'Alameda (county)',
  'Fremont',
  'Union City',
  'Hayward',
  'Piedmont',
  'Emeryville',
  'Dublin',
  'Coco County',
  'Richmond',
  'Walnut Creek',
  'Pittsburg',
  'Concord',
  'Redwood City',
  'San Mateo (county)',
  'Mountain View',
  'Cupertino',
  'Sunnyvale. Milpitas. Palo Alto',
  'Marin (county)',
  'San Rafael',
  'Santa Rosa',
  'Vallejo',
  'Fairfield',
  'Solano (county)',
];


// TODO pull these from the database
const legistar_bodies = [];

function subscribe(req, res) {
  const model = {
    email: req.body.email,
    subscriptions: req.body.subscriptions,
  };

  // model.save();
  return res.status(201).json(model);
}

module.exports = {
  subscribe: subscribe,
};
